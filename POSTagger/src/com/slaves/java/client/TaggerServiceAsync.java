package com.slaves.java.client;

import java.util.Collection;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface TaggerServiceAsync
{
	public void makeHTML(String input, Collection<String> tags, AsyncCallback<String> callback);
}
