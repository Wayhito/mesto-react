import React from 'react';

function PopupWithForm(props)
{
    return(
        <div className={props.isOpen ? `popup ${props.name}-popup popup_opened` : `popup ${props.name}-popup`}>
            <button type="button" className={`popup__cross-button ${props.name}-popup__cross-button`} onClick={props.onClose}>
                <img className={`popup__cross ${props.name}-popup__cross`} src={require('../images/cross.svg').default} alt="(закрыть)"/>
            </button>

        <div className={`popup__container ${props.name}-popup__container`}>
            <h3 className={`popup__paragraph ${props.name}-popup__paragraph`}>{props.title}</h3>

            <form name={props.name} className={`popup__form popup__form_type_${props.name}`} onSubmit={props.onSubmit}>
                {props.children}
            </form>
        </div>
    </div>
    );
}

export default PopupWithForm;

