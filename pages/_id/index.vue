<template>
  <div
    v-if="user"
    class="container relative min-h-screen mx-auto text-center pt-4 px-5"
    :class="user.template"
    :style="applyBackgroundColor(applyColor)"
  >
    <div class="flex flex-col-reverse">
      <h2 class="mt-2 c-title" :style="applyTextColor(applyColor)">
        <a
          class="hover:color-blue-300 c-title"
          :href="`https://twitter.com/${user.id}`"
        >
          @{{ user.id }}
        </a>
      </h2>
      <img
        class="border c-icon rounded-full h-24 mx-auto"
        :src="getImage"
        :alt="`${user.name}のアイコン`"
      />
    </div>
    <ul class="space-y-4 pt-6">
      <li v-for="(url, index) in user.urls" :key="index">
        <UiLinkButton :style="applyBorderColor(applyColor)" :url-data="url" />
      </li>
    </ul>
    <figure
      class="absolute bottom-0 pb-6"
      style="left: 50%; transform: translateX(-50%)"
    >
      <nuxt-link to="/">
        <small class="text-white text-xs mb-2 block">hosted with 🐧 by </small>
        <img
          class="w-32 h-auto"
          src="@/assets/images/layouts/header/logo.svg"
          alt="TwiLink(ツイリンク)ロゴ"
        />
      </nuxt-link>
    </figure>
  </div>
</template>

<script>
import { AuthService } from '@/service/AuthService'
import { templates } from '@/static/api/templates.json'
export default {
  layout: 'user',
  async asyncData({ app, params, redirect }) {
    const authInstance = new AuthService(app.$fb)
    const user = await authInstance.getUserById(params.id)
    let applyColor = false
    if (user) {
      const applyColorList = templates.filter((template) => {
        if (template.class === user.template) {
          return template.applyColor
        } else {
          return false
        }
      })

      if (applyColorList.length >= 1) {
        console.log(applyColorList)
        applyColor = applyColorList[0].applyColor
      }
      return {
        user,
        applyColor,
      }
    }
    return redirect('/404')
  },
  data() {
    return {
      templates: templates,
    }
  },
  computed: {
    getImage() {
      return this.user.icon.replace('_normal', '')
    },
  },
  methods: {
    applyBorderColor(applyColor) {
      if (!applyColor) {
        return
      }
      return {
        'border-color': this.user.color,
        color: this.user.color,
      }
    },

    applyTextColor(applyColor) {
      if (!applyColor) {
        return {
          color: this.user.color,
        }
      }
    },

    applyBackgroundColor(applyColor) {
      if (!applyColor) {
        return
      }
      let colorList = this.user.color.split(',')
      colorList[3] = colorList[3].replace('1', '0.6')
      return {
        'background-color': colorList.join(','),
      }
    },
  },
  head() {
    return {
      title: `@${this.user.id}のリンク集 | TwiLink`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `@${this.user.id}さんのリンク集`,
        },
        { hid: 'og:type', property: 'og:type', content: '' },
        { hid: 'og:title', property: 'og:title', content: '' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `@${this.user.id}さんのリンク集。TwiLinkであなただけのリンク集を作成しよう！`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://twilink.click/${this.user.id}`,
        },
        {
          name: 'twitter:title',
          hid: 'twitter:title',
          content: `@${this.user.id}さんのリンク集。TwiLinkであなただけのリンク集を作成しよう！`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `twilink-ogp-3recd8om0.vercel.app/api/ogp?title=${this.user.name}のリンク集&url=${this.getImage}`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/buttons';
</style>
