<template>
  <div class="container mx-auto text-center">
    <h2>setting page</h2>
    <a href="#" @click.prevent="logout">ログアウト</a>
  </div>
</template>

<script>
import { userMapper } from '@/store/user'
export default {
  methods: {
    ...userMapper.mapActions(['logout']),
  },
}
</script>
