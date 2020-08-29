<template>
  <div
    v-if="user"
    class="fixed bottom-0 w-full overflow-hidden px-3 bg-white shadow-sm container l-footerBox z-50"
    style="box-shadow: 0 0 2px rgba(0, 0, 0, 0.25); color: #555"
  >
    <ul class="flex justify-center space-x-4 text-xs text-center">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="flex flex-col w-1/5"
      >
        <nuxt-link
          class="block pb-1 py-2"
          :to="link.path"
          :class="activeClass(link.path)"
        >
          <font-awesome-icon :icon="link.icon" class="text-lg" />
          <p>{{ link.text }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      links: [
        {
          path: '/',
          text: 'ホーム',
          icon: 'home',
        },
        {
          path: `/user/${this.$route.params.id}/edit`,
          text: 'マイページ',
          icon: 'user',
        },
        {
          path: '/settings',
          text: '設定',
          icon: 'cog',
        },
      ],
    }
  },
  computed: {
    userId() {
      if (!this.user) {
        return '123'
      }
      return this.user.id
    },
  },
  methods: {
    activeClass(path) {
      return {
        'text-blue-300': this.$route.path.includes(path),
      }
    },
  },
}
</script>

<style scoped>
.l-footerBox {
  left: 50%;
  transform: translateX(-50%);
}

.l-footerBox__active {
  transition: 0.4s;
  color: #1da1f2;
}
</style>
