<template>
  <div class="mx-auto bg-gray-100">
    <div
      class="min-h-screen flex flex-col container bg-white mx-auto border-r border-l border-t"
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
