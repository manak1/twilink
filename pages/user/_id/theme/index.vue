<template>
  <section class="px-5 text-center pt-4 pb-20">
    <h2 class="font-bold">メインカラー</h2>
    <ul v-if="colorOptions" class="flex flex-wrap justify-center mt-5">
      <li v-for="(option, index) in colorOptions" :key="index" class="p-2">
        <label :for="option.id" name="color" :style="applyColor(option.color)">
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
          v-model="color"
          class="c-selector"
          :value="option.color"
          name="color"
          type="radio"
          @change="updateColorData"
        />
      </li>
    </ul>
    <CTemplate
      v-if="templates"
      :templates="templates"
      @update="updateTemplateData"
    />
    <aside class="mt-4">
      <p class="text-sm">
        テンプレートはまだまだ追加予定です！
        <br />
        アイディアがあれば
        <a
          href="https://twitter.com/twilink_app"
          class="inline -mx-1"
          style="text-decoration: underline"
        >
          こちら
        </a>
        まで！！
      </p>
    </aside>
  </section>
</template>

<script>
import CTemplate from '@/pages/user/_id/theme/-CTemplate'
import { templates } from '@/static/api/templates.json'
import { userMapper } from '@/store/user'
import { AuthService } from '@/service/AuthService'
export default {
  layout: 'project',
  components: {
    CTemplate,
  },

  data() {
    return {
      colorOptions: [
        {
          color: 'rgba(29,162,241,1)',
          icon: 'dove',
          id: 'color1',
        },
        {
          color: 'rgba(255,124,92,1)',
          icon: 'carrot',
          id: 'color2',
        },
        {
          color: 'rgba(22,191,99,1)',
          icon: 'leaf',
          id: 'color3',
        },
        {
          color: 'rgba(225,37,94,1)',
          icon: 'apple-alt',
          id: 'color4',
        },
        {
          color: 'rgba(121,75,195,1)',
          icon: 'moon',
          id: 'color5',
        },
      ],
      color: '#1da2f1',
      templates: templates,
    }
  },

  computed: {
    ...userMapper.mapGetters(['getUser']),
  },
  mounted() {
    this.color = this.getUser.color
  },

  methods: {
    ...userMapper.mapMutations(['updateColor', 'updateTemplate']),
    applyColor(color) {
      return {
        color: color,
      }
    },
    activeColor(color) {
      return {
        color_active: color === this.color,
      }
    },
    applyBackColor(color) {
      return {
        'background-color': color,
      }
    },

    async updateColorData() {
      const authInstance = new AuthService(this.$fb)
      this.updateColor(this.color)
      await authInstance.updateColor(this.getUser.uid, this.color)
    },

    async updateTemplateData(template) {
      const authInstance = new AuthService(this.$fb)
      this.updateTemplate(template)
      await authInstance.updateTemplate(this.getUser.uid, template)
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
