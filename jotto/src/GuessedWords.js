import React from 'react';
import PropTypes from 'prop-types';


const GuessedWords = (props) => {
    let contents
    if (props.guessedWords.length === 0){
       contents = (
        <div data-test="guess-instructions">
          Please enter a 5-letter word to guess!
        </div>
        )
    }
    return (
            <div data-test="component-guessed-words" >
            { contents }
            </div>
           );
};


GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
       PropTypes.shape({
         guessedWord: PropTypes.string.isRequired,
         letterMatchCount: PropTypes.number.isRequired
       })
    ).isRequired,
};

export default GuessedWords;
