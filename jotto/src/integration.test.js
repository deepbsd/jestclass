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
		store.dispatch(guessWord(secretWord));
	    const newState = store.getState();
	    const expectedState = {
		  ...initialState,
		  success: true,
		  guessedWords: [{
            guessedWord: secretWord,
            letterMatchCount: 5
		  }]
	    };
	    expect(newState).toEqual(expectedState);
  	  });

	});
	
	describe('some guessed words', () => {
      
      const guessedWords = [ { guessedWord: 'agile', matchedLetterCount: 1 } ];

      const initialState = { guessedWords, secretWord };

      let store;
      beforeEach( () => {
          store = storeFactory(initialState);
      });

	  it('does the right thing for incorrect guess', () => {
        store.dispatch(guessWord(unsuccessfulGuess));
        const newState = store.getState()
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, {guessedWord: unsuccessfulGuess, letterMatchCount: 3}],
            }
        expect(newState).toEqual(expectedState);
	  });
	  
	  it('does the right thing for correct guess', () => {
        store.dispatch(guessWord(secretWord));
        const newState = store.getState()
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [...guessedWords, {guessedWord: secretWord, letterMatchCount: 5}],
            }
        expect(newState).toEqual(expectedState);
	  });

	});
	
});

describe('storeFactory integration test', () => {
	describe('no guessed words', () => {

	});
	
	describe('some guessed words', () => {

	});
});

