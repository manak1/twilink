<template>
  <div
    class="flex item-center justify-between bg-red-300 px-5 items-center pb-4"
    :class="directionClass"
  >
    <div
      v-if="!image"
      class="c-chara__text w-full bg-white relative"
      :class="directionText"
    >
      <p class="py-6 px-3 text-sm tracking-wider">{{ text }}</p>
    </div>
    <div v-else class="w-full" :class="directionText">
      <img :src="image" class="rounded" alt="" />
    </div>
    <div class="c-chara__img text-center w-20 relative">
      <img
        :src="icon"
        class="c-chara__icon rounded-full border"
        :alt="`${name}のアイコン`"
      />
      <p class="c-chara__name mt-2 font-bold">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    directionClass() {
      return {
        'flex-row-reverse': !this.right,
      }
    },
    directionText() {
      return {
        'c-chara__textRight': this.right,
        'ml-3': !this.right,
        'mr-3': this.right,
        'bg-line': this.right,
      }
    },
    directionIcon() {
      return {
        'flip-icon': this.right,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.flip-icon {
  transform: scaleX(-1);
}

.c-chara {
  &__icon {
    width: 64px;
  }

  &__text {
    border-radius: 20px;

    &::before {
      content: '';
      position: absolute;
      border-right: 8px solid #eee;
      border-bottom: 8px solid transparent;
      border-top: 8px solid transparent;
      border-right-color: #fff;
      top: 14px;
      -webkit-transform: rotateX(35deg);
      transform: rotateX(35deg);
      left: -7px;
    }
  }

  &__textRight {
    background-color: #79cc3f;
    &::before {
      right: -7px;
      left: initial;
      transform: scaleX(-1);
      border-right-color: #79cc3f;
    }
  }

  &__name {
    width: 100%;
    font-size: 10px;
  }
}

.bg-line {
  background-color: #79cc3f;
}
</style>
