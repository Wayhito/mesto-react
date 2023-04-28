import React from "react";
import avatarPicture from '../images/avatar.png';
import { avatarPopup, profilePopup, cardPopup } from '../utils/utils.js';

function handleEditAvatarClick() {
    avatarPopup.classList.add
}

function handleEditProfileClick() {

}

function handleAddPlaceClick() {

}


// const editAvatarButton = document.querySelector('.profile__image-button');
// editAvatarButton.addEventListener('click', () => {
//     avatarPopup.classList.add('popup__opened');
// })

// const editProfileButton = document.querySelector('.profile__edit-button');
// editProfileButton.addEventListener('click', () => {
//     profilePopup.classList.add('popup__opened');
// })


// const addCardButton = document.querySelector('.profile__add-button');
// addCardButton.addEventListener('click', () => {
//     cardPopup.classList.add('popup__opened');
// })


function Main() {
    return (
        <>
            <main>
                <section className="profile">

                    <div className="profile__image-container">
                        <img className="profile__image" src={avatarPicture} alt="Картинка профиля"/>
                        <button className="profile__image-button" onClick={1}></button>
                    </div>

                    <div className="profile__info">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button className="profile__edit-button" onClick={1}>
                            <img className="profile__pen" src={require('../images/editbuttonpen.svg').default} alt="редактировать"/>
                        </button>
                        <p className="profile__job">Исследователь океана</p>
                    </div>

                    <button className="profile__add-button" onClick={1}>
                        <img className="profile__plus" src={require('../images/addbutton.svg').default} alt="добавить"/>
                    </button>

                </section>

                <section className="elements"></section>
            </main>
        </>
    );
  }
  
  export default Main;