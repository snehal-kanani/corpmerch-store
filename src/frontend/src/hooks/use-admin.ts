import { useActor } from "@caffeineai/core-infrastructure";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createActor } from "../backend";

interface AdminState {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      login: (token: string) => set({ isAuthenticated: true, token }),
      logout: () => set({ isAuthenticated: false, token: null }),
    }),
    { name: "admin-auth" },
  ),
);

export function useAdmin() {
  const store = useAdminStore();
  const { actor } = useActor(createActor);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (!actor) return false;
    // Simple base64 encode for demo — production should use proper hashing
    const passwordHash = btoa(password);
    const result = await actor.adminLogin(email, passwordHash);
    if (result.__kind__ === "ok") {
      store.login(result.ok);
      return true;
    }
    return false;
  };

  const logout = () => {
    store.logout();
  };

  return {
    isAuthenticated: store.isAuthenticated,
    token: store.token,
    login,
    logout,
  };
}
