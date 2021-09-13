import UserState from "./types";
import getters from "./getters";
import mutations from "./mutations";

const state: UserState = {
    token: ''
}

export default {
    state,
    getters,
    mutations
}