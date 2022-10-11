import { Form } from './Form';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {   // создание нового пользователся
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(console.error)
    }
    return (
        <Form
            title="Зарегистрироваться"  //форма регистрации
            handleClick={handleRegister}
        />
    )
}

export {SignUp}