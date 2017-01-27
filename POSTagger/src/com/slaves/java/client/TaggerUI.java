package com.slaves.java.client;

import java.util.HashSet;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTML;
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

	private HashSet<String> selectedTags;

	public TaggerUI()
	{
		initWidget(uiBinder.createAndBindUi(this));

		selectedTags = new HashSet<>();
		// DEBUG: populate tagset to avoid null errors
		selectedTags.add("NN");
		
		submit.addClickHandler(new ButtonClickHandler());
	}

	private class ButtonClickHandler implements ClickHandler
	{

		@Override
		public void onClick(ClickEvent event)
		{
			TaggerServiceAsync tagService = GWT.create(TaggerService.class);
			AsyncCallback<String> callback = new AsyncCallback<String>()
			{
				public void onSuccess(String html)
				{
					Window.alert("stuff happened");
					
					HTML divContent = new HTML(html);
					RootPanel.get("taggedText").add(divContent);
					text.setVisible(false);
					submit.setVisible(false);
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
