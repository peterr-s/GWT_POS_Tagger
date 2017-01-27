package com.slaves.java.client;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HorizontalPanel;

public class Menu extends Composite {

	private HorizontalPanel horPanel = new HorizontalPanel();
	private TaggerUI start;

	public Menu( TaggerUI start){

		initWidget(this.horPanel);
		this.start = start;

		Button btn1 = new Button("START");
		btn1.addClickHandler(new ButtonClickHandler1());
		this.horPanel.add(btn1);

		Button btn2 = new Button("Credits");
		btn2.addClickHandler(new ButtonClickHandler2());
		this.horPanel.add(btn2);
	}

	private class ButtonClickHandler1 implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) { 
			//start.DisplayPageOne();

		}

	}

	private class ButtonClickHandler2 implements ClickHandler{

		@Override
		public void onClick(ClickEvent event) {
			//start.DisplayCredits();

			//opens the credits

		}

	}
}
