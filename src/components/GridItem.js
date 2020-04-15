import React from 'react';

const ItemCard = props => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.info.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
};

export default ItemCard;

