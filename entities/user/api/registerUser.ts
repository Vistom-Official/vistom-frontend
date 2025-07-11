import { TUserFormValues } from "@/entities/userForm";
import { fetchClient } from "@/shared/config/fetchClient";

export const registerUser = async (
  data: TUserFormValues & { termsAccepted: boolean }
) => {
  return await fetchClient("/api/register", {
    method: "POST",
    body: JSON.stringify({
      ...data,
    }),
    headers: { "Content-Type": "application/json" },
  });
};
