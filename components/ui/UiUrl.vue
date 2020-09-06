<template>
  <div
    v-if="urlData"
    class="w-full c-transition relative rounded-md border c-border mx-auto flex justify-center hover:shadow-md bg-white items-center"
  >
    <div class="w-12 block text-center py-4 handle cursor-move">
      <font-awesome-icon icon="bars" class="text-sm mx-auto text-center" />
    </div>

    <div
      class="w-full py-4 border-l relative text-left pl-2"
      style="border-color: #e6ecf0"
    >
      <div class="flex flex-col sm:space-y-2" :class="editMode">
        <span class="text-gray-500 text-sm">
          <template v-if="!edit">
            <font-awesome-icon icon="link" class="text-sm" />
            <span type="url">{{ urlData.url }}</span>
          </template>
          <template v-if="edit">
            <label for="url">
              <font-awesome-icon icon="pen" class="text-sm text-black" />
            </label>
            <input
              id="url"
              class="w-11/12 outline-none text-black"
              type="url"
              placeholder="URlを入力"
              :value="urlData.url"
            />
          </template>
        </span>
        <span class="text-gray-500">
          <template v-if="!edit">
            <font-awesome-icon icon="heading" class="text-sm text-gray-500" />
            <p class="text-gray-500 inline-block text-sm">{{ urlData.text }}</p>
          </template>
          <template v-if="edit">
            <label for="url_text">
              <font-awesome-icon icon="pen" class="text-sm text-black" />
            </label>
            <input
              id="url_text"
              class="w-11/12 outline-none text-sm text-black"
              type="text"
              placeholder="ボタンの文字を入力"
              :value="urlData.text"
            />
          </template>
        </span>
      </div>
      <transition name="fade">
        <div v-if="edit" class="c-edit absolute bottom-0" style="bottom: 10px">
          <ul>
            <li>
              <a href="#" @click.prevent="hidden = !hidden">
                <font-awesome-icon :icon="hidden ? 'eye' : 'eye-slash'" />
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="flex absolute right-0 bottom-0 p-2 space-x-1">
      <a
        v-if="!edit"
        href="#"
        class="border text-xs py-1 px-2 hover:bg-gray-100 rounded inline-block"
        @click.prevent="switchEdit"
      >
        <font-awesome-icon class="text-xs" icon="pen" />
        編集
      </a>

      <a
        v-else
        href="#"
        class="border text-xs py-1 px-2 hover:bg-gray-100 rounded inline-block"
        @click.prevent="switchEdit"
      >
        <font-awesome-icon class="text-xs" icon="check" />
        完了
      </a>

      <a
        href="#"
        class="border text-xs py-1 px-2 hover:bg-gray-100 rounded inline-block"
        @click.prevent="switchEdit"
      >
        <font-awesome-icon class="text-xs" icon="trash" />
        削除
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
  },
  data() {
    return {
      edit: false,
      dummyUrlData: null,
      hidden: false,
    }
  },
  computed: {
    editMode() {
      return {
        uiUrl: !this.edit,
        uiUrl__active: this.edit,
      }
    },
  },
  mounted() {
    this.dummyUrlData = { ...this.urlData }
  },
  methods: {
    switchEdit() {
      this.edit = !this.edit
    },
  },
}
</script>

<style scoped>
.c-border {
  border-color: rgba(18, 18, 18, 0.12);
}

.c-transition {
  transition: all 0.3s ease-in-out;
}

.c-buttons {
  right: 5px;
  bottom: 5px;
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

.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.text-enter-active {
  transition: opacity 0.3s;
}
</style>
