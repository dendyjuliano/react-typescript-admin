import { User } from "../../models/users";

export const setUser = (user: User) => {
  return {
    type: "SET_USER",
    user,
  };
};
