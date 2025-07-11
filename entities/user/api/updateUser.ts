import { fetchClient } from "@/shared/config/fetchClient";
import { TUser } from "../model";

export const updateUser = async (data: TUser) => {
  return await fetchClient("/api/user/update", {
    method: "POST",
    body: JSON.stringify({
      ...data,
    }),
    headers: { "Content-Type": "application/json" },
  });
};
