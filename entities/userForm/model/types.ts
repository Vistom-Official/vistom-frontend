import { TUser } from "@/entities/user/model";

export type TUserFormValues = Omit<TUser, "id"> & {
  email: string;
  password: string;
};

export type TUserFormMethods = {
  reset: () => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  getFilledValues: () => TUserFormValues;
  setData: (data: TUserFormValues) => void;
};

export type TUserFormStore = TUserFormValues & TUserFormMethods;
