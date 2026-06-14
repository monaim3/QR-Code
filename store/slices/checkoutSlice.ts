// store/slices/checkoutSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutState {
  priceId: string | null;
}

const initialState: CheckoutState = {
  priceId: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutPriceId(state, action: PayloadAction<string>) {
      state.priceId = action.payload;
    },
  },
});

export const { setCheckoutPriceId } = checkoutSlice.actions;
export default checkoutSlice.reducer;