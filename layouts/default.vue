<template>
  <div class="mx-auto bg-gray-100">
    <div
      class="min-h-screen flex flex-col container bg-white mx-auto md:border-r md:border-l md:border-t"
    >
      <l-header :user="getUser" />
      <Nuxt />
      <div class="flex-grow"></div>
      <l-footer />
      <l-footer-box :user="getUser" />
    </div>
  </div>
</template>

<script>
import { userMapper } from '@/store/user'
export default {
  computed: {
    ...userMapper.mapGetters(['getUser']),
  },
  mounted() {
    this.relogin()
  },
  methods: {
    ...userMapper.mapActions(['relogin']),
  },
}
</script>
