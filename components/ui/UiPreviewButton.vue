<template>
  <a
    href="#"
    class="mt-4 inline-block c-preview__button py-6 border w-full rounded shadow"
    style="max-width: 100%"
  >
    <p v-if="text" class="breaka-all">
      {{ text }}
    </p>
    <p v-else>ここにテキストが入るよ(ﾟωﾟ)</p>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.c-preview__button {
  padding: 12px;
  border-color: #1da2f1;
}
</style>
