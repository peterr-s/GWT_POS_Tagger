package com.slaves.java.client;


import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.RootPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class POSTagger implements EntryPoint {
	private Image img;

	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		DockPanel dock = new DockPanel();
		this.img = new Image("/images/2.jpg");
		img.setSize("500px", "300px");
		dock.add(img, DockPanel.NORTH);
		//PageOne object = new PageOne();
		Start start = new Start();

		//RootPanel.get().add(object);
		RootPanel.get().add(dock);;
		RootPanel.get().add(start);
	}

}
