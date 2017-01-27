package com.slaves.java.client;

import java.util.Collection;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.google.gwt.user.client.rpc.RemoteService;

@RemoteServiceRelativePath("taggerservice")
public interface TaggerService extends RemoteService
{
	public String makeHTML(String input, Collection<String> tags);
}
