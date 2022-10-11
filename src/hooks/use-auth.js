//информация о том, авторизован пользователь или нет в данным момент и считывать его данные
import {useSelector} from 'react-redux';

export function useAuth() {
    const {email, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}