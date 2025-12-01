import {authStore} from "./authStore";

export const useAuthStateSelector = authStore().user;
