//присвоение значений пользователю
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: null,
    token: null,
    id: null,
};

const userSlice = createSlice({  //начальное состояние пользователя
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {  //добавление информации пользователя
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser (state) { //удаление информации пользователя
            state.email = null;
            state.token = null;
            state.id = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;