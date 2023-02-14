import { useState } from 'react';
import { addContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { getContacts } from 'redux/contacts/selectors';
import css from './ContactForm.module.css';

const shortid = require('shortid');
const inputNameId = shortid.generate();
const inputNumberId = shortid.generate();
const buttonId = shortid.generate();

export function PhonebookForm () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const onAddContacts = e => {
   e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    const normalizeName = newContact.name.toLowerCase();
    const isNameInContact = contacts.find(newContact => newContact.name.toLowerCase() === normalizeName);
    isNameInContact ? toast.success(`${newContact.name} is already in contacts`) : dispatch(addContacts(newContact));
    reset();
  };

  const handleChange = e => {
  const { name, value } = e.currentTarget;
  
    switch (name) {
      case `name`:
        setName(value)
        break;
      
      case `number`:
        setNumber(value)
        break;
    
      default:
        return;
    }
  
  };  

  const reset = () => {
    setName('')
    setNumber('')
  };
    return (
    <form className={css.form} autoComplete='off' onSubmit={onAddContacts}>
      <label className={css.formTitle} htmlFor={inputNameId}>Name</label>
        <input
           className={css.contactName}
  type="text"
  name="name"
  value={name}
  onChange={handleChange}
  id={inputNameId}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  />
<label className={css.formTitle} htmlFor={inputNumberId}>Number</label>
        <input
          className={css.contactNumber}
  type="tel"
  name="number"
  value={number}
  onChange={handleChange}
  id={inputNumberId}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        <button className={css.submitBtn} type="submi" id={buttonId}>Add contact</button>
        <Toaster />
      </form>
      
    );
};
