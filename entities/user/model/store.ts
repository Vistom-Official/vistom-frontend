import { create } from "zustand";
import { TUserStore } from "./types";
import { RootStore } from "@/shared/config/store";

const initialState = {
  id: "",
  email: "",
  password: "",
};

export const useUserStore = create<TUserStore>()((set, get) => ({
  ...initialState,
  setUser: (user) => set(() => ({ ...user })),
  clearUser: () => set(() => ({ ...initialState })),
  ...RootStore(get),
}));
