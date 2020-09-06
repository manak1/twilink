<template>
  <div v-if="getUser" class="mx-auto">
    <div class="container mx-auto min-h-screen border">
      <l-header :user="getUser" />
      <l-switcher />
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

<style>
.sortable-ghost {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
