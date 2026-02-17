import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FieldError {
  [fieldName: string]: string;
}

interface ValidationState {
  errors: FieldError;
  showErrors: boolean;
}

const initialState: ValidationState = {
  errors: {},
  showErrors: false,
};

const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    setFieldError: (
      state,
      action: PayloadAction<{ field: string; error: string }>
    ) => {
      state.errors[action.payload.field] = action.payload.error;
    },
    clearFieldError: (state, action: PayloadAction<string>) => {
      delete state.errors[action.payload];
    },
    setErrors: (state, action: PayloadAction<FieldError>) => {
      state.errors = action.payload;
    },
    clearAllErrors: (state) => {
      state.errors = {};
      state.showErrors = false;
    },
    setShowErrors: (state, action: PayloadAction<boolean>) => {
      state.showErrors = action.payload;
    },
  },
});

export const {
  setFieldError,
  clearFieldError,
  setErrors,
  clearAllErrors,
  setShowErrors,
} = validationSlice.actions;

export default validationSlice.reducer;
