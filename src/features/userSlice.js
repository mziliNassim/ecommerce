import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    cart: [],
    favorite: [2, 4],
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCart: (state, action) => {
      const productIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex === -1) {
        state.cart.push({ ...action.payload, count: 1 });
        return;
      }
    },
    decrementProduct: (state, action) => {
      const id = action.payload;
      state.cart.find((product) => {
        if (product.id === id) {
          if (product.count === 1) {
            state.cart = state.cart.filter((product) => product.id !== id);
          } else product.count -= 1;
        }
      });
    },
    incrementProduct: (state, action) => {
      const id = action.payload;
      state.cart.find((product) => {
        if (product.id === id) {
          product.count += 1;
        }
      });
    },
    remouveProduct: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((product) => product.id !== id);
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const idExist = state.favorite.find((listID) => listID === id);
      if (idExist) {
        state.favorite = state.favorite.filter((listID) => listID !== id);
        return;
      }
      state.favorite.push(id);
    },
  },
});

export const {
  setUser,
  setCart,
  decrementProduct,
  incrementProduct,
  remouveProduct,
  toggleFavorite,
} = userSlice.actions;

export default userSlice.reducer;
