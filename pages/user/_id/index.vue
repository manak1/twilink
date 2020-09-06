<template>
  <div v-if="user" class="container mx-auto text-center pt-4">
    <img
      :src="userIcon"
      class="rounded-full h-24 mx-auto"
      :alt="`${user.name}のアイコン`"
    />
    <h2>{{ userIcon }}</h2>
    <h2 class="text-center mt-2">{{ user.name }}</h2>
  </div>
</template>

<script>
import { AuthService } from '@/service/AuthService'
export default {
  async asyncData({ app, params }) {
    const authInstance = new AuthService(app.$fb)
    const user = await authInstance.getUserById(params.id)
    return {
      user,
    }
  },
  computed: {
    userIcon() {
      return this.user.icon.replace('_normal', '')
    },
  },
}
</script>
