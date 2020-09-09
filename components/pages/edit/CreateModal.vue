<template>
  <UiModal>
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
          @click.prevent=""
        >
          URLを追加する
        </a>
      </div>
    </div>
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
            <p class="text-left">ボタンのイメージ</p>
            <a
              href="#"
              class="mt-4 inline-block c-preview__button py-6 border w-full rounded shadow"
              style="max-width: 100%"
            >
              <p v-if="dummyData.text" class="breaka-all">
                {{ dummyData.text }}
              </p>
              <p v-else>ここにテキストが入るよ(ﾟωﾟ)</p>
            </a>
          </div>
          <hr />
          <ul class="flex">
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
  },
  data() {
    return {
      dummyData: {
        url: '',
        text: '',
        options: {
          visible: true,
        },
      },
    }
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
    if (this.buttonData) {
      this.dummyData = { ...this.buttonData }
    }
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
  color: red;
}

.c-button__disabled {
  opacity: 0.3;
  pointer-events: none;
}

.c-valid {
  color: #1da1f2;
}

.c-button {
  background-color: #1da1f2;
}

.c-preview__button {
  padding: 12px;
  border-color: #1da2f1;
}
</style>
