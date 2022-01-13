import { useState, useMemo, useEffect } from 'react';
import Container from './components/Container/Container.jsx';
import Section from './components/Section/Section.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import ContactsFilter from './components/ContactsFilter/ContactsFilter.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Используем ленивую инициализацию для получения данных из localStorage.
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  // При изменении контактов пишем в localStorage
  useEffect(() => {
    console.log('set item');
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Добавляет контакт
  const addContact = newContact => {
    // Проверка на дубликат
    const duplicateName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );
    if (duplicateName) {
      toast.warn(`${newContact.name} is already on contacts`);

      return;
    }

    setContacts([...contacts, newContact]);
  };

  //  Следит за полем фильтрации и пишет в стейт
  const changeFilter = event => {
    event.preventDefault();
    setFilter(event.currentTarget.value);
  };

  // Фильтрует и возвращает результат фильтра

  const filterContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();

    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    } else {
      return contacts;
    }
  }, [contacts, filter]);

  // Удаляет контакт

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <ContactsFilter filter={filter} onFilter={changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={deleteContact}
        />
      </Section>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};
export default App;
