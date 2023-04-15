import { configureStore } from '@reduxjs/toolkit';
import sliceAuth, { middlewareAuth } from './auth-slice';

const store = configureStore({
  reducer: {
    auth: sliceAuth.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewareAuth),
});

export default store;
