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

interface GoogleLoginPayload {
  token: string;
}

export interface GoogleSignUpPayload {
  token: string;
  language: string;
  timezone: string;
  isUnlockFlow: boolean;
  type: string;
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

// ✅ Google Signup thunk

export const googleSignUp = createAsyncThunk<
  AuthResponse,
  GoogleSignUpPayload,
  { rejectValue: string }
>("auth/googleSignUp", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/google-signup", data);
    return response;
  } catch (err: any) {
    return rejectWithValue(err?.message || "Google signup failed");
  }
});

// ✅ Google Login thunk
export const googleLogin = createAsyncThunk<
  AuthResponse,
  GoogleLoginPayload,
  { rejectValue: string }
>("auth/googleLogin", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/google-login", data);
    return response;
  } catch (err: any) {
    return rejectWithValue(err?.message || "Google login failed");
  }
});

// ✅ Facebook Signup thunk
export const facebookSignUp = createAsyncThunk<
  AuthResponse,
  GoogleSignUpPayload,
  { rejectValue: string }
>("auth/facebookSignUp", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/facebook-signup", data);
    return response;
  } catch (err: any) {
    return rejectWithValue(err?.message || "Facebook signup failed");
  }
});

// ✅ Facebook Login thunk
export const facebookLogin = createAsyncThunk<
  AuthResponse,
  GoogleLoginPayload,
  { rejectValue: string }
>("auth/facebookLogin", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/facebook-login", data);
    return response;
  } catch (err: any) {
    return rejectWithValue(err?.message || "Facebook login failed");
  }
});

// ✅ Apple Signup thunk
export const appleSignUp = createAsyncThunk<
  AuthResponse,
  GoogleSignUpPayload,
  { rejectValue: string }
>("auth/appleSignUp", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/apple-signup", data);
    return response;
  } catch (err: any) {
    return rejectWithValue(err?.message || "Apple signup failed");
  }
});

// ✅ Apple Login thunk
export const appleLogin = createAsyncThunk<
  AuthResponse,
  GoogleLoginPayload,
  { rejectValue: string }
>("auth/appleLogin", async (data, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/apple-login", data);
    return response;
  } catch (err: any) {
    return rejectWithValue(err?.message || "Apple login failed");
  }
});

// ✅ Logout thunk
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/auth/logout", undefined);
    } catch (err: any) {
      return rejectWithValue(err?.message || "Logout failed");
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

    // =========================
    // Google Signup cases
    // =========================
    builder
  .addCase(googleSignUp.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(googleSignUp.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
    state.loading = false;
    state.user = action.payload.user;
    state.token = action.payload.accessToken;
    storage.setUser(action.payload.user);
    storage.setToken(action.payload.accessToken);
    document.cookie = `token=${action.payload.accessToken}; path=/`;
  })
  .addCase(googleSignUp.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload || "Google signup failed";
  });

    // =========================
    // Google Login cases
    // =========================
    builder
  .addCase(googleLogin.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(googleLogin.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
    state.loading = false;
    state.user = action.payload.user;
    state.token = action.payload.accessToken;
    storage.setUser(action.payload.user);
    storage.setToken(action.payload.accessToken);
    document.cookie = `token=${action.payload.accessToken}; path=/`;
  })
  .addCase(googleLogin.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload || "Google login failed";
  });

    // =========================
    // Facebook Signup cases
    // =========================

    builder
  .addCase(facebookSignUp.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(facebookSignUp.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
    state.loading = false;
    state.user = action.payload.user;
    state.token = action.payload.accessToken;
    storage.setUser(action.payload.user);
    storage.setToken(action.payload.accessToken);
    document.cookie = `token=${action.payload.accessToken}; path=/`;
  })
  .addCase(facebookSignUp.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload || "Facebook signup failed";
  });

    // =========================
    // Facebook Login cases
    // =========================

  builder
  .addCase(facebookLogin.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(facebookLogin.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
    state.loading = false;
    state.user = action.payload.user;
    state.token = action.payload.accessToken;
    storage.setUser(action.payload.user);
    storage.setToken(action.payload.accessToken);
    document.cookie = `token=${action.payload.accessToken}; path=/`;
  })
  .addCase(facebookLogin.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload || "Facebook login failed";
  });

    // =========================
    // Apple Signup cases
    // =========================

    builder
  .addCase(appleSignUp.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(appleSignUp.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
    state.loading = false;
    state.user = action.payload.user;
    state.token = action.payload.accessToken;
    storage.setUser(action.payload.user);
    storage.setToken(action.payload.accessToken);
    document.cookie = `token=${action.payload.accessToken}; path=/`;
  })
  .addCase(appleSignUp.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload || "Apple signup failed";
  });

    // =========================
    // Apple Login cases
    // =========================

  builder
  .addCase(appleLogin.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(appleLogin.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
    state.loading = false;
    state.user = action.payload.user;
    state.token = action.payload.accessToken;
    storage.setUser(action.payload.user);
    storage.setToken(action.payload.accessToken);
    document.cookie = `token=${action.payload.accessToken}; path=/`;
  })
  .addCase(appleLogin.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload || "Apple login failed"; 
  });

    // =========================
    // Logout cases
    // =========================
    builder
  .addCase(logoutUser.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(logoutUser.fulfilled, (state) => {
    state.loading = false;

    state.user = null;
    state.token = null;
    storage.clear();
    document.cookie ="token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  })
  .addCase(logoutUser.rejected, (state, action) => {
    state.loading = false;
    state.error = "Logout failed";
    state.user = null;
    state.token = null;
    storage.clear();
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  });

  },
});


export const {
  logout,
  clearForgotPasswordMessage,
} = authSlice.actions;

export default authSlice.reducer;