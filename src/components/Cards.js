import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}

const Cards = ({ cards }) => {
    console.log(cards);
	return(
			<div>
                {
                    cards && cards.map(card => {
                        return (
                            <div 
                                className='ui raised very padded text container segment'
                                style={{marginTop:'80px'}} 
                                key={card.id}
                            >
                                <Link to={`/card/${card.title}`} className='ui header'>{card.title}</Link>
                                <p>{card.body}</p>
                            </div>
                        )
                    })
                }
            </div>
	)
}

export default connect(mapStateToProps)(Cards);