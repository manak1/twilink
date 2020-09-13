<template>
  <section class="mt-8">
    <h2 class="font-bold">テンプレート</h2>
    <ul class="flex flex-wrap justify-center mt-5">
      <li
        v-for="(template, index) in templates"
        :key="index"
        class="w-1/2 p-2"
        :class="activeTemplate(template.class)"
        style="max-width: 150px"
      >
        <label :for="`template${index}`">
          <article
            class="flex flex-col h-32 px-2 pt-4"
            :class="template.class"
            style="height: 217px"
          >
            <img :src="getUser.icon" class="w-8 rounded-full mx-auto" alt="#" />
            <h3 class="text-white mt-2" style="font-size: 10px">
              @{{ getUser.id }}
            </h3>
            <div class="flex flex-col space-y-2 mt-4 relative">
              <a v-for="n in 3" :key="n" href="#" class="c-button c-disabled">
                test
              </a>
            </div>
          </article>
        </label>
        <input
          :id="`template${index}`"
          v-model="selected"
          :value="template.class"
          type="radio"
        />
      </li>

      <li
        v-if="templates.length % 2 !== 0"
        class="p-2 w-1/2"
        style="max-width: 150px"
      ></li>
    </ul>
    <div class="mt-12">
      <a href="#" class="border px-4 py-3">もっと見る</a>
    </div>
  </section>
</template>

<script>
import { userMapper } from '@/store/user'
export default {
  props: {
    templates: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: 'l-insta',
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
}
</script>

<style lang="scss" scoped>
.c-active {
  border: 1px solid #fff;
}

.c-disabled {
  pointer-events: none;
}
</style>
