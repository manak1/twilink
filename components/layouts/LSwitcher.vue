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
    <li :class="activeBarSp" :style="applyColor" class="sm:hidden"></li>
    <li :class="activeBar" :style="applyColor" class="hidden sm:block"></li>
  </ul>
</template>

<script>
import { userMapper } from '@/store/user'
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
    ...userMapper.mapGetters(['getUser']),
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

    applyColor() {
      return {
        'background-color': this.getUser.color,
        color: 'red',
      }
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
  bottom: -2px;
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
  bottom: -2px;
  left: 46px;
  width: 50px;
  height: 2px;
  background-color: #1da1f2;
  transition: 0.5s cubic-bezier(0.865, 0.2, 0.15, 0.86);
}

.switcherBarSp__edit {
  left: 97px;
}

.switcherBarSp__theme {
  left: 157px;
}

.switcherBarSp__share {
  left: 223px;
}
</style>
