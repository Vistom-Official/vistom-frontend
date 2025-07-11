import { create } from "zustand";
import { TReviewSore } from "./types";
import { RootStore } from "@/shared/config/store";

const initialState = {
  date: "",
  comment: "",
  rating: 0,
  tags: [],
};

export const useReviewStore = create<TReviewSore>()((set, get) => ({
  ...initialState,
  setDate: (value) => set(() => ({ date: value })),
  setComment: (value) => set(() => ({ comment: value })),
  setRating: (value) => set(() => ({ rating: value })),
  setTags: (value) => set(() => ({ tags: [...value] })),
  reset: () => set(() => ({ ...initialState })),
  ...RootStore(get),
}));
