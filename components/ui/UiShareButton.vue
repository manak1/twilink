<template>
  <span>
    <a
      v-if="getUser && type"
      :href="snsLink"
      :class="snsClass"
      class="bg-gray-500"
    >
      <!-- 動的にアイコンの指定が[]だとできない泣 -->
      <span class="mr-1">
        <font-awesome-icon
          v-if="type === 'twitter'"
          :icon="['fab', 'twitter']"
        />
        <font-awesome-icon v-if="type === 'line'" :icon="['fab', 'line']" />
        <font-awesome-icon
          v-if="type === 'facebook'"
          :icon="['fab', 'facebook']"
        />
        <font-awesome-icon v-if="!type" icon="link" />
      </span>
      <slot />
    </a>
    <a
      v-if="getUser && !type"
      href="#"
      :class="snsClass"
      class="bg-gray-500"
      @click.prevent="copyUrl"
    >
      <font-awesome-icon icon="link" />
      <slot />
    </a>
  </span>
</template>

<script>
import { userMapper } from '@/store/user'
export default {
  props: {
    type: {
      type: String,
      default: 'twitter',
    },
  },

  computed: {
    ...userMapper.mapGetters(['getUser']),
    getUrl() {
      return `https://twilink.click/${this.getUser.id}`
    },
    snsClass() {
      return {
        'inline-block': true,
        'w-full': true,
        'text-white': true,
        'py-2': true,
        'text-sm': true,
        rounded: true,
        'c-share__twitter': this.type === 'twitter',
        'c-share__line': this.type === 'line',
        'c-share__facebook': this.type === 'facebook',
      }
    },
    snsLink() {
      if (this.type === 'twitter') {
        return `https://twitter.com/share?text=ツイリンクでリンク集を作成したよ！&url=${this.getUrl}&related=@mikeanakida&hashtags=TwiLink,ツイリンク`
      }

      if (this.type === 'facebook') {
        return `http://www.facebook.com/share.php?u=${this.getUrl}`
      }

      if (this.type === 'line') {
        return `https://social-plugins.line.me/lineit/share?url=${this.getUrl}`
      }
      return this.getUrl
    },
  },

  methods: {
    copyUrl() {
      const dummy = document.createElement('textarea')
      document.body.append(dummy)
      dummy.value = this.getUrl
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
      alert('URLをコピーしました！')
    },
  },
}
</script>

<style lang="scss" scoped>
.c-share {
  &__twitter {
    background-color: #3c94d8;
  }

  &__facebook {
    background-color: #3d5897;
  }

  &__line {
    background-color: #01c300;
  }
}
</style>
