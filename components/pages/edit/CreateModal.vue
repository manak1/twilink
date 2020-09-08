<template>
  <UiModal>
    <div class="c-modal py-3 px-5 flex justify-between border-b">
      <a href="#" class="block" @click.prevent="$emit('close')">
        <font-awesome-icon class="c-icon text-xl" icon="times" />
      </a>
      <div>
        <a
          href="#"
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
          <label for="url">
            <font-awesome-icon class="c-icon__head" icon="link" />
          </label>
          <input
            id="url"
            type="url"
            class="outline-none w-full text-base"
            placeholder="URLを入力"
            autocomplete="off"
          />
        </div>
        <div class="flex space-x-1">
          <label for="url">
            <font-awesome-icon class="c-icon__head" icon="heading" />
          </label>
          <input
            id="text"
            type="text"
            class="outline-none w-full text-base"
            placeholder="表示テキストを入力"
            autocomplete="off"
          />
        </div>
        <div class="pt-24">
          <hr />
          <ul class="flex">
            <li class="pt-2">
              <a href="#">
                <font-awesome-icon class="c-icon" icon="eye" />
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
export default {
  computed: {
    ...userMapper.mapGetters(['getUser']),
    getImage() {
      return this.getUser.icon.replace('_normal', '_bigger')
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

.c-button {
  background-color: #1da1f2;
}
</style>
