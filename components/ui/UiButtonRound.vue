<template>
  <a
    href="#"
    :class="buttonClass"
    class="inline-block bg-red-300 py-2 px-8 rounded-lg c-button text-white"
    @click.prevent="$emit('click')"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    delete: {
      type: Boolean,
      default: false,
    },
    cancel: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return {
        'bg-delete': this.delete,
        'bg-cancel': this.cancel,
      }
    },
  },
}
</script>

<style scoped>
.c-button {
  border-radius: 30px;
}

.bg-cancel {
  color: #14171a;
  font-weight: bold;
  background-color: rgb(230, 236, 240);
}
</style>
