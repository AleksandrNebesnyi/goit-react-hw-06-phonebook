import { useSelector, useDispatch } from 'react-redux'; // Импортируем хуки для использования стейта и доставки экшинов прямо в компоненте
import contactsActions from 'redux/contact/contacts-actions'; // Импортируем экшны для диспатча
import { getFilter } from 'redux/contact/contacts-selector'; // Импортируем части стейта из selector
import { Form, Label, Input } from './ContactsFilter.styled'; //Стили

// Принимает значение с поля фильтра и метод пишущий в стейт

const ContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Form>
        <Label>
          <h3>Find contacts by name:</h3>
          <Input
            type="text"
            value={filter}
            onChange={event =>
              dispatch(contactsActions.changeFilter(event.currentTarget.value))
            }
          />
        </Label>
      </Form>
    </>
  );
};

// Из стейта в пропы
// const mapStateToProps = state => ({
//   filter: state.contacts.filter,
// });

// Из стейта в пропы - методы
// const mapDispatchToProps = distatch => ({
//   onFilter: event =>
//     distatch(contactsActions.changeFilter(event.currentTarget.value)),
// });

export default ContactsFilter;
