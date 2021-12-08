import { configureStore } from '@reduxjs/toolkit';
import { exchangeRates } from './service/exchangeAPI/exchangeAPI';
import { user } from './service/userAPI';
const store = configureStore({
  reducer: {
    [exchangeRates.reducerPath]: exchangeRates.reducer,
    [user.reducerPath]: user.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    user.middleware,
    exchangeRates.middleware,
  ],
});
export default store;
