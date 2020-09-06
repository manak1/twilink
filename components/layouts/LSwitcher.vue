<template>
  <ul
    class="flex relative container mx-auto justify-center space-x-6 px-4 pt-1 pb-2 border-b"
  >
    <li
      v-for="(link, index) in links"
      :key="index"
      class="text-sm relative"
      :class="{ activeLink: $route.path.includes(link.path) }"
    >
      <nuxt-link :to="link.path">
        {{ link.text }}
      </nuxt-link>
    </li>
    <li :class="activeBar"></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          path: 'preview',
          text: '確認',
        },
        {
          path: 'edit',
          text: '編集',
        },
        {
          path: 'theme',
          text: 'テーマ',
        },
        {
          path: 'share',
          text: 'シェア',
        },
      ],
    }
  },
  computed: {
    activeBar() {
      return {
        switcherBar: true,
        switcherBar__edit: this.getPage === 'edit',
        switcherBar__theme: this.getPage === 'theme',
        switcherBar__share: this.getPage === 'share',
      }
    },
    getPage() {
      const urls = this.$route.path.split('/')
      return urls[urls.length - 1]
    },
  },
}
</script>

<style scoped>
.activeLink {
  position: relative;
}

.switcherBar {
  position: absolute;
  bottom: 0;
  left: 20%;
  width: 50px;
  height: 2px;
  background-color: #1da1f2;
  transition: 0.5s cubic-bezier(0.865, 0.2, 0.15, 0.86);
}

.switcherBar__edit {
  left: 31%;
}

.switcherBar__theme {
  left: 44%;
}

.switcherBar__share {
  left: 58%;
}
</style>
