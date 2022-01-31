import { useSelector, useDispatch } from 'react-redux'; // Импортируем хуки для использования стейта и доставки экшинов прямо в компоненте
import { getfilteredContacts } from 'redux/contact/contacts-selector'; // Импортируем части стейта из selector
import contactsActions from 'redux/contact/contacts-actions'; // Импортируем экшны для диспатча
import { List } from './ContactList.styled'; //Стили
import ContactItem from '../ContactItem/ContactItem'; //Компонент одного контакта

// Принимает все отфильтрованные контакты и пробрасывает дальше метод для удаления контакта

const ContactList = () => {
  const contacts = useSelector(getfilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={() => onDeleteContact(contact.id)}
        />
      ))}
    </List>
  );
};

// Фильтрует и возвращает результат фильтра
// const getfilteredContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   if (filter !== '') {
//     return allContacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter),
//     );
//   } else {
//     return allContacts;
//   }
// };
// // Из стейта в пропы + в контакты пишет результат функции фильтра
// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getfilteredContacts(items, filter),
// });

// // Из стейта в пропы - методы
// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
// });

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactList;
