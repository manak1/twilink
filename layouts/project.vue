<template>
  <div v-if="getUser" class="mx-auto bg-gray-100">
    <div
      class="bg-white container mx-auto min-h-screen md:border overflow-hidden"
    >
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

<style lang="scss">
.sortable-ghost {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
