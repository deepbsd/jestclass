import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';


import Input, { UnconnectedInput } from './Input';

/**
 * Factory function to create a shallow wrapper for testing the Input Component
 * @function setup
 * @param {object} InitialState - initial state for this setup
 * @returns {ShallowWrapper} Shallow Object
 *
 */
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive();
    return wrapper;
}


describe('Render Input component when', () => {
    describe('word has not been guessed', () => {

        let wrapper;
        beforeEach( () => {
          const initialState = { success: false };
          wrapper = setup(initialState);
        })

        it('renders component without error', () => {
          const component = findByTestAttr(wrapper, 'component-input');
          expect(component.length).toBe(1);
        });

        it('renders the input box', () => {
          const inputBox = findByTestAttr(wrapper, 'input-box');
          expect(inputBox.length).toBe(1);
        });
        
        it('renders the submit button', () => {
          const submitButton = findByTestAttr(wrapper, 'submit-button');
          expect(submitButton.length).toBe(1);

        });
    });

    describe('word has been guessed when', () => {
        
        let wrapper;
        beforeEach( () => {
          const initialState = { success: true };
          wrapper = setup(initialState);
        } )
        
        it('renders component without error', () => {
          const component = findByTestAttr(wrapper, 'component-input');
          expect(component.length).toBe(1);
        });

        it('does NOT render the input box', () => {
          const inputBox = findByTestAttr(wrapper, 'input-box');
          expect(inputBox.length).toBe(0);
        });
        
        it('does NOT render the submit button', () => {
          const submitButton = findByTestAttr(wrapper, 'submit-button');
          expect(submitButton.length).toBe(0);
        });
    });
});

describe('Redux props', () => {
    it('has success piece of state as props', () => {
      const success = true;
      const wrapper = setup({ success });
      const successProp = wrapper.instance().props.success;
      expect(successProp).toBe(success);
    });

    it('the `guessWord` action creator is a function prop', () => {
      const wrapper = setup();
      const guessWordProp = wrapper.instance().props.guessWord;
      expect(guessWordProp).toBeInstanceOf(Function);
    });

});


describe('`guessWord` action creator call', () => {

    let guessWordMock;
    let wrapper;
    const guessedWord = 'train';

    // setting up a guessWord mock
    beforeEach(() => {
        guessWordMock = jest.fn();
        const props = {
            guessWord: guessWordMock,
        };
        
        // pass props to the testing component
        wrapper = shallow(<UnconnectedInput {...props} />);

        // pass values to the inputBox
        wrapper.instance().inputBox.current = { value: guessedWord }

        // Simulate the click on the submit button
        const button = findByTestAttr(wrapper, 'submit-button');
        button.simulate('click', { preventDefault() {} });
    });

    it('gets called when submit button is pressed', () => {
        // Did our mock function get called?
        const guessWordCallCount = guessWordMock.mock.calls.length;
        //console.log(wrapper.debug())
        expect(guessWordCallCount).toBe(1);
    });

    it('calls guessWord with correct input value', () => {
       console.log(guessWordMock.mock.calls);
       const guessWordArg = guessWordMock.mock.calls[0][0];
       expect(guessWordArg).toBe(guessedWord);

    });

});
