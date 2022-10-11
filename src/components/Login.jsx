import { Form } from './Form';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();

    const handleLogin = (email, password) => { //получени данных после обрабоки
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({ // применение данных
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/'); 
            })
            .catch(() => alert('Данные введены неверно или пользователя не существует'))
    }
    return (
        <Form
            title="Войти"
            handleClick={handleLogin} // вызов функции по нажатию кнопки
        />
    )
}

export { Login }