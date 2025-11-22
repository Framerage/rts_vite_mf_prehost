import {useAuthStore} from "./authStore";

export const useAuthStateSelector = () => useAuthStore().user;
