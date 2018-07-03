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
}


describe('Render Input component when', () => {
    describe('word has not been guessed', () => {
        it('renders component without error', () => {

        });

        it('renders the input box', () => {

        });
        
        it('renders the submit button', () => {

        });
    });

    describe('word has been guessed when', () => {
        it('renders component without error', () => {

        });

        it('does NOT render the input box', () => {

        });
        
        it('does NOT render the submit button', () => {

        });
    });
});

describe('Updating State ', () => {


});
