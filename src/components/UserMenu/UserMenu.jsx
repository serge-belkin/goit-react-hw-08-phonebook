import { useState } from "react"
import { useDispatch } from "react-redux";
import { setLogout } from 'redux/auth/slice';
import { useLogoutMutation } from 'redux/auth/slice';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};
