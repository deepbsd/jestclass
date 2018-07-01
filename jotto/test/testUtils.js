/**
 * Returns node(s) with given test-value attribute.
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper
 * @param {string} val - value of data-test attribute
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}


