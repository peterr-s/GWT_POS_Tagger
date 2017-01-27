package com.slaves.java.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.VerticalPanel;

public class Start extends Composite {

	private VerticalPanel panel = new VerticalPanel();
	private VerticalPanel panel2 = new VerticalPanel();

	
	public Start(){
		initWidget(this.panel);
		
		Menu menu = new Menu(this);
		this.panel.add(menu);
		
		this.panel2 = new VerticalPanel();
		this.panel.add(panel2);
		
	}
	
	public void DisplayPageOne(){
		this.panel2.clear();
		TaggerUI pageone = new TaggerUI();
		this.panel2.add(pageone);
		
		
	}
	public void DisplayCredits(){
		this.panel2.clear();
		Credits credits = new Credits();
		this.panel2.add(credits);
	}
	
}
