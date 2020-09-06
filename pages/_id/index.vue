<template>
  <div v-if="user" class="container mx-auto text-center pt-4 px-5">
    <div class="flex flex-col-reverse">
      <h2>
        <a
          class="hover:color-blue-300"
          :href="`https://twitter.com/${user.id}`"
        >
          @{{ user.id }}
        </a>
      </h2>
      <img
        class="border rounded-full h-24 mx-auto"
        :src="getImage"
        :alt="`${user.name}のアイコン`"
      />
    </div>
    <ul class="space-y-4 pt-4">
      <li v-for="(url, index) in user.urls" :key="index">
        <UiLinkButton :url-data="url" />
      </li>
    </ul>
  </div>
</template>

<script>
import { AuthService } from '@/service/AuthService'
export default {
  async asyncData({ app, params }) {
    const authInstance = new AuthService(app.$fb)
    const user = await authInstance.getUserById(params.id)
    if (user) {
      return {
        user,
      }
    }
    this.$router.push('/404')
  },
  computed: {
    getImage() {
      return this.user.icon.replace('_normal', '')
    },
  },
}
</script>
