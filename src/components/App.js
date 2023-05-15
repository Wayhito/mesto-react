import React from "react";
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import ImagePopup from "./ImagePopup.js";
import { api } from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({
    "name":'',
    "about": '',
    "avatar": '',
    "_id": '',
    "cohort": ''
  });

  React.useEffect(()=>{
    Promise.all([
      /*Данные Пользователя*/
      api.getUserInfo(),
      /*Список карточек*/
      api.getInitialCards()
    ])
    
    .then((values) => {
        setCurrentUser(values[0]);
        setCards([...values[1]]);  
      })
      
      .catch((err) => {
        console.log(err);
      });

  }, []);
  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }
  
  const handleCardClick  = (card) => {
    setSelectedCard(card);
  }

  const handleUpdateUser = (objUserInfo) => {
    api.setUserInfo(objUserInfo)

    .then(updatedUser => {
      setCurrentUser(updatedUser);
      closeAllPopups();
    })

    .catch((err) => {
      console.log(err);
    });
  }

  const handleUpdateAvatar = (link) => {
    api.editAvatar(link)

    .then(updatedUser => {
      setCurrentUser(updatedUser);
      closeAllPopups();
    })

    .catch((err) => {
      console.log(err);
    });
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)

      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })

      .catch((err) => {
        console.log(err);
      });
  }

  const handleAddPlace = (objNewCard) => {
    api.addNewCard(objNewCard)

    .then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })

    .catch((err) => {
      console.log(err);
    });
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)

    .then(res => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    })

    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} /> 

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

      <AddPlacePopup isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups} onAddPlace={handleAddPlace}/>

      <PopupWithForm
        title="Вы уверены?" 
        name="confirm"
        children={
        <>
          <button className="popup__submit confirm-popup__submit" type="submit">Да</button>
        </>
      }/>

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} /> 

      <div className="page">

        <Header/>

        <Main
        cards = {cards}
        onEditProfile = {handleEditProfileClick} 
        onEditAvatar = {handleEditAvatarClick} 
        onNewLocation = {handleAddPlaceClick} 
        onCardClick = {handleCardClick} 
        onCardLike = {handleCardLike} 
        onCardDelete = {handleCardDelete}
        />

        <Footer/>

      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
