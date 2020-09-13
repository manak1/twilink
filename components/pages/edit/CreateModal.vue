<template>
  <UiModal full>
    <div class="c-modal py-3 px-5 flex justify-between border-b">
      <a href="#" class="block" @click.prevent="$emit('close')">
        <font-awesome-icon class="c-icon text-xl" icon="times" />
      </a>
      <div>
        <a
          href="#"
          :class="iconButtonClass"
          :disabled="$v.dummyData.$invalid"
          class="c-button text-white px-2 py-2 text-sm rounded-lg"
          @click.prevent="handleSubmit"
        >
          <span v-if="mode === 'edit'">URLを更新する</span>
          <span v-else>URLを追加する</span>
        </a>
      </div>
    </div>
    <h2>{{ mode }}</h2>
    <div class="px-4 mt-3 flex w-full space-x-4">
      <div class="w-16">
        <img :src="getImage" class="rounded-full" alt="" />
      </div>
      <form class="w-full space-y-2 pt-2">
        <div class="flex space-x-1">
          <label for="button_url">
            <font-awesome-icon
              class="c-icon__head"
              :class="iconUrlClass"
              icon="link"
            />
          </label>
          <input
            id="button_url"
            v-model="$v.dummyData.url.$model"
            type="url"
            class="outline-none w-full text-base"
            placeholder="URLを入力"
            autocomplete="off"
          />
        </div>
        <div class="flex space-x-1">
          <label for="button_text">
            <font-awesome-icon
              class="c-icon__head"
              :class="iconTextClass"
              icon="heading"
            />
          </label>
          <input
            id="button_text"
            v-model="$v.dummyData.text.$model"
            type="text"
            class="outline-none w-full text-base"
            placeholder="表示テキストを入力"
            autocomplete="off"
          />
        </div>
        <div class="pt-8 text-sm">
          <div class="pb-12">
            <p class="text-left text-sm">ボタンのイメージ</p>
            <UiPreviewButton v-if="dummyData" :text="dummyData.text" />
          </div>
          <hr />
          <ul v-if="dummyData" class="flex">
            <li class="pt-2">
              <a
                href="#"
                @click.prevent="
                  dummyData.options.visible = !dummyData.options.visible
                "
              >
                <font-awesome-icon
                  v-if="dummyData.options.visible"
                  class="c-icon"
                  icon="eye"
                />
                <font-awesome-icon v-else class="c-icon" icon="eye-slash" />
              </a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </UiModal>
</template>

<script>
import { userMapper } from '@/store/user'
import { required, url } from 'vuelidate/lib/validators'

export default {
  props: {
    buttonData: {
      type: Object,
      default: null,
    },
    mode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dummyData: null,
    }
  },
  computed: {
    ...userMapper.mapGetters(['getUser']),
    getImage() {
      return this.getUser.icon.replace('_normal', '_bigger')
    },
    iconUrlClass() {
      return {
        'c-invalid':
          this.$v.dummyData.url.$invalid && this.$v.dummyData.url.$dirty,
        'c-valid':
          !this.$v.dummyData.url.$invalid && this.$v.dummyData.url.$dirty,
      }
    },
    iconTextClass() {
      return {
        'c-invalid':
          this.$v.dummyData.text.$invalid && this.$v.dummyData.text.$dirty,
        'c-valid':
          !this.$v.dummyData.text.$invalid && this.$v.dummyData.text.$dirty,
      }
    },
    iconButtonClass() {
      return {
        'c-button__disabled': this.$v.dummyData.$invalid,
      }
    },
  },
  mounted() {
    this.dummyData = { ...this.buttonData }
  },
  methods: {
    addButtonData() {
      this.$emit('addButtonData', this.dummyData)
    },
    updateButtonData() {
      this.$emit('updateButtonData', this.dummyData)
    },
    handleSubmit() {
      if (this.mode === 'edit') {
        this.updateButtonData()
      } else {
        this.addButtonData()
      }
    },
  },
  validations: {
    dummyData: {
      url: {
        required,
        url,
      },
      text: {
        required,
      },
    },
  },
}
</script>

<style scoped>
.c-icon {
  color: #1da1f2;
}

.c-icon__head {
  color: rgb(85, 85, 85);
}

.c-invalid {
  transition: 0.2s ease-in;
  color: red;
}

.c-button__disabled {
  opacity: 0.3;
  pointer-events: none;
}

.c-valid {
  transition: 0.2s ease-in;
  color: #1da1f2;
}

.c-button {
  background-color: #1da1f2;
}
</style>
