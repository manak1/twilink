<template>
  <div
    class="ui-modal container mx-auto fixed w-full left-0 bg-black right-0 top-0 bottom-0 container border-r border-l top-0 bottom-0 c-center"
    :class="modalClass"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    full: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    modalClass() {
      return {
        'bg-white': this.full,
        'bg-black': !this.full,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-modal {
  z-index: 999;
}
</style>
