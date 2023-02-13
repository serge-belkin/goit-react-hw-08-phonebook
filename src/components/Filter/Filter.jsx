import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setQuery } from "../../redux/contacts/contacts.slice";

export const Filter = () => {

  const dispatch = useDispatch();

  const onChangeFilter = (query) => {
    dispatch(setQuery(query))
  }
  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" onChange={(e) => onChangeFilter(e.target.value)} />
    </label>
  )
};

