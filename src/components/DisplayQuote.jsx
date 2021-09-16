import React from 'react';
import './QuoteCard.css';

function DisplayQuote({selectedQuote}) {
    const {quote, character, image} = selectedQuote;
    return (
        <figure className="QuoteCard">
            <img src={image} alt={character}/>
            <figcaption>
                <blockquote>{quote}</blockquote>
                <cite>{character}</cite>
            </figcaption>
        </figure>
    );
}

export default DisplayQuote;