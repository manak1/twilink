<template>
  <div
    v-if="urlData"
    class="w-full c-transition relative c-border mx-auto flex justify-center bg-white items-center"
  >
    <div class="w-12 block text-center handle py-2 cursor-move">
      <font-awesome-icon icon="bars" class="text-sm mx-auto text-center" />
    </div>
    <div
      class="w-full border-l relative py-2 text-left pl-2"
      style="border-color: #e6ecf0"
    >
      <div class="flex flex-col">
        <span class="text-gray-500 text-sm">
          <font-awesome-icon icon="link" class="text-sm" />
          <span type="url" class="text-overflow">{{ trimUrl }}</span>
        </span>
        <span class="text-gray-500">
          <font-awesome-icon icon="heading" class="text-sm text-gray-500" />
          <p class="text-gray-500 inline-block text-sm text-overflow">
            {{ trimText }}
          </p>
        </span>
      </div>
    </div>
    <div class="flex c-url__options absolute c-buttons space-x-1">
      <a
        href="#"
        class="px-1 text-xshover:bg-gray-100 rounded inline-block"
        @click.prevent="$emit('edit', index)"
      >
        <font-awesome-icon class="text-xs" icon="pen" />
      </a>

      <a
        href="#"
        class="text-xs py-1 px-1 hover:bg-gray-100 rounded inline-block"
        @click.prevent="$emit('delete')"
      >
        <font-awesome-icon class="text-xs" icon="trash" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    urlData: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      dummyUrlData: null,
    }
  },
  computed: {
    trimText() {
      if (this.urlData.text.length >= 20) {
        return this.urlData.text.slice(0, 18) + '...'
      }
      return this.urlData.text
    },

    trimUrl() {
      if (this.urlData.url.length >= 30) {
        return this.urlData.url.slice(0, 26) + '...'
      }
      return this.urlData.url
    },
  },
  mounted() {
    this.dummyUrlData = { ...this.urlData }
  },
}
</script>

<style scoped>
.c-border {
  border-width: 1px;
  border-color: rgb(230, 236, 240);
}

.c-transition {
  transition: all 0.3s ease-in-out;
}

.c-buttons {
  right: 0;
  bottom: -5px;
}

.c-url__options {
  bottom: 0;
  right: 10px;
}

.uiUrl {
  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.2s;
}

.uiUrl__active {
  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.2s;
  padding-bottom: 30px;
}

.c-edit {
  transition: all 0.3s ease-in;
}
</style>
