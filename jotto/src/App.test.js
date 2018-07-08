import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

import { getSecretWord } from './actions';

/**
 * @Function Setup
 * @param { object } state - state object for setup
 * @returns {ShallowWrapper}
 */
const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
} 

describe('redux properties', () => {
    it('has access to `success` piece of state', () => {
      const success = true;
      const wrapper = setup({success});
      const successProp = wrapper.instance().props.success;
      expect(successProp).toBe(success);
    });
    
    it('has access to `secretWord` piece of state', () => {
      const secretWord = 'party';
      const wrapper = setup({secretWord});
      const secretWordProp = wrapper.instance().props.secretWord;
      expect(secretWordProp).toBe(secretWord);
    });
    it('has access to `guessedWords` piece of state', () => {
      const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
      const wrapper = setup({guessedWords});
      const guessedWordsProp = wrapper.instance().props.guessedWords;
      expect(guessedWordsProp).toBe(guessedWords);
    });
    it('getSecretWord action creator is a function on the props', () => {
      const wrapper = setup();
      const getSecretWordProp = wrapper.instance().props.getSecretWord;
      expect(getSecretWordProp).toBeInstanceOf(Function);
    });
});

it('`getSecretWord` runs when component is mounted', () => {

    const getSecretWordMock = jest.fn();
    //const getSecretWordMock = getSecretWord;

    const props = {
        getSecretWord: getSecretWordMock,
        success: false,
        guessedWords: [],
    }
    
    const wrapper = shallow(<UnconnectedApp {...props} />)


    // run the lifecycle method...
    wrapper.instance().componentDidMount();

    // Did our mock function get called?
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);

});



