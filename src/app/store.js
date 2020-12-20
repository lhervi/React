import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import statusReducer from '../features/login/statusSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    status: statusReducer,
  }
});
