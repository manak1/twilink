<template>
  <section class="mt-8">
    <h2 class="font-bold">テンプレート</h2>
    <ul class="flex flex-wrap justify-center mt-5">
      <li
        v-for="(template, index) in templates"
        :key="index"
        class="w-1/3 p-2"
        :class="activeTemplate(template.class)"
        style="min-width: 140px; max-width: 150px"
      >
        <label :for="`template${index}`">
          <article
            class="flex flex-col h-32 px-2 pt-4 overflow-hidden"
            :class="hasPreviewClass(template)"
            style="height: 217px"
            :style="applyBackgroundColor(template.applyColor)"
          >
            <img
              :src="getUser.icon"
              class="w-8 rounded-full mx-auto c-icon"
              alt="#"
            />
            <h3 class="text-white c-title mt-2" style="font-size: 10px">
              @{{ getUser.id }}
            </h3>
            <div class="flex flex-col space-y-3 mt-4 relative">
              <a
                v-for="n in 3"
                :key="n"
                href="#"
                class="c-button c-disabled font-bold text-xs"
                style="padding: 2px"
                :style="applyBorderColor(template.applyColor)"
              >
                ボタン
              </a>
            </div>
          </article>
          <h3 class="text-xs font-bold mt-2">
            {{ template.title }}
          </h3>
        </label>
        <input
          :id="`template${index}`"
          v-model="selected"
          :value="template.class"
          type="radio"
          @change="$emit('update', selected)"
        />
      </li>

      <li
        v-if="
          (templates.length - 1) % 3 !== 0 || (template.length - 1) % 2 !== 0
        "
        class="p-2 w-1/3"
        style="max-width: 150px; min-width: 140px"
      ></li>
    </ul>
  </section>
</template>

<script>
import { userMapper } from '@/store/user'
export default {
  props: {
    templates: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selected: 'l-simple',
    }
  },
  computed: {
    ...userMapper.mapGetters(['getUser']),
    activeTemplate() {
      return function (template) {
        return {
          'c-active': template === this.selected,
        }
      }
    },
  },
  mounted() {
    this.selected = this.getUser.template
  },
  methods: {
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

    hasPreviewClass(template) {
      if (template.previewClass) {
        return `${template.class}Preview`
      }
      return template.class
    },
  },
}
</script>

<style lang="scss" scoped>
.c-active {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    width: 30px;
    height: 30px;
    background-image: url('~assets/images/ui/select/check-solid.svg');
    display: block;
  }
}
.c-disabled {
  pointer-events: none;
}
</style>
