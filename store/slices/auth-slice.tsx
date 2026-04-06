// redux/slices/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../lib/api";
import { storage, User } from "../../utils/storage";

// 🔹 API Response Type
interface AuthResponse {
  accessToken: string;
  user: User;
}

// 🔹 Request Type (Zod can match this later)
interface SignupPayload {
  email: string;
  password: string;
  language: string;
  timezone: string;
  isUnlockFlow: boolean;
  token: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: storage.getUser(),
  token: storage.getToken(),
  loading: false,
  error: null,
};

// ✅ Signup Async thunk
export const signupUser = createAsyncThunk<
  AuthResponse,
  SignupPayload,
  { rejectValue: string }>("auth/signupUser", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/signup", data);
    return response; // ✅ correct
  } catch (err: any) {
    return rejectWithValue(err?.message || "Signup failed");
  }
});

// ✅ Login thunk
export const loginUser = createAsyncThunk<AuthResponse, { email: string; password: string }, { rejectValue: string }>(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", data);
      return response;
    } catch (err: any) {
      return rejectWithValue(err?.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      storage.clear();
    },
  },
  extraReducers: (builder) => {
    // Signup cases
    builder.addCase(signupUser.pending, (state) => {
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
        }
      )
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Signup failed";
      });
    // Login cases
    builder.addCase(loginUser.pending, (state) => {
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
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;