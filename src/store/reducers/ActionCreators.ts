import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../hooks/models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

//redux thanks идет по умолчанию под капотом >>
//export const fetchUsers = () => async (dispatch: AppDispatch) => {
//  try {
//    dispatch(userSlice.actions.usersFetching());
//    const response = await axios.get<IUser[]>(
//      "https://jsonplaceholder.typicode.com/users"
//    );
//    dispatch(userSlice.actions.usersFetchingSucces(response.data));
//  } catch (err: any) {
//    dispatch(userSlice.actions.usersFetchingError(err.message));
//  }
//};

// видео 13:00 обновленный редукс зунк
export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_: void, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error....");
    }
  }
);
