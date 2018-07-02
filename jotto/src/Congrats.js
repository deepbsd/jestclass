import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for Congratulations after winning game
 * @param {object} React props
 * @function
 * @returns {JSX.element} if success prop is true
 */

const Congrats = (props) => {

            if (props.success){
                return (
                    <div data-test="component-congrats" className="alert alert-success">
                        <span data-test="congrats-message">
                        Congratulations!  You guessed the word!
                        </span>
                    </div>

                 )
            } else {
                return (
                        <div data-test="component-congrats" />
                       )
            }
            
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;
