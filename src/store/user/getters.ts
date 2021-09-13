import { GetterTree } from "vuex"
import { RootState } from "../types"
import UserState from "./types"

const getters: GetterTree<UserState, RootState> ={
    getToken(state): string {
        return state.token
    }
}

export default getters