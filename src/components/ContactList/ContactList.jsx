import { connect } from 'react-redux';
import contactsActions from '../../redux/contact/contacts-actions';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

// Принимает все контакты и пробрасывает дальше метод для удаления контакта

const ContactList = ({ contacts, onDeleteContact }) => {
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
const getfilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  if (filter !== '') {
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  } else {
    return allContacts;
  }
};
// Из стейта в пропы + в контакты пишет результат функции фильтра
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getfilteredContacts(items, filter),
});

// Из стейта в пропы - методы
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
