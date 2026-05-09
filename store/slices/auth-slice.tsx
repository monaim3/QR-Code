// redux/slices/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../lib/api";
import { storage, User } from "../../utils/storage";

// 🔹 API Response Type
interface AuthResponse {
  accessToken: string;
  user: User;
}

// 🔹 Forgot Password Response
interface ForgotPasswordResponse {
  message: string;
}

// 🔹 Request Type
interface SignupPayload {
  email: string;
  password: string;
  language: string;
  timezone: string;
  isUnlockFlow: boolean;
  token: string;
}

// 🔹 Forgot Password Payload
interface ForgotPasswordPayload {
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  forgotPasswordMessage: string | null;
}

const initialState: AuthState = {
  user: storage.getUser(),
  token: storage.getToken(),
  loading: false,
  error: null,
  forgotPasswordMessage: null,
};

// ✅ Signup Async thunk
export const signupUser = createAsyncThunk<
  AuthResponse,
  SignupPayload,
  { rejectValue: string }
>("auth/signupUser", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/signup", data);
    return response;
  } catch (err: any) {
    return rejectWithValue(err?.message || "Signup failed");
  }
});

// ✅ Login thunk
export const loginUser = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: string }
>("auth/loginUser", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/login", data);
    return response;
  } catch (err: any) {
    return rejectWithValue(err?.message || "Login failed");
  }
});

// ✅ Forgot Password thunk
export const forgotPassword = createAsyncThunk<
  ForgotPasswordResponse,
  ForgotPasswordPayload,
  { rejectValue: string }
>("auth/forgotPassword", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/forgot-password", data);
    return response;
  } catch (err: any) {
    return rejectWithValue(err?.message || "Forgot password failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      storage.clear();
    },

    clearForgotPasswordMessage: (state) => {
      state.forgotPasswordMessage = null;
    },
  },

  extraReducers: (builder) => {
    // =========================
    // Signup cases
    // =========================
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        signupUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.accessToken;

          // ✅ persist in localStorage
          storage.setUser(action.payload.user);
          storage.setToken(action.payload.accessToken);

          document.cookie = `token=${action.payload.accessToken}; path=/`;
        }
      )
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Signup failed";
      });

    // =========================
    // Login cases
    // =========================
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.accessToken;

          storage.setUser(action.payload.user);
          storage.setToken(action.payload.accessToken);

          document.cookie = `token=${action.payload.accessToken}; path=/`;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });

    // =========================
    // Forgot Password cases
    // =========================
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.forgotPasswordMessage = null;
      })
      .addCase(
        forgotPassword.fulfilled,
        (
          state,
          action: PayloadAction<ForgotPasswordResponse>
        ) => {
          state.loading = false;
          state.forgotPasswordMessage = action.payload.message;
        }
      )
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Failed to send forgot password email";
      });
  },
});

export const {
  logout,
  clearForgotPasswordMessage,
} = authSlice.actions;

export default authSlice.reducer;