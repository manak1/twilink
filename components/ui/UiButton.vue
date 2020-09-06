<template>
  <a
    href="#"
    class="inline-block c-button bg-blue text-white w-2/3 py-4"
    @click.prevent="$emit('clickEvent')"
  >
    <div class="flex justify-center items-center">
      <span>{{ text }}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.c-button {
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.08) 0 8px 28px;
}

.c-button:hover {
  background-color: rgb(26, 145, 218);
}
</style>
