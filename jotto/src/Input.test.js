import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';


import Input from './Input';

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

describe('Updating State ', () => {


});