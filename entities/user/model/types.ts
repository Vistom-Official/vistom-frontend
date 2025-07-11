export type TUser = {
  id: string;
  email: string;
  password?: string;
  updatedAt?: Date;
  createdAt?: string;
};

export type TUserMethods = {
  clearUser: () => void;
  setUser: (data: TUser) => void;
  getFilledValues: () => TUser;
};

export type TUserStore = TUser & TUserMethods;
