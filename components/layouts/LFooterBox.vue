<template>
  <div
    v-if="user"
    class="fixed bottom-0 w-full overflow-hidden px-3 bg-white shadow-sm container l-footerBox z-50"
    style="box-shadow: 0 0 2px rgba(0, 0, 0, 0.25); color: #555"
  >
    <ul class="flex justify-center space-x-2 text-xs text-center">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="flex flex-col w-1/5"
      >
        <nuxt-link
          class="block py-3"
          :to="pathCreate(index, link.path)"
          :style="activeClass(link.path, index)"
        >
          <font-awesome-icon :icon="link.icon" class="text-2xl" />
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
    applyColor() {
      return {
        'background-color': this.user.color,
      }
    },
  },
  methods: {
    activeClass(path, index) {
      const splitedUrl = this.$route.path.split('/')
      const splitedPath = path.split('/')
      if (index === 1 && splitedUrl[1] === 'user') {
        return {
          color: this.user.color,
        }
      }
      if (
        `/${splitedUrl[splitedUrl.length - 1]}` ===
        `/${splitedPath[splitedPath.length - 1]}`
      ) {
        return {
          color: this.user.color,
        }
      }
    },
    pathCreate(index, path) {
      if (index === 1) {
        const editPath = `/user/${this.user.id}/edit`
        return editPath
      }
      return path
    },
  },
}
</script>

<style scoped>
.l-footerBox {
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: calc(env(safe-area-inset-bottom));
}

.l-footerBox__active {
  transition: 0.4s;
  color: #1da1f2;
}
</style>
