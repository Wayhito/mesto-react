


import React from 'react';

function ImagePopup(props) {
    if (props.card != null) {
    return(
        <div className="popup img-popup popup_opened">
            <div className="img-popup__container">

                <button type="button" className="popup__cross-button img-popup__cross-button" onClick={props.onClose}>
                    <img className="popup__cross img-popup__cross" src={require('../images/cross.svg').default} alt="(закрыть)"/>
                </button>

                <img className="img-popup__image" src={props.card.link} alt={`Фотография ${props.card.name}`}/>
                <p className="img-popup__text">{props.card.name}</p>

            </div>
        </div>
    );

    } else {
        <div className="popup img-popup">
            <div className="img-popup__container">

                <button type="button" className="popup__cross-button img-popup__cross-button" onClick={props.onClose}>
                    <img className="popup__cross img-popup__cross" src={require('../images/cross.svg').default} alt="(закрыть)"/>
                </button>

                <img className="img-popup__image" src="#" alt="Фотография места"/>
                <p className="img-popup__text">Название картинки</p>

            </div>
      </div>
}        
}

export default ImagePopup;