//ввод данных пользователя
import { useState } from 'react'; // используется для изменения значения переменной

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div>
            <p><input
                type="email" //ввод email
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            /></p>
            <p><input
                type="password"//ввод пароля
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            /></p>
            <p><button
                onClick={() => handleClick(email, pass)} // присвоение состояния
            >
                {title}
            </button></p>
        </div>
    )
}

export {Form}