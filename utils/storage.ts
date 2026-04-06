// utils/storage.ts
export interface User {
  id: string;
  email: string;
  language: string;
  timezone: string;
  status: string;
  role: string;
  deactivatedAt: string | null;
  createdAt: string;
  flow: string;
  flowData?: Record<string, any>;
  use2fa: boolean;
  isAdminLogin: boolean;
}

const USER_KEY = "user";
const TOKEN_KEY = "token";

export const storage = {
  // Save user info
  setUser: (user: User) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  },

  // Get user info
  getUser: (): User | null => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem(USER_KEY);
      return user ? (JSON.parse(user) as User) : null;
    }
    return null;
  },

  // Remove user info
  removeUser: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(USER_KEY);
    }
  },

  // Save access token
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(TOKEN_KEY, token);
    }
  },

  // Get access token
  getToken: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(TOKEN_KEY);
    }
    return null;
  },

  // Remove token
  removeToken: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
    }
  },

  // Clear all auth data
  clear: () => {
    storage.removeUser();
    storage.removeToken();
  },
};