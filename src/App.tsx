import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import {useAppSelector} from './hooks/redux';
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { userSlice } from "./store/reducers/UserSlice";

//https://www.youtube.com/watch?v=Od5H_CiU2vM&t=301s
function App() {
  //const { count } = useAppSelector((state) => state.userReducer);
  //const { increment } = userSlice.actions;
  //const { decrement } = userSlice.actions;
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      {isLoading && <p>isLoading</p>}
      {error && <p>error</p>}
      {users.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
}

export default App;
