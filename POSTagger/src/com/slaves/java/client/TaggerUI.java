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
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.ListBox;
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
	@UiField ListBox POSListBox;

	private HashSet<String> selectedTags;

	public TaggerUI()
	{
		initWidget(uiBinder.createAndBindUi(this));
		
		taggedTextArea.setId("taggedText");
		taggedTextArea.addClassName("back");
		sidebar.setId("sidebar");
		POSListBox.setMultipleSelect(true);
		
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
			}
		});
	}

	private class ButtonClickHandler implements ClickHandler
	{

		@Override
		public void onClick(ClickEvent event)
		{
			if(POSListBox.isItemSelected(0))
			{
				selectedTags.add("NN");
				selectedTags.add("NNS");
				selectedTags.add("NNP");
				selectedTags.add("NNPS");
			}
			if(POSListBox.isItemSelected(1))
			{
				selectedTags.add("VB");
				selectedTags.add("VBD");
				selectedTags.add("VBG");
				selectedTags.add("VBN");
				selectedTags.add("VBP");
				selectedTags.add("VBZ");
			}
			if(POSListBox.isItemSelected(2))
			{
				selectedTags.add("JJ");
				selectedTags.add("JJR");
				selectedTags.add("JJS");
			}
			if(POSListBox.isItemSelected(3))
			{
				selectedTags.add("RB");
				selectedTags.add("RBR");
				selectedTags.add("RBS");
			}
			if(POSListBox.isItemSelected(4))
				selectedTags.add("IN");
			if(POSListBox.isItemSelected(5))
				selectedTags.add("DT");
			
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
