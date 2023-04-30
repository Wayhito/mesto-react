import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setInitialCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])

      .then((values) => {
        setUserName(values[0].name);
        setUserDescription(values[0].about);
        setUserAvatar(values[0].avatar);
        setInitialCards([...values[1]]);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__image-container">
          <img className="profile__image" src={userAvatar} alt="Картинка профиля"/>
          <button className="profile__image-button" onClick={props.onEditAvatar}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" onClick={props.onEditProfile}>
            <img className="profile__pen" src={require("../images/editbuttonpen.svg").default} alt="редактировать"/>
          </button>
          <p className="profile__job">{userDescription}</p>
        </div>

        <button className="profile__add-button" onClick={props.onNewLocation}>
          <img className="profile__plus" src={require("../images/addbutton.svg").default} alt="добавить"/>
        </button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <li key={card._id} className="element">
            <Card card={card} onCardClick={props.onCardClick}/>
          </li>
        ))}
      </section>
    </main>
  );
}

export default Main;

// {/* <li className="location">
//     <button className="location__delete-icon" type="button"></button>
//     <img className="location__image" src={card.link} alt="Фотография места"/>
//     <h2 className="location__name">{card.name}</h2>
//     <div className="location__like-group">
//         <button className="location__like" type="button"></button>
//         <span className="location__likes-number">{card.likes.length}</span>
//     </div>
// </li> */}