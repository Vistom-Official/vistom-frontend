import { fetchClient } from "@/shared/config/fetchClient";

export const resetPassword = async (data: { id: string; password: string }) => {
  return await fetchClient("/api/user/reset-password", {
    method: "POST",
    body: JSON.stringify({
      ...data,
    }),
    headers: { "Content-Type": "application/json" },
  });
};
