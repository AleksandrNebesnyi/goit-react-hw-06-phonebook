import { createAction } from '@reduxjs/toolkit'; // Импорт функции создания экшена
import { nanoid } from 'nanoid';

// Создание экшена для добавления контакта: type + payload + Prepare Callback
const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

// Создание экшена для удаления контакта
const deleteContact = createAction('contacts/delete');

// Создание экшена для фильтра
const changeFilter = createAction('contacts/change-filter');

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
