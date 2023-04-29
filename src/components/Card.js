import React from 'react';

function Card (props) {

  const handleClick = () => {
    props.onCardClick(props.card);
  }

  return (   
        <div className="element">
        <div className="element__image-field">
            <img className="element__image" src={props.card.link} alt="Картинка галереи" onClick={handleClick}/>
            <button className="element__remove"></button>
        </div>
        <div className="element__panel">
            <h2 className="element__name">{props.card.name}</h2>
            <div className="element__like-container">
            <button className="element__like-button">
                <img className="element__like" src={require('../images/like.svg').default} alt="лайк"/>
            </button>
            <span className="element__like-counter">{props.card.likes.length}</span>
            </div>
        </div> 
        </div>
  );
}

export default Card;