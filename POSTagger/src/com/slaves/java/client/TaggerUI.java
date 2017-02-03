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
import com.google.gwt.user.client.ui.RootPanel;
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
	@UiField Button helpBtn;
	@UiField DivElement taggedTextArea;
	@UiField DivElement sidebar;

	@UiField CheckBox everything;
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

		// set ids/classes so that CSS takes effect
		taggedTextArea.setId("taggedText");
		taggedTextArea.addClassName("back");
		sidebar.setId("sidebar");

		selectedTags = new HashSet<>();

		submit.addClickHandler(new ButtonClickHandler());

		// when the "everything" checkbox is toggled, set everything to the same value
		everything.addClickHandler(new ClickHandler()
		{
			public void onClick(ClickEvent e)
			{
				boolean isSelected = everything.getValue();
				CCCheckBox.setValue(isSelected);
				CDCheckBox.setValue(isSelected);
				DTCheckBox.setValue(isSelected);
				EXCheckBox.setValue(isSelected);
				FWCheckBox.setValue(isSelected);
				INCheckBox.setValue(isSelected);
				JJCheckBox.setValue(isSelected);
				LSCheckBox.setValue(isSelected);
				NNCheckBox.setValue(isSelected);
				POSCheckBox.setValue(isSelected);
				RBCheckBox.setValue(isSelected);
				RPCheckBox.setValue(isSelected);
				SYMCheckBox.setValue(isSelected);
				UHCheckBox.setValue(isSelected);
				VBCheckBox.setValue(isSelected);
				WHCheckBox.setValue(isSelected);
			}
		});

		// the handler for the "return to text entry" button
		returnBtn.setVisible(false);
		returnBtn.addClickHandler(new ButtonClickHandler()
		{
			public void onClick(ClickEvent e)
			{
				// reset the area with the tagged text and send it to the back
				taggedTextArea.setInnerHTML("");
				taggedTextArea.removeClassName("front");
				taggedTextArea.addClassName("back");
				
				// make the text entry box visible again
				text.setVisible(true);
				submit.setVisible(true);
				sidebar.removeClassName("invisible");
				
				// reset this button's visibility and the selected tagset
				returnBtn.setVisible(false);
				selectedTags = new HashSet<>();
			}
		});

		// handler for the "info" button
		helpBtn.addClickHandler(new ButtonClickHandler()
		{
			public void onClick(ClickEvent e)
			{
				// just changes to the info page
				RootPanel.get().clear();
				RootPanel.get().add(new InfoPage());
			}
		});
	}

	/**
	 * handler for the "tag" button
	 */
	private class ButtonClickHandler implements ClickHandler
	{

		@Override
		public void onClick(ClickEvent event)
		{
			// add the tags for the selected checkboxes
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
			{
				selectedTags.add("IN");
				selectedTags.add("TO");
			}

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
				selectedTags.add("VBD");
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

			// prepare RPC object
			TaggerServiceAsync tagService = GWT.create(TaggerService.class);
			AsyncCallback<String> callback = new AsyncCallback<String>()
			{
				public void onSuccess(String html)
				{
					// make the tagged text <div> visible and put the generated html in it
					taggedTextArea.setInnerHTML(html);
					taggedTextArea.removeClassName("back");
					taggedTextArea.addClassName("front");

					// make the text entry field, checkboxes, and submit button invisible
					text.setVisible(false);
					submit.setVisible(false);
					sidebar.addClassName("invisible");
					returnBtn.setVisible(true); // make the return button visible
				}

				public void onFailure(Throwable e)
				{
					// display an error message but don't bombard the user with technical details since that wouldn't help anyway
					Window.alert("sth happened, sry bud\n" + e.getMessage());
				}
			};

			// grab text from the text box
			String enteredText = text.getText();

			// if there's a lot, show a confirmation dialog (because of lag)
			if(enteredText.split("\\s+").length > 30000 && !Window.confirm("tl; dr\ndude are you sure you want to make me read all that?"))
				return;

			// trigger the RPC
			tagService.makeHTML(enteredText, selectedTags, callback);
		}
	}
}
