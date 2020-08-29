<template>
  <div class="min-h-screen mx-auto">
    <l-header :user="getUser" />
    <l-switcher />
    <Nuxt />
    <l-footer-box :user="getUser" />
  </div>
</template>

<script>
import { AuthService } from '@/service/AuthService'
import { userMapper } from '@/store/user'
export default {
  mounted() {
    this.relogin()
  },
  computed: {
    ...userMapper.mapGetters(['getUser']),
  },
  methods: {
    ...userMapper.mapActions(['relogin']),
  },
}
</script>
