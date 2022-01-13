
import {List} from './ContactList.styled';
import PropTypes from 'prop-types';
import ContactItem from "../ContactItem/ContactItem";

// Принимает все контакты и пробрасывает дальше метод для удаления контакта

const  ContactList =({ contacts,onDeleteContact })=>{

  return (
    <List>
  {contacts.map(contact => (
    <ContactItem
    key={contact.id}
    contact={contact}
    onDeleteContact={onDeleteContact}
    />
  ))}
</List>
)
}



ContactList.propTypes ={
    onDeleteContact :PropTypes.func,

}

export default ContactList;



