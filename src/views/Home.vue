<template>
    <div>{{userInfo}}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import store from '@/store'
import tokenMixin from '../mixin/token'

@Options({})
export default class Home extends Vue {
    get userInfo(): string {
        const user = tokenMixin.decode(this, store.getters.getToken)
        return `Logged user ${user.username} exp at ${user.exp}`
    }

    get token(): string {
        return store.getters.getToken
    }

    set token(token: string)  {
        store.commit('SET_TOKEN', token)
    }

    public mounted(): void {
        this.checkToken()
    }

    private checkToken(): void {
        const token = tokenMixin.getToken(this)
        if(token !== null) {
            this.token = token
        } else {
            this.$router.push('auth')
        }
    }
}
</script>
