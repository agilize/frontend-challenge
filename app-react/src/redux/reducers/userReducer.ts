import { createSlice } from '@reduxjs/toolkit';
 
const slice = createSlice({
  name: 'user',
  initialState: {
    grossValue: 0,
    discount: ''
  },
  reducers: {
    setGrossValue: (state, action) => {
      state.grossValue = action.payload;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    }
  }
});

export const { setGrossValue, setDiscount } = slice.actions;
export default slice.reducer;