import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, checkProps} from '../test/testUtils';

import GuessedWords from './GuessedWords';


const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords Component
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper} 
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
}


it('Test does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});

describe('If there are _no_ words guessed', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = setup({ guessedWords: [] });
    })

    it('Renders with no errors', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });

    it ('Renders instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, 'guess-instructions');
      expect(instructions.text().length).not.toBe(0);
    });

});

describe('If there _are_ words guessed', () => {

    let wrapper;

    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ];

    beforeEach(() => {
      wrapper = setup({ guessedWords });
    })

    it('Renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });

    it('Renders "Guessed Words" section', () => {
      const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
      expect(guessedWordsNode.length).toBe(1);
    });

    it('Renders the correct number of guessed words', () => {
      const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word')
      expect(guessedWordsNodes.length).toBe(guessedWords.length);
    });
});

