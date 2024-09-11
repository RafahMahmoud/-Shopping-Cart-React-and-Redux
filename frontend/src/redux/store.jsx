import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// دالة لتحميل حالة السلة من localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return undefined;
  }
};

// دالة لحفظ حالة السلة في localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: preloadedState ? { cart: preloadedState.cart } : undefined,
});

// الاشتراك في التغييرات وحفظ الحالة في localStorage
store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

export default store;