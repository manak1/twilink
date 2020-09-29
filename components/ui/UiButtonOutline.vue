<template>
  <a
    href="#"
    class="inline-block mx-auto font-bold text-sm relative w-40 rounded text-white py-2"
    :class="buttonClass"
    @click.prevent="$emit('clickEvent')"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  computed: {
    buttonClass() {
      return {
        'c-button': true,
        'c-button__default': !this.type,
        'c-button__danger': this.type === 'danger',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.c-button {
  border: 2px solid;
  border-color: #1ea1f1;

  &__default {
    color: #1ea1f1;
  }

  &__danger {
    border-color: #e2255e;
    color: #e2255e;
  }
}
</style>
