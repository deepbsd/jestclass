import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

/**
 * Factory function to create a shallow wrapper for the App component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @param {any} state - any state for initial setup
 * @return {ShallowWrapper}
 *
 */

const setup = (props={}, state=null) => {
    const wrapper = shallow(<App {...props} />);
	if (state) {
		wrapper.setState(props);
	}
	return wrapper;
}

/**
 * Return ShallowWrapper containing node(s) with given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - value of data-test attribute to search for
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

it('Renders App without an error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);

});

it('Renders the counter increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);

});

it('Renders the counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.length).toBe(1);

});

it('Counter must start at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);

});

it('Clicking on button must increment counter in display', () => {
	const counter = 7;
	const wrapper = setup(null, {counter});
	
	//find button and click
    const button = findByTestAttr(wrapper, "increment-button");
	button.simulate('click');
	wrapper.update();

	//find display and test value
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
	expect(counterDisplay.text()).toContain(counter+1);


	
	
});
