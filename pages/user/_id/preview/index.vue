<template>
  <div
    v-if="getUser"
    class="px-5 pt-4"
    :class="hasPreviewClass()"
    style="min-height: 85vh"
    :style="applyBackgroundColor(applyColor)"
  >
    <img
      :src="getImage"
      class="rounded-full h-24 mx-auto c-icon"
      :alt="`${getUser.name}のアイコン`"
    />
    <h2 class="text-center c-title mt-2 text-white">@{{ getUser.id }}</h2>
    <ul class="test-ui space-y-4 mt-4">
      <li v-for="(url, index) in getUser.urls" :key="index">
        <UiLinkButton :url-data="url" :style="applyBorderColor(applyColor)" />
      </li>
    </ul>
  </div>
</template>

<script>
import { userMapper } from '@/store/user'
import { templates } from '@/static/api/templates.json'
export default {
  data() {
    return {
      applyColor: false,
      templates: templates,
      hasPreview: false,
    }
  },
  layout: 'project',
  computed: {
    ...userMapper.mapGetters(['getUser']),
    getImage() {
      return this.getUser.icon.replace('_normal', '')
    },
  },
  mounted() {
    const template = this.templates.filter((template) => {
      if (template.class === this.getUser.template) {
        return template.applyColor
      } else {
        return false
      }
    })
    if (template.length >= 1) {
      this.applyColor = template[0].applyColor
      this.hasPreview = template[0].previewClass
    }
  },
  methods: {
    ...userMapper.mapActions(['relogin']),
    applyBorderColor(applyColor) {
      if (!applyColor) {
        return
      }
      return {
        'border-color': this.getUser.color,
        color: this.getUser.color,
      }
    },

    applyBackgroundColor(applyColor) {
      if (!applyColor) {
        return
      }
      let colorList = this.getUser.color.split(',')
      colorList[3] = colorList[3].replace('1', '0.6')
      return {
        'background-color': colorList.join(','),
      }
    },

    hasPreviewClass() {
      if (this.hasPreview) {
        return `${this.getUser.template}Preview`
      }
      return this.getUser.template
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/buttons';
</style>
