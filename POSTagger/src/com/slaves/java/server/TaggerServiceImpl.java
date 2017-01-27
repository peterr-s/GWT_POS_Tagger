package com.slaves.java.server;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
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

	@Override
	public String makeHTML(String input, Collection<String> tags)
	{
		String html = "";

		try
		{
			InputStream sentModelIn = new FileInputStream("en_sent.bin");
			SentenceModel sentModel = new SentenceModel(sentModelIn);
			SentenceDetector sentenceDetector = new SentenceDetectorME(sentModel);
			//sentModelIn.close();

			InputStream tokenModelIn = new FileInputStream("en-token.bin");
			TokenizerModel tokenModel = new TokenizerModel(tokenModelIn);
			Tokenizer tokenizer = new TokenizerME(tokenModel);
			//tokenModelIn.close();

			InputStream taggerModelIn = new FileInputStream("en-pos-maxent.bin");
			POSModel taggerModel = new POSModel(taggerModelIn);
			POSTagger tagger = new POSTaggerME(taggerModel);
			//taggerModelIn.close();

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
					
					if(i > 0 && !thisTag.equals("SYM"))
						html += " ";
					
					if(tags.contains(thisTag))
						html += "<span class=\"" + thisTag + "\">" + tokens.get(i) + "</span>";
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
