import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import statusReducer from '../features/login/statusSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    status: statusReducer,
  }
})

export default store
