package com.saeyan.controller;

import com.saeyan.controller.action.BoardListAction;
import com.seayan.controller.action.Action;

public class ActionFactory {
	private static ActionFactory instance = new ActionFactory();
	
	private ActionFactory() {
		super();
	}
	
	public static ActionFactory getInstance() {
		return instance;
	}
	
	public Action getAction(String command) {
		Action action = null;
		System.out.println("ActionFactory : " + command);
		
		if(command.equals("board_list")) {
			action = new BoardListAction();
		}
		
		return action;
	}
}
