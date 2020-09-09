<template>
  <ul
    class="flex relative container mx-auto justify-center space-x-6 px-4 border-b"
  >
    <li
      v-for="(link, index) in links"
      :key="index"
      class="text-sm relative"
      :class="{ activeLink: $route.path.includes(link.path) }"
    >
      <nuxt-link :to="link.path" class="block pt-1 pb-2">
        {{ link.text }}
      </nuxt-link>
    </li>
    <li :class="activeBarSp" class="sm:hidden"></li>
    <li :class="activeBar" class="hidden sm:block"></li>
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
    activeBarSp() {
      return {
        switcherBarSp: true,
        switcherBarSp__edit: this.getPage === 'edit',
        switcherBarSp__theme: this.getPage === 'theme',
        switcherBarSp__share: this.getPage === 'share',
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
  left: 95px;
  width: 50px;
  height: 2px;
  background-color: #1da1f2;
  transition: 0.5s cubic-bezier(0.865, 0.2, 0.15, 0.86);
}

.switcherBar__edit {
  left: 150px;
}

.switcherBar__theme {
  left: 210px;
}

.switcherBar__share {
  left: 275px;
}

.switcherBarSp {
  position: absolute;
  bottom: 0;
  left: 45px;
  width: 50px;
  height: 2px;
  background-color: #1da1f2;
  transition: 0.5s cubic-bezier(0.865, 0.2, 0.15, 0.86);
}

.switcherBarSp__edit {
  left: 100px;
}

.switcherBarSp__theme {
  left: 160px;
}

.switcherBarSp__share {
  left: 225px;
}
</style>
