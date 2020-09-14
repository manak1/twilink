<template>
  <section class="px-5 text-center pt-4">
    <section>
      <h2 class="font-bold">メインカラー</h2>
      <ul v-if="colorOptions" class="flex flex-wrap justify-center mt-5">
        <li v-for="(option, index) in colorOptions" :key="index" class="p-2">
          <label
            :for="option.id"
            name="color"
            :style="applyColor(option.color)"
          >
            <div
              :style="applyBackColor(option.color)"
              class="c-selector text-center rounded-full mx-auto relative cursor-pointer"
              :class="activeColor(option.color)"
            ></div>
            <font-awesome-icon
              :icon="option.icon"
              class="mt-2"
            ></font-awesome-icon>
          </label>
          <input
            :id="option.id"
            v-model="mainColor"
            class="c-selector"
            :value="option.color"
            name="color"
            type="radio"
          />
        </li>
      </ul>
      <CTemplate v-if="templates" :templates="templates" />
    </section>
  </section>
</template>

<script>
import CTemplate from '@/pages/user/_id/theme/-CTemplate'
export default {
  layout: 'project',
  components: {
    CTemplate,
  },
  /*   async asyncData({ $content }) {
    const templates = await $content('templates').fetch()
    return {
      templates: templates[0].templates,
    }
  }, */
  data() {
    return {
      colorOptions: [
        {
          color: '#1da2f1',
          icon: 'dove',
          id: 'color1',
        },
        {
          color: '#FF7C5C',
          icon: 'carrot',
          id: 'color2',
        },
        {
          color: '#16bf63',
          icon: 'leaf',
          id: 'color3',
        },
        {
          color: '#e1255e',
          icon: 'apple-alt',
          id: 'color4',
        },
        {
          color: '#794bc3',
          icon: 'moon',
          id: 'color5',
        },
      ],
      mainColor: '#1da2f1',
    }
  },
  methods: {
    applyColor(color) {
      return {
        color: color,
      }
    },
    activeColor(color) {
      return {
        color_active: color === this.mainColor,
      }
    },
    applyBackColor(color) {
      return {
        'background-color': color,
      }
    },
  },
}
</script>

<style lang="scss">
input[type='radio'] {
  display: none;
}
input[type='checkbox'] {
  display: none;
}

.c-selector {
  width: 50px;
  height: 50px;
  display: block;
}

.color_active {
  &::after {
    content: '';
    background-image: url('~assets/images/ui/select/check-solid.svg');
    position: absolute;
    top: 13px;
    left: 12px;
    width: 25px;
    height: 25px;
  }
}
</style>
