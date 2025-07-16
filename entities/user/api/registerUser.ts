import { TUserFormValues } from "@/entities/userForm";
import { fetchClient } from "@/shared/config/fetchClient";

const API_BASE_URL = "https://vistom-backend-dev.onrender.com";

export const registerUser = async (data: TUserFormValues & {}) => {
  return await fetchClient(`${API_BASE_URL}/api/profile/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
};

// const API_BASE_URL = "https://vistom-backend-dev.onrender.com/";

// export const registerUser = async (
//   data: TUserFormValues & { termsAccepted: boolean }
// ) => {
//   return await fetchClient(`${API_BASE_URL}/api/profile/register`, {
//     method: "POST",
//     body: JSON.stringify({
//       ...data,
//     }),
//     headers: { "Content-Type": "application/json" },
//   });
// };
