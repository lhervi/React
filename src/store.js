import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginSlice';
import statusReducer from './reducers/statusSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    status: statusReducer,
  }
})

export default store
