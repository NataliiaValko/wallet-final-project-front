import { configureStore } from '@reduxjs/toolkit';
import { exchangeRates } from './service/exchangeAPI/exchangeAPI';
import { newUser } from './service/auth/registration';
const store = configureStore({
  reducer: {
    [exchangeRates.reducerPath]: exchangeRates.reducer,
    [newUser.reducerPath]: newUser.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    newUser.middleware,
    exchangeRates.middleware,
  ],
});
export default store;
