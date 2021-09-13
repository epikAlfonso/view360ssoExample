<template>
    <div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import tokenMixin from '../mixin/token'

@Options({})
export default class Callback extends Vue {
    public mounted(): void {
        const token = this.$route.query.token
        if(token) {
            tokenMixin.setToken(this, <string>token);
            this.$router.push('/')
        }
    }
}
</script>
