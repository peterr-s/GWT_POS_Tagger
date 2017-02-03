package com.slaves.java.server;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.slaves.java.client.TaggerService;

import opennlp.tools.postag.POSModel;
import opennlp.tools.postag.POSTagger;
import opennlp.tools.postag.POSTaggerME;
import opennlp.tools.sentdetect.SentenceDetector;
import opennlp.tools.sentdetect.SentenceDetectorME;
import opennlp.tools.sentdetect.SentenceModel;
import opennlp.tools.tokenize.Tokenizer;
import opennlp.tools.tokenize.TokenizerME;
import opennlp.tools.tokenize.TokenizerModel;

@SuppressWarnings("serial")
public class TaggerServiceImpl extends RemoteServiceServlet implements TaggerService
{
	// a map from tags to their human readable descriptions (for hover text)
	public static final HashMap<String, String> tagDescriptions;
	static
	{
		tagDescriptions = new HashMap<>();
		tagDescriptions.put("CC", "coordinating conjunction");
		tagDescriptions.put("CD", "cardinal number");
		tagDescriptions.put("DT", "determiner");
		tagDescriptions.put("PDT", "predeterminer");
		tagDescriptions.put("EX", "existential \"there\"");
		tagDescriptions.put("FW", "foreign word");
		tagDescriptions.put("IN", "preposition/subordinating conjunction");
		tagDescriptions.put("TO", "preposition");
		tagDescriptions.put("JJ", "adjective (positive)");
		tagDescriptions.put("JJR", "adjective (comparative)");
		tagDescriptions.put("JJS", "adjective (superlative)");
		tagDescriptions.put("LS", "list item marker");
		tagDescriptions.put("NN", "noun (singular, common)");
		tagDescriptions.put("NNS", "noun (plural, common)");
		tagDescriptions.put("NNP", "noun (singular, proper)");
		tagDescriptions.put("NNPS", "noun (plural, proper)");
		tagDescriptions.put("POS", "genitive marker");
		tagDescriptions.put("PRP", "personal pronoun");
		tagDescriptions.put("PRPS", "possessive pronoun");
		tagDescriptions.put("RB", "adverb (positive)");
		tagDescriptions.put("RBR", "adverb (comparative)");
		tagDescriptions.put("RBS", "adverb (superlative)");
		tagDescriptions.put("RP", "particle");
		tagDescriptions.put("SYM", "symbol");
		tagDescriptions.put("UH", "interjection");
		tagDescriptions.put("VB", "verb (uninflected)");
		tagDescriptions.put("VBD", "verb (past tense)");
		tagDescriptions.put("VBG", "verb (gerund)");
		tagDescriptions.put("VBN", "verb (past participle)");
		tagDescriptions.put("VBP", "verb (not 3rd person sg., present tense)");
		tagDescriptions.put("VBZ", "verb (3rd person sg., present tense)");
		tagDescriptions.put("WP", "&quot;wh-&quot; pronoun");
		tagDescriptions.put("WPS", "possessive &quot;wh-&quot; pronoun");
		tagDescriptions.put("WRB", "&quot;wh-&quot; adverb");
	}

	// a Bloom filter for basic dictionary checking
	public static final BloomFilter<String> dictionary;
	static
	{
		dictionary = new BloomFilter<>();
		try
		{
			// read from the SCOWL word list
			BufferedReader dReader = new BufferedReader(new InputStreamReader(new FileInputStream(new File("wordlist.txt"))));
			String nLine;
			while ((nLine = dReader.readLine()) != null)
				dictionary.add(nLine);
			dReader.close();
		}
		catch (Exception e)
		{
			System.err.println("Error reading dictionary: " + e.getMessage());
			e.printStackTrace();
		}
	}

	/**
	 * makes HTML from the given input, with the given tags highlighted
	 * 
	 * tags must be from the Penn Treebank
	 * 
	 * the output HTML will not be a valid document, but a concatenation of <p> tags for embedding in another element
	 * tagged tokens will be represented as <span> elements with classes according to their tags and hovertext according to the description map and their presence in the dictionary
	 * 
	 * @param input - the text to tag
	 * @param tags - the tags to mark
	 * @return a block of HTML containing as many <p> tags as there were paragraphs in the input
	 */
	@Override
	public String makeHTML(String input, Collection<String> tags)
	{
		String html = ""; // for holding generated html

		try
		{
			// load the sentence splitter model
			InputStream sentModelIn = new FileInputStream("en_sent.bin");
			SentenceModel sentModel = new SentenceModel(sentModelIn);
			SentenceDetector sentenceDetector = new SentenceDetectorME(sentModel);
			sentModelIn.close();

			// load the tokenizer model
			InputStream tokenModelIn = new FileInputStream("en-token.bin");
			TokenizerModel tokenModel = new TokenizerModel(tokenModelIn);
			Tokenizer tokenizer = new TokenizerME(tokenModel);
			tokenModelIn.close();

			// load the POS tagger model
			InputStream taggerModelIn = new FileInputStream("en-pos-maxent.bin");
			POSModel taggerModel = new POSModel(taggerModelIn);
			POSTagger tagger = new POSTaggerME(taggerModel);
			taggerModelIn.close();

			// split by paragraphs (newlines) to determine where the <p> tags should be
			List<String> paragraphs = Arrays.asList(input.split("\\n+"));

			// for each paragraph
			for(String paragraph : paragraphs)
			{
				html += "<p>"; // start the <p> if necessary

				// for storing tokens and tags (nth element of one should correspond to nth element of the other)
				ArrayList<String> tokens = new ArrayList<>(),
						textTags = new ArrayList<>();

				// split by sentences
				List<String> sentences = Arrays.asList(sentenceDetector.sentDetect(paragraph));
				for(String sentence : sentences) // for each sentence
				{
					String[] sentenceTokens = tokenizer.tokenize(sentence); // tokenize
					String[] sentenceTags = tagger.tag(sentenceTokens); // tag
					tokens.addAll(Arrays.asList(sentenceTokens)); // turn the tokens into an ArrayList for easier manipulation later
					textTags.addAll(Arrays.asList(sentenceTags)); // same for the tags
				}

				// if there's a size mismatch something went wrong
				if(tokens.size() != textTags.size())
					throw new Exception();

				// for each token
				for(int i = 0; i < tokens.size(); i ++)
				{
					String thisTag = textTags.get(i); // get the corresponding tag

					// don't put a preceding space if it's punctuation or an "'s" or something of the sort
					if(i > 0 && !(!thisTag.matches("[A-Z]+") || thisTag.equals("POS") || thisTag.equals("SYM")))
						html += " ";

					String thisToken = tokens.get(i);
					boolean real = dictionary.contains(thisToken.toUpperCase()),
							look = tags.contains(thisTag);
					if(look) // if this is a tag we're looking for, wrap the token in a span for formatting and hovertext
						html += "<span class=\"" + thisTag.replaceAll("\\$", "S") + "\" title=\"" + tagDescriptions.get(thisTag) + (real ? "" : " (not in dictionary!)") + "\">";
					if(!real) // if the token isn't in the dictionary, wrap it in an inner span so that formatting takes precedence
						html += "<span class=\"notreal\">";
					html += thisToken;
					if(!real)
						html += "</span>";
					if(look)
						html += "</span>";
				}

				html += "</p>"; // close the <p> if necessary
			}

		}
		catch (Exception e)
		{
			e.printStackTrace();
			return "Something went wrong while tagging your text: " + e.getMessage();
		}

		return html;
	}
}