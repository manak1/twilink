<template>
  <div class="border-b">
    <ul
      class="flex relative container l-switcher mx-auto justify-center space-x-6 px-4"
    >
      <li
        v-for="(link, index) in links"
        :key="index"
        class="text-sm relative"
        :class="{ activeLink: $route.path.includes(link.path) }"
      >
        <nuxt-link :to="link.path" class="block px-2 pt-1 pb-2">
          <font-awesome-icon
            class="text-xl"
            :style="applyActiveIcon(link.path)"
            :icon="link.icon"
          ></font-awesome-icon>
        </nuxt-link>
      </li>
      <li :class="activeBar" :style="applyColor"></li>
    </ul>
  </div>
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
          icon: 'eye',
        },
        {
          path: 'edit',
          text: '編集',
          icon: 'pen',
        },
        {
          path: 'theme',
          text: 'テーマ',
          icon: 'palette',
        },
        {
          path: 'share',
          text: 'シェア',
          icon: 'share',
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
  methods: {
    applyActiveIcon(path) {
      if (path === this.getPage) {
        return {
          color: this.getUser.color,
        }
      }
      return ''
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
  left: 20px;
  width: 50px;
  height: 2px;
  background-color: #1da1f2;
  transition: 0.5s cubic-bezier(0.865, 0.2, 0.15, 0.86);
}

.switcherBar__edit {
  left: 82px;
}

.switcherBar__theme {
  left: 142px;
}

.switcherBar__share {
  left: 202px;
}

.l-switcher {
  max-width: 320px;
}
</style>
