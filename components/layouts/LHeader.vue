<template>
  <header class="w-full l-header">
    <div
      class="container px-5 py-2 border-b mx-auto flex items-center justify-between"
    >
      <h1 class="block">TwiLink</h1>
      <div v-if="!user">
        <ui-login-button text="ログイン" @click-event="login" />
      </div>
      <div v-else>
        <div class="rounded-full border">
          <img
            :src="user.icon"
            class="rounded-full h-10"
            :alt="`${user.name}のアイコン`"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { userMapper } from '@/store/user'

export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...userMapper.mapActions(['login']),
  },
}
</script>

<style scoped>
.l-header {
  height: 60px;
}
</style>
