package com.slaves.java.server;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
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
		tagDescriptions.put("IN", "subordinating conjunction");
		tagDescriptions.put("JJ", "adjective (positive)");
		tagDescriptions.put("JJR", "adjective (comparative)");
		tagDescriptions.put("JJS", "adjective (superlative)");
		tagDescriptions.put("LS", "list item marker");
		tagDescriptions.put("NN", "noun (singular, common)");
		tagDescriptions.put("NNS", "noun (plural, common)");
		tagDescriptions.put("NNP", "noun (singular, proper)");
		tagDescriptions.put("NNPS", "noun (plural, proper)");
		tagDescriptions.put("POS", "genitive marker");
		tagDescriptions.put("RB", "adverb (positive)");
		tagDescriptions.put("RBR", "adverb (comparative)");
		tagDescriptions.put("RBS", "adverb (superlative)");
		tagDescriptions.put("RP", "particle");
		tagDescriptions.put("SYM", "symbol");
		tagDescriptions.put("UH", "interjection");
		tagDescriptions.put("VB", "verb (uninflected)");
		tagDescriptions.put("VBG", "verb (gerund)");
		tagDescriptions.put("VBN", "verb (past participle)");
		tagDescriptions.put("VBP", "verb (not 3rd person sg., present tense)");
		tagDescriptions.put("VBZ", "verb (3rd person sg., present tense)");
		tagDescriptions.put("WP", "&quot;wh-&quot; pronoun");
		tagDescriptions.put("WPS", "possessive &quot;wh-&quot; pronoun");
		tagDescriptions.put("WRB", "&quot;wh-&quot; adverb");
	}

	@Override
	public String makeHTML(String input, Collection<String> tags)
	{
		String html = "";

		try
		{
			InputStream sentModelIn = new FileInputStream("en_sent.bin");
			SentenceModel sentModel = new SentenceModel(sentModelIn);
			SentenceDetector sentenceDetector = new SentenceDetectorME(sentModel);
			sentModelIn.close();

			InputStream tokenModelIn = new FileInputStream("en-token.bin");
			TokenizerModel tokenModel = new TokenizerModel(tokenModelIn);
			Tokenizer tokenizer = new TokenizerME(tokenModel);
			tokenModelIn.close();

			InputStream taggerModelIn = new FileInputStream("en-pos-maxent.bin");
			POSModel taggerModel = new POSModel(taggerModelIn);
			POSTagger tagger = new POSTaggerME(taggerModel);
			taggerModelIn.close();

			List<String> paragraphs = Arrays.asList(input.split("\\n+"));

			for(String paragraph : paragraphs)
			{
				html += "<p>";

				ArrayList<String> tokens = new ArrayList<>(),
						textTags = new ArrayList<>();

				List<String> sentences = Arrays.asList(sentenceDetector.sentDetect(paragraph));
				for(String sentence : sentences)
				{
					String[] sentenceTokens = tokenizer.tokenize(sentence);
					String[] sentenceTags = tagger.tag(sentenceTokens);
					tokens.addAll(Arrays.asList(sentenceTokens));
					textTags.addAll(Arrays.asList(sentenceTags));
				}

				if(tokens.size() != textTags.size())
					throw new Exception();

				for(int i = 0; i < tokens.size(); i ++)
				{
					String thisTag = textTags.get(i);

					if(i > 0 && !(!thisTag.matches("[A-Z]+") || thisTag.equals("POS") || thisTag.equals("SYM")))
						html += " ";

					if(tags.contains(thisTag))
						html += "<span class=\"" + thisTag.replaceAll("\\$", "S") + "\" title=\"" + tagDescriptions.get(thisTag) + "\">" + tokens.get(i) + "</span>";
					else
						html += tokens.get(i);
				}

				html += "</p>";
			}

		}
		catch (Exception e)
		{
			File binFile = new File("en-sent.bin");
			return "Alon wanted to print a stack trace, but Daniel and Peter weren't that mean. You can thank them. " + e.getMessage() + " " + binFile.getAbsolutePath();
		}

		return html;
	}

}
