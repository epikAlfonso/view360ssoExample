import { MutationTree } from "vuex"
import UserState from "./types"

const mutations: MutationTree<UserState> = {
    SET_TOKEN(state, token: string) {
        state.token = token
    }
}
export default mutations