<template>
  <div
    v-if="user"
    class="container min-h-screen l-insta mx-auto text-center pt-4 px-5"
  >
    <div class="flex flex-col-reverse">
      <h2 class="mt-2 c-title">
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
    <ul class="space-y-4 pt-6">
      <li v-for="(url, index) in user.urls" :key="index">
        <UiLinkButton :url-data="url" />
      </li>
    </ul>
  </div>
</template>

<script>
import { AuthService } from '@/service/AuthService'
export default {
  layout: 'user',
  async asyncData({ app, params, redirect }) {
    const authInstance = new AuthService(app.$fb)
    const user = await authInstance.getUserById(params.id)
    if (user) {
      return {
        user,
      }
    }
    return redirect('/404')
  },
  computed: {
    getImage() {
      return this.user.icon.replace('_normal', '')
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/buttons';
</style>
