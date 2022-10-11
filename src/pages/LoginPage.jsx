import { Link } from "react-router-dom";
import { Login } from "../components/Login";

const LoginPage = () => {
    return (
        <div>                         {/* Вызов Login.jsx*/}
            <h1>Вход</h1>
            <Login />
            <p>
                <Link to="/register">Зарегистрироваться</Link>  {/* ссылка на страницу RegisterPage.jsx*/}
            </p>
        </div>
    )
}

export default LoginPage
