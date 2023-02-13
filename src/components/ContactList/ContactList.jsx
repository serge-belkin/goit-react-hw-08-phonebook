import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { getVisibleContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const filteredContacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
 
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contactListItem} key={id}>
          <p>{name}: {number}{' '}</p>
          <button className={css.deleteBtn} onClick={() => dispatch(deleteContacts(id))}>delete</button>
        </li>
      )
      )}
    </ul>
  )
};
