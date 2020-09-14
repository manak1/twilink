<template>
  <a
    :href="urlData.url"
    class="w-full c-button text-center text-white py-4"
    target="_blank"
  >
    {{ urlData.text }}
  </a>
</template>

<script>
export default {
  props: {
    urlData: {
      type: Object,
      required: true,
    },
  },
}
</script>
