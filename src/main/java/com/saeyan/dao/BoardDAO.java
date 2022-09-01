package com.saeyan.dao;

public class BoardDAO {
	private BoardDAO() {
		
	}
	
	private static BoardDAO instnace = new BoardDAO();
	
	public static BoardDAO getInstance() {
		return instnace;
	}
	
	
}
