package com.slaves.java.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.Label;

public class Credits extends Composite {
	private DockPanel dock = new DockPanel();
	private Label lbl = new Label();
	
	public Credits(){
		initWidget(this.dock);
		this.lbl = new Label("Created by: Alon, Daniel and Peter under hard pressure and without time");
		dock.add(lbl, DockPanel.CENTER);
		
	
		
	
	}
}
