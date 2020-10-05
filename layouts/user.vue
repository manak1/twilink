<template>
  <div class="mx-auto bg-gray-100">
    <div
      class="min-h-screen flex flex-col container bg-white mx-auto md:border-r md:border-l"
    >
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { userMapper } from '@/store/user'
export default {
  computed: {
    ...userMapper.mapGetters(['getUser']),
  },
  methods: {
    ...userMapper.mapActions(['relogin']),
  },
}
</script>
