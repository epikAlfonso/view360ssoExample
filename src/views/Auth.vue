<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import tokenMixin from '../mixin/token'

@Options({})
export default class Auth extends Vue {
  public mounted(): void {
    const token = tokenMixin.getToken(this)
    if (token === null) {
      const route = `/auth?callback=${window.location.origin}/callback&client_id=${process.env.VUE_APP_CLIENT_ID}`
      window.location.href = `${process.env.VUE_APP_VIEW360_SSO}${route}`
    }
  }
}
</script>
