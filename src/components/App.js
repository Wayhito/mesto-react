//import logo from './logo.svg';
import React from "react";
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }
  
  const handleCardClick  = (card) =>{
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }


  return (
    <>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} /> 

      <PopupWithForm
        title="Редактировать профиль" 
        name="profile" 
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups} 
        children={
        <>
          <input className="popup__input profile-popup__input profile-popup__input_type_name" id="name-input" minLength="2" maxLength="40" type="text" name="name" placeholder="Пример: имя" required/>
          <span className="popup__input-error name-input-error"></span>
          <input className="popup__input profile-popup__input profile-popup__input_type_job" id="job-input" minLength="2" maxLength="200" type="text" name="job" placeholder="Пример: работа" required/>
          <span className="popup__input-error job-input-error"></span>
          <button className="popup__submit profile-popup__submit" type="submit" disabled>Сохранить</button>
        </>
      }/>

      <PopupWithForm
        title="Новое место" 
        name="add" 
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups} 
        children={
        <>
          <input className="popup__input add-popup__input add-popup__input_type_name" id="title-input" minLength="2" maxLength="30" type="text" name="name" placeholder="Пример: название" required/>
          <span className="popup__input-error title-input-error"></span>
          <input className="popup__input add-popup__input add-popup__input_type_link" id="link-input" type="url" name="link" placeholder="Пример: ссылка" required/>
          <span className="popup__input-error link-input-error"></span>
          <button className="popup__submit add-popup__submit" type="submit" disabled>Создать</button>
        </>
      }/>

      <PopupWithForm
        title="Вы уверены?" 
        name="confirm"
        children={
        <>
          <button className="popup__submit confirm-popup__submit" type="submit">Да</button>
        </>
      }/>

      <PopupWithForm
        title="Обновить аватар" 
        name="avatar" 
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups} 
        children={
        <>
          <input className="popup__input avatar-popup__input avatar-popup__input_type_link" id="avatar-input" minLength="2" maxLength="200" type="url" name="link" placeholder="Пример: ссылка" required/>
          <span className="popup__input-error avatar-input-error"></span>
          <button className="popup__submit avatar-popup__submit" type="submit" disabled>Сохранить</button>
        </>
      }/>

      <div className="page">

        <Header/>

        <Main
        onEditProfile = {handleEditProfileClick} 
        onEditAvatar = {handleEditAvatarClick} 
        onNewLocation = {handleAddPlaceClick} 
        onCardClick = {handleCardClick} 
        />

        <Footer/>

      </div>

    </>
  );
}

export default App;
