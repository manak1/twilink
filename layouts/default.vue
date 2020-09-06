<template>
  <div class="mx-auto bg-gray-100">
    <div
      class="min-h-screen container bg-white mx-auto border-r border-l border-t"
    >
      <l-header :user="getUser" />
      <Nuxt />
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
