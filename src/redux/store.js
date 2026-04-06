import { configureStore } from '@reduxjs/toolkit'
import { bannersApi } from './services/bannerApi'

export const store = configureStore({
  reducer: {
    [bannersApi.reducerPath]: bannersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bannersApi.middleware),
})
