/***
 * Uses SCOWL wordlist for implementation in TaggerServiceImpl; license below
 * 
 * Custom wordlist generated from http://app.aspell.net/create using SCOWL
with parameters:
  diacritic: both
  max_size: 95
  max_variant: 3
  special: <none>
  spelling: US GBs GBz CA AU

Using Git Commit From: Sun Jan 22 17:39:13 2017 -0500 [fbc7107]

Copyright 2000-2014 by Kevin Atkinson

  Permission to use, copy, modify, distribute and sell these word
  lists, the associated scripts, the output created from the scripts,
  and its documentation for any purpose is hereby granted without fee,
  provided that the above copyright notice appears in all copies and
  that both that copyright notice and this permission notice appear in
  supporting documentation. Kevin Atkinson makes no representations
  about the suitability of this array for any purpose. It is provided
  "as is" without express or implied warranty.

Copyright (c) J Ross Beresford 1993-1999. All Rights Reserved.

  The following restriction is placed on the use of this publication:
  if The UK Advanced Cryptics Dictionary is used in a software package
  or redistributed in any form, the copyright notice must be
  prominently displayed and the text of this document must be included
  verbatim.

  There are no other restrictions: I would like to see the list
  distributed as widely as possible.

Special credit also goes to Alan Beale <biljir@pobox.com> as he has
given me an incredible amount of feedback and created a number of
special lists (those found in the Supplement) in order to help improve
the overall quality of SCOWL.

Many sources were used in the creation of SCOWL, most of them were in
the public domain or used indirectly.  For a full list please see the
SCOWL readme.

http://wordlist.aspell.net/
 */

package com.slaves.java.server;

import java.util.Collection;
import java.util.HashSet;

public class BloomFilter<T>
{
	boolean[] hashedHere;

	/**
	 * default constructor
	 * 
	 * initializes the filter with no items
	 * uses an array of 10000 since we want to minimize collisions
	 */
	public BloomFilter()
	{
		this(new HashSet<T>(), 10000000);
	}

	/**
	 * constructor
	 * 
	 * initializes the filter with no items
	 * uses an array of the specified size
	 * 
	 * @param arraySz - the desired size of the array
	 */
	public BloomFilter(int arraySz)
	{
		this(new HashSet<T>(), arraySz);
	}

	/**
	 * constructor
	 * 
	 * initializes the filter with the given items
	 * uses an array of 10000 since we want to minimize collisions
	 * 
	 * @param items - the collection of items to use
	 */
	public BloomFilter(Collection<T> items)
	{
		this(items, 10000000);
	}

	/**
	 * constructor (underlying constructor of all others)
	 * 
	 * initializes the filter with the given items
	 * uses an array of the specified size
	 * 
	 * @param items - the collection of items to use
	 * @param arraySz - the desired size of the array
	 */
	public BloomFilter(Collection<T> items, int arraySz)
	{
		hashedHere = new boolean[arraySz];
		for(int i = 0; i < arraySz; i ++)
			hashedHere[i] = false;
		for(T item : items)
		{
			hashedHere[makePositive(item.hashCode()) % arraySz] = true;
			Integer SHC = makePositive(item.toString().hashCode());
			hashedHere[SHC % arraySz] = true;
			hashedHere[makePositive(SHC.toString().hashCode()) % arraySz] = true;
		}
	}

	/**
	 * adds an item to the filter
	 * 
	 * @param item - the item to add
	 */
	public void add(T item)
	{
		hashedHere[makePositive(item.hashCode()) % hashedHere.length] = true;
		Integer SHC = makePositive(item.toString().hashCode());
		hashedHere[SHC % hashedHere.length] = true;
		hashedHere[makePositive(SHC.toString().hashCode()) % hashedHere.length] = true;
	}

	/**
	 * adds all given items to the filter
	 * 
	 * @param items - the items to add
	 */
	public void addAll(Collection<T> items)
	{
		for(T item : items)
		{
			hashedHere[makePositive(item.hashCode()) % hashedHere.length] = true;
			Integer SHC = makePositive(item.toString().hashCode());
			hashedHere[SHC % hashedHere.length] = true;
			hashedHere[makePositive(SHC.toString().hashCode()) % hashedHere.length] = true;
		}
	}

	/**
	 * checks whether the filter contains the specified item
	 * 
	 * may return false positives, but never false negatives
	 * 
	 * @param item
	 * @return false if the item is definitely not in the filter, else true
	 */
	public boolean contains(T item)
	{
		Integer SHC = makePositive(item.toString().hashCode());
		return hashedHere[makePositive(item.hashCode()) % hashedHere.length] && hashedHere[SHC % hashedHere.length] && hashedHere[makePositive(SHC.toString().hashCode()) % hashedHere.length];
	}

	/**
	 * maps a negative number to a positive number
	 * differs from Math.abs() in that it does not usually return a negative number's absolute value but will ALWAYS return a nonnegative number, even when given Integer.MIN_VALUE
	 * 
	 * @param arg - the potentially negative number
	 * @return the argument if it was nonnegative, else some nonnegative number
	 */
	private int makePositive(int arg)
	{
		return arg < 0 ? arg - Integer.MIN_VALUE : arg;
	}
}
