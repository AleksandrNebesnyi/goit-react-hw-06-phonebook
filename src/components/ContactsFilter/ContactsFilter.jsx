import { connect } from 'react-redux'; // Импортируем коннект для глобального хранилища
import contactsActions from '../../redux/contact/contacts-actions'; // Импортируем экшны для диспатча
import PropTypes from 'prop-types';
import { Form, Label, Input } from './ContactsFilter.styled';

// Принимает значение с поля фильтра и метод пишущий в стейт

const ContactsFilter = ({ filter, onFilter }) => {
  return (
    <>
      <Form>
        <Label>
          <h3>Find contacts by name:</h3>
          <Input type="text" value={filter} onChange={onFilter} />
        </Label>
      </Form>
    </>
  );
};

// Из стейта в пропы
const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

// Из стейта в пропы - методы
const mapDispatchToProps = distatch => ({
  onFilter: event =>
    distatch(contactsActions.changeFilter(event.currentTarget.value)),
});

ContactsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
