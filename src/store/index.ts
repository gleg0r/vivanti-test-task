import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import formSliceReducer from './slices/formSlice';
const store = configureStore({
  reducer: {
    form: formSliceReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;