import React from 'react';
import {shallow} from 'enzyme';
import {checkProps, findByTestAttr} from '../test/testUtils';
import Congrats from './Congrats';


const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Congrats {...setupProps} />)
};

it('Render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1); 
});

it('Render no text at all when success prop is false', () => {
  const wrapper = setup({success: false});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

it('Renders non-empty congratulations message when success prop is true', () => {
  const wrapper = setup({success: true});
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

it('Does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats.propTypes, expectedProps);
    //expect(propError).toBeUndefined();
});
