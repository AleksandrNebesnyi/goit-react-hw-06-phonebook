
import PropTypes from 'prop-types';
import {Form, Label,Input} from './ContactsFilter.styled'

// Принимает значение с поля фильтра и метод пишущий в стейт


const ContactsFilter =({filter, onFilter})=>{
  return (
    <>
    <Form >
      <Label>
        <h3>Find contacts by name:</h3>
        <Input
          type="text"
          value={filter}
          onChange={onFilter}
    />
      </Label>
    </Form>
  </>
);

}


ContactsFilter.propTypes ={
filter : PropTypes.string.isRequired,
onFilter: PropTypes.func.isRequired,
}


export default ContactsFilter;