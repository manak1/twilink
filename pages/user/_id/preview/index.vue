<template>
  <div v-if="getUser" class="px-5 pt-4">
    <ul class="space-y-4">
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
  },
  methods: {
    ...userMapper.mapActions(['relogin']),
  },
}
</script>
