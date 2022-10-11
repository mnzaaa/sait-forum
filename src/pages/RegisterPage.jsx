import { Link } from "react-router-dom";
import { SignUp } from "../components/SignUp";

const RegisterPage = () => {
  return (
    <div>
      <h1>Регистрация</h1>         {/* Вызов SignUp.jsx*/}
      <SignUp />
      <p>
        Если у вас уже зарегистрирован аккаунт, нажмите <Link to="/login">Войти</Link> {/* ссылка на страницу LoginPage.jsx*/}
      </p>
    </div>
  )
}

export default RegisterPage
