import { create } from "zustand";
import { RootStore } from "@/shared/config/store";
import { TUserFormStore } from "./types";

const initialState = {
  // id: "",
  email: "",
  password: "",
};

export const useUserFormStore = create<TUserFormStore>()((set, get) => ({
  ...initialState,
  setEmail: (value) => set(() => ({ email: value })),
  setPassword: (value) => set(() => ({ password: value })),
  setData: (data) => set(() => ({ ...data })),
  reset: () => set(() => ({ ...initialState })),

  ...RootStore(get),
}));
