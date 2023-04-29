import { FormValidator } from "../components/FormValidator.js";

export function toggleLoading(buttonSubmit, content, isLoading) {
    if (isLoading) {
        buttonSubmit.textContent = content.loading;
    } else {
        buttonSubmit.textContent = content.start;
    }
}

export const settingsOfValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorSelector: '.popup__input-error',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_error',
    errorActiveClass: 'popup__input-error_active'
};

export const avatarButton = document.querySelector('.profile__image-button');
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');

export const profileNameInput = document.querySelector('.profile-popup__input_type_name');
export const profileJobInput = document.querySelector('.profile-popup__input_type_job');
export const avatar = document.querySelector('.profile__image');
export const name = document.querySelector('.profile__name');
export const job = document.querySelector('.profile__job');


export const avatarForm = document.querySelector('#avatarForm');
export const profileForm = document.querySelector('#profileForm');
export const cardForm = document.querySelector('#cardForm');

export const validationAvatar = new FormValidator(settingsOfValidation, avatarForm);
export const validationProfile = new FormValidator(settingsOfValidation, profileForm);
export const validationCard = new FormValidator(settingsOfValidation, cardForm);

export const cardTemplate = document.querySelector('#cardTemplate').content;