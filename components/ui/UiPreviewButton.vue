<template>
  <a
    href="#"
    class="mt-4 inline-block c-label__button py-6 border w-full rounded shadow"
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
.c-label__button {
  display: block;
  text-decoration: none;
  background: #fff;
  border-left: solid 15px #ff7c5c;
  color: #ff7c5c;
  padding: 20px 0;
  font-weight: bold;
}
</style>
