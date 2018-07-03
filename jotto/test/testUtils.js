import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers/';

/**
 * Create a testing store with imported reducers, middleware, and initialState
 * globals: rootReducer
 * @param {object} initialState
 * @function storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}

/**
 * Returns node(s) with given test-value attribute.
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper
 * @param {string} val - value of data-test attribute
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
            component.propTypes, 
            conformingProps,
            'prop',
            component.name);

    expect(propError).toBeUndefined();
}
