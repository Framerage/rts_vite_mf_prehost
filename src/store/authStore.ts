import {create} from "zustand";
interface IAuthStore {
  user: null | string;
}
interface IAuthActions {
  setUser: (value: null | string) => void;
}
interface IAuthState extends IAuthStore {
  actions: IAuthActions;
}
const defaultAuthStore: IAuthStore = {
  user: null,
};

export const useAuthStore = create<IAuthState>()(set => ({
  ...defaultAuthStore,
  actions: {
    setUser: loginValue => set(state => ({...state, user: loginValue})),
  },
}));
