package com.slaves.java.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RichTextArea;

public class PageOne extends Composite {
	private DockPanel dock = new DockPanel();

	private Label lbl;
	//private Image img;
	private Button sendButton;

	public PageOne(){
		initWidget(this.dock);
		dock.setBorderWidth(0);

//		this.img = new Image("/images/1.jpg");
//		dock.add(img, DockPanel.NORTH);

		this.lbl = new Label("This is the POS testfield:");
		dock.add(lbl, DockPanel.NORTH);

		this.sendButton = new Button("POS-tag this article");
		sendButton.addClickHandler(new ButtonClickHandler());
		dock.add(sendButton, DockPanel.SOUTH);

		RichTextArea area = new RichTextArea();
		area.ensureDebugId("cwRichText-area");
		area.setSize("100%", "14em");
		dock.add(area, DockPanel.CENTER);


		area.setText("Please insert your text here");

		sendButton.addStyleName("sendButton");
		
		

	}

	private class ButtonClickHandler implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			// TODO Auto-generated method stub

			//here the text should be processed

		}
	}
}
