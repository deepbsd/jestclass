import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';
import React from 'react';
import { shallow } from 'enzyme';


/**
 * Test guessWord()
 * Test for no guessed words and some guess words
 * ForEach condition, test acts correctly for
 * both correct and incorrect guesses
 */
describe('guessWord action dispatcher', () => {
	const secretWord = 'party';
	const unsuccessfulGuess = 'train';
	
	describe('no guessed words', () => {
	  let store;
	  const initialState = { secretWord };
 	  beforeEach( () => {
        store = storeFactory(initialState);
	  });
	  
	  it('does the right thing for incorrect guess', () => {
		store.dispatch(guessWord(unsuccessfulGuess));

	    const newState = store.getState();

	    const expectedState = {
		  ...initialState,
		  success: false,
		  guessedWords: [{
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
		  }]
	    };

	    expect(newState).toEqual(expectedState);

	  });

	  it('does the right thing for correct guess', () => {

  	  });

	});
	
	describe('some guessed words', () => {
	  it('does the right thing for incorrect guess', () => {

	  });
	  
	  it('does the right thing for correct guess', () => {

	  });

	});
	
});

describe('storeFactory integration test', () => {
	describe('no guessed words', () => {

	});
	
	describe('some guessed words', () => {

	});
});

