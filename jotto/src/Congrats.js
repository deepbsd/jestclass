import React from 'react';

/**
 * Functional React component for Congratulations after winning game
 * @param {object} React props
 * @function
 * @returns {JSX.element} if success prop is true
 */

export default (props) => {

            if (props.success){
                return (
                    <div data-test="component-congrats" >
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

