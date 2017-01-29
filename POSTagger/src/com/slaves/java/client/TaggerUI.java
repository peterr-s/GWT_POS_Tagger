package com.slaves.java.client;

import java.util.HashSet;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.Widget;

public class TaggerUI extends Composite
{
	private static TaggerUIUiBinder uiBinder = GWT.create(TaggerUIUiBinder.class);

	interface TaggerUIUiBinder extends UiBinder<Widget, TaggerUI>
	{
	}

	@UiField TextArea text;
	@UiField Button submit;
	@UiField Button returnBtn;
	@UiField DivElement taggedTextArea;
	@UiField DivElement sidebar;
	
	@UiField CheckBox CCCheckBox;
	@UiField CheckBox CDCheckBox;
	@UiField CheckBox DTCheckBox;
	@UiField CheckBox EXCheckBox;
	@UiField CheckBox FWCheckBox;
	@UiField CheckBox INCheckBox;
	@UiField CheckBox JJCheckBox;
	@UiField CheckBox LSCheckBox;
	@UiField CheckBox NNCheckBox;
	@UiField CheckBox POSCheckBox;
	@UiField CheckBox RBCheckBox;
	@UiField CheckBox RPCheckBox;
	@UiField CheckBox SYMCheckBox;
	@UiField CheckBox UHCheckBox;
	@UiField CheckBox VBCheckBox;
	@UiField CheckBox WHCheckBox;

	private HashSet<String> selectedTags;

	public TaggerUI()
	{
		initWidget(uiBinder.createAndBindUi(this));
		
		taggedTextArea.setId("taggedText");
		taggedTextArea.addClassName("back");
		sidebar.setId("sidebar");
		
		selectedTags = new HashSet<>();
		
		submit.addClickHandler(new ButtonClickHandler());
		
		returnBtn.setVisible(false);
		returnBtn.addClickHandler(new ButtonClickHandler(){
			public void onClick(ClickEvent e)
			{
				taggedTextArea.setInnerHTML("");
				taggedTextArea.removeClassName("from");
				taggedTextArea.addClassName("back");
				text.setVisible(true);
				submit.setVisible(true);
				sidebar.removeClassName("invisible");
				returnBtn.setVisible(false);
				
				selectedTags = new HashSet<>();
			}
		});
	}

	private class ButtonClickHandler implements ClickHandler
	{

		@Override
		public void onClick(ClickEvent event)
		{
			if(CCCheckBox.getValue())
				selectedTags.add("CC");

			if(CDCheckBox.getValue())
				selectedTags.add("CD");

			if(DTCheckBox.getValue())
			{
				selectedTags.add("DT");
				selectedTags.add("PDT");
				selectedTags.add("WDT");
			}

			if(EXCheckBox.getValue())
				selectedTags.add("EX");

			if(FWCheckBox.getValue())
				selectedTags.add("FW");

			if(INCheckBox.getValue())
				selectedTags.add("IN");

			if(JJCheckBox.getValue())
			{
				selectedTags.add("JJ");
				selectedTags.add("JJR");
				selectedTags.add("JJS");
			}

			if(LSCheckBox.getValue())
				selectedTags.add("LS");

			if(NNCheckBox.getValue())
			{
				selectedTags.add("NN");
				selectedTags.add("NNS");
				selectedTags.add("NNP");
				selectedTags.add("NNPS");
				selectedTags.add("PRP");
			}

			if(POSCheckBox.getValue())
			{
				selectedTags.add("POS");
				selectedTags.add("PRPS");
			}

			if(RBCheckBox.getValue())
			{
				selectedTags.add("RB");
				selectedTags.add("RBR");
				selectedTags.add("RBS");
			}

			if(RPCheckBox.getValue())
				selectedTags.add("RP");

			if(SYMCheckBox.getValue())
				selectedTags.add("SYM");

			if(UHCheckBox.getValue())
				selectedTags.add("UH");

			if(VBCheckBox.getValue())
			{
				selectedTags.add("VB");
				selectedTags.add("MD");
				selectedTags.add("VBG");
				selectedTags.add("VBN");
				selectedTags.add("VBP");
				selectedTags.add("VBZ");
			}

			if(WHCheckBox.getValue())
			{
				selectedTags.add("WRB");
				selectedTags.add("WP");
				selectedTags.add("WPS");
			}

			
			TaggerServiceAsync tagService = GWT.create(TaggerService.class);
			AsyncCallback<String> callback = new AsyncCallback<String>()
			{
				public void onSuccess(String html)
				{
					taggedTextArea.setInnerHTML(html);
					taggedTextArea.removeClassName("back");
					taggedTextArea.addClassName("front");

					text.setVisible(false);
					submit.setVisible(false);
					sidebar.addClassName("invisible");
					returnBtn.setVisible(true);
				}

				public void onFailure(Throwable e)
				{
					Window.alert("sth happened, sry bud\n" + e.getMessage());
				}
			};
			tagService.makeHTML(text.getText(), selectedTags, callback);
		}
	}
}
