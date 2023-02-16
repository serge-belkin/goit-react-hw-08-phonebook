import { useDispatch } from "react-redux";
import { registerUser } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      registerUser({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
  };
  return (
    <div className={css.container}>
      <header className={css.header}>Sign up</header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Full name"
          autoComplete="off"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          autoComplete="off"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};