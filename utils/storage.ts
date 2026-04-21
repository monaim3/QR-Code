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
const I18N_KEY = "i18n_cache";

export const storage = {
  /* ---------------- USER ---------------- */
  setUser: (user: User) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  },

  getUser: (): User | null => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem(USER_KEY);
      return user ? JSON.parse(user) : null;
    }
    return null;
  },

  removeUser: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(USER_KEY);
    }
  },

  /* ---------------- TOKEN ---------------- */
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(TOKEN_KEY, token);
    }
  },

  getToken: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(TOKEN_KEY);
    }
    return null;
  },

  removeToken: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
    }
  },

  clear: () => {
    storage.removeUser();
    storage.removeToken();
  },

  /* ---------------- I18N CACHE ---------------- */
  setI18nCache: (data: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(I18N_KEY, JSON.stringify(data));
    }
  },

  getI18nCache: () => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(I18N_KEY);
      return data ? JSON.parse(data) : null;
    }
    return null;
  },

  removeI18nCache: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(I18N_KEY);
    }
  },
};