<template>
  <div v-if="getUser" class="l-insta px-5 pt-4" style="min-height: 90vh">
    <img
      :src="getImage"
      class="rounded-full h-24 mx-auto"
      :alt="`${getUser.name}のアイコン`"
    />
    <h2 class="text-center mt-2 text-white">@{{ getUser.name }}</h2>
    <ul class="test-ui space-y-4 mt-4">
      <li v-for="(url, index) in getUser.urls" :key="index">
        <UiLinkButton :url-data="url" />
      </li>
    </ul>
  </div>
</template>

<script>
import { userMapper } from '@/store/user'
export default {
  layout: 'project',
  computed: {
    ...userMapper.mapGetters(['getUser']),
    getImage() {
      return this.getUser.icon.replace('_normal', '')
    },
  },
  methods: {
    ...userMapper.mapActions(['relogin']),
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/buttons';
</style>
