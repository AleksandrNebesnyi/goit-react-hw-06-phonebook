import {useState} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import {Form, Label, Input, Button} from './ContactForm.styled'



const ContactForm =({onSubmit})=>{


  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  // Метод на отправке формы. Формирует из стейта контакт и передает во внешний метод
 const  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
     
    onSubmit(contact); // Внешний метод в пропсах класса

    resetForm();
  };

  // Сброс полей формы (после отправки)
 const resetForm = () => {
  setName('');
  setNumber('');
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Label >
        Name
        <Input
          type="text"
          name="name"
          placeholder="Contact name"
          aria-label="Input for your name"
          value={name} // Пишем значение в стейт
          onChange={handleChange} // Наблюдающий метод
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label >
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Phone number"
          aria-label="Input for your phone number"
          value={number} // Пишем значение в стейт
          onChange={handleChange} // Наблюдающий метод
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </Label>
     
        <Button type="submit" >
          Add contact
        </Button>
      
    </Form>)

}

ContactForm.propTypes ={
  onSubmit : PropTypes.func.isRequired,
}

  export default ContactForm;