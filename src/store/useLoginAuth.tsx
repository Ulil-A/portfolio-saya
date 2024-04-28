import { create } from "zustand";

interface AuthTypes {
  authCredetial: {
    email: string;
    password: string;
  };
  tokens: {
    setToken: string | null;
    getToken: string | null;
  };
}

const initialState: AuthTypes = {
  authCredetial: {
    email: "",
    password: "",
  },
};

export const useLoginAuth = create((set) => ({}));
