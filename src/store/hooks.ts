import {useAuthStore} from "./authStore";

export function useAuthStateSelector() {
  return useAuthStore().user;
}
