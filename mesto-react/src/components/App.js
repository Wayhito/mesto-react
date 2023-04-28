//import logo from './logo.svg';
import React from "react";
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';

function App() {
  return (
    <>
      <template id="cardTemplate">
        <div className="element">
          <div className="element__image-field">
            <img className="element__image" src="#" alt="Картинка галереи"/>
            <button className="element__remove"></button>
          </div>
          <div className="element__panel">
            <h2 className="element__name"></h2>
            <div className="element__like-container">
              <button className="element__like-button">
                <img className="element__like" src={require('../images/like.svg').default} alt="лайк"/>
              </button>
              <span className="element__like-counter">0</span>
            </div>
          </div> 
        </div>
      </template>

      <div className="popup img-popup">
        <div className="img-popup__container">
          <button type="button" className="popup__cross-button img-popup__cross-button">
            <img className="popup__cross img-popup__cross" src={require('../images/cross.svg').default} alt="(закрыть)"/>
          </button>
          <img className="img-popup__image" src="#" alt="Фотография места"/>
          <p className="img-popup__text"></p>
        </div>
      </div>
    
      <div className="popup profile-popup">
        <button type="button" className="popup__cross-button profile-popup__cross-button">
          <img className="popup__cross profile-popup__cross" src={require('../images/cross.svg').default} alt="(закрыть)"/>
        </button>
        <div className="popup__container profile-popup__container">
          <h3 className="popup__paragraph profile-popup__paragraph">Редактировать профиль</h3>
          <form name="name" id="profileForm" className="popup__form">
              <input className="popup__input profile-popup__input profile-popup__input_type_name" id="name-input" minLength="2" maxLength="40" type="text" name="name" placeholder="Пример: имя" required/>
              <span className="popup__input-error name-input-error"></span>
              <input className="popup__input profile-popup__input profile-popup__input_type_job" id="job-input" minLength="2" maxLength="200" type="text" name="job" placeholder="Пример: работа" required/>
              <span className="popup__input-error job-input-error"></span>
            <button className="popup__submit profile-popup__submit" type="submit" disabled>Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup add-popup">
        <button type="button" className="popup__cross-button add-popup__cross-button">
          <img className="popup__cross add-popup__cross" src={require('../images/cross.svg').default} alt="(закрыть)"/>
        </button>
        <div className="popup__container add-popup__container">
          <h3 className="popup__paragraph add-popup__paragraph">Новое место</h3>
          <form name="name_addbutton" id="cardForm" className="popup__form">
              <input className="popup__input add-popup__input add-popup__input_type_name" id="title-input" minLength="2" maxLength="30" type="text" name="name" placeholder="Пример: название" required/>
              <span className="popup__input-error title-input-error"></span>
              <input className="popup__input add-popup__input add-popup__input_type_link" id="link-input" type="url" name="link" placeholder="Пример: ссылка" required/>
              <span className="popup__input-error link-input-error"></span>
            <button className="popup__submit add-popup__submit" type="submit" disabled>Создать</button>
          </form>
        </div>
      </div>

      <div className="popup confirm-popup">
        <button type="button" className="popup__cross-button confirm-popup__cross-button">
          <img className="popup__cross confirm-popup__cross" src={require('../images/cross.svg').default}alt="(закрыть)"/>
        </button>
        <div className="popup__container confirm-popup__container">
          <h3 className="popup__paragraph confirm-popup__paragraph">Вы уверены?</h3>
          <form name="name" id="confirmForm" className="popup__form">
            <button className="popup__submit confirm-popup__submit" type="submit">Да</button>
          </form>
        </div>
      </div>

      <div className="popup avatar-popup">
        <button type="button" className="popup__cross-button avatar-popup__cross-button">
          <img className="popup__cross avatar-popup__cross" src={require('../images/cross.svg').default} alt="(закрыть)"/>
        </button>
        <div className="popup__container avatar-popup__container">
          <h3 className="popup__paragraph avatar-popup__paragraph">Обновить аватар</h3>
          <form name="avatar" id="avatarForm" className="popup__form">
              <input className="popup__input avatar-popup__input avatar-popup__input_type_link" id="avatar-input" minLength="2" maxLength="200" type="url" name="link" placeholder="Пример: ссылка" required/>
              <span className="popup__input-error avatar-input-error"></span>
            <button className="popup__submit avatar-popup__submit" type="submit" disabled>Сохранить</button>
          </form>
        </div>
      </div>

      <div className="page">

        <Header/>

        <Main/>

        <Footer/>

      </div>
    </>
  );
}

export default App;
