import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../hooks/models/IUser";
import { fetchUsers } from "./ActionCreators";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  //count: number;
}

export const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  //count: 0,
};

//ф-ция редюссер в редакс тулкит называется слайс и создается с помощью createSlice
// ф-ция редюссер для стандартной работы с редукс
//export const userSlice = createSlice({
//  name: "user", //каждый слайс-редюссер должен иметь имя и дефолтное знач (initialState)
//  initialState,
//  reducers: {
//    //3 функции ниже при первом варианте работы с редакс занкс
//    //срабатывает при старте загрузки пользователей
//    usersFetching(state) {
//      state.isLoading = true;
//    },
//    //срабатывает при успешной загрузке
//    usersFetchingSucces(state, action: PayloadAction<IUser[]>) {
//      state.isLoading = false;
//      state.error = "";
//      state.users = action.payload;
//    },
//    //срабатывает при ошибке
//    usersFetchingError(state, action: PayloadAction<string>) {
//      state.isLoading = false;
//      state.error = action.payload;
//    },
//    //функции инкремент декремент для счетчика
//    //increment(state, action: PayloadAction<number>) {
//    //  state.count += action.payload;
//    //},
//    //decrement(state, action: PayloadAction<number>) {
//    //  state.count -= action.payload;
//    //},
//  },
//});

// видео 13:00 функция редюсер для обновленной работы с редукс зунк
export const userSlice = createSlice({
  name: "user", //каждый слайс-редюссер должен иметь имя и дефолтное знач (initialState)
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },

    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
