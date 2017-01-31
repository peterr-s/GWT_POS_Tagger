package com.slaves.java.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HasText;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;

public class InfoPage extends Composite
{

	private static InfoPageUiBinder uiBinder = GWT.create(InfoPageUiBinder.class);

	interface InfoPageUiBinder extends UiBinder<Widget, InfoPage>
	{
	}

	@UiField Button back;

	public InfoPage()
	{
		initWidget(uiBinder.createAndBindUi(this));

		back.addClickHandler(new ClickHandler()
		{
			public void onClick(ClickEvent e)
			{
				RootPanel.get().clear();
				RootPanel.get().add(new TaggerUI());
			}
		});
	}

	/*
	 * @Override
	 * public String getText()
	 * {
	 * // TODO Auto-generated method stub
	 * return null;
	 * }
	 * 
	 * @Override
	 * public void setText(String text)
	 * {
	 * // TODO Auto-generated method stub
	 * 
	 * }
	 */

}
