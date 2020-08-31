<template>
  <div class="mx-auto">
    <div class="min-h-screen container mx-auto border">
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
