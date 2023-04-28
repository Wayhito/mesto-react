import React from "react";
import avatarPicture from '../images/avatar.png';

function handleEditAvatarClick() {
    const avatarPopup = document.querySelector('.avatar-popup');
    avatarPopup.classList.add('popup_opened');
}

function handleEditProfileClick() {
    const profilePopup = document.querySelector('.profile-popup');
    profilePopup.classList.add('popup_opened');
}

function handleAddPlaceClick() {
    const cardPopup = document.querySelector('.add-popup');
    cardPopup.classList.add('popup_opened');
}

function Main() {
    return (
        <>
            <main>
                <section className="profile">

                    <div className="profile__image-container">
                        <img className="profile__image" src={avatarPicture} alt="Картинка профиля"/>
                        <button className="profile__image-button" onClick={handleEditAvatarClick}></button>
                    </div>

                    <div className="profile__info">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button className="profile__edit-button" onClick={handleEditProfileClick}>
                            <img className="profile__pen" src={require('../images/editbuttonpen.svg').default} alt="редактировать"/>
                        </button>
                        <p className="profile__job">Исследователь океана</p>
                    </div>

                    <button className="profile__add-button" onClick={handleAddPlaceClick}>
                        <img className="profile__plus" src={require('../images/addbutton.svg').default} alt="добавить"/>
                    </button>

                </section>

                <section className="elements"></section>
            </main>
        </>
    );
  }
  
  export default Main;