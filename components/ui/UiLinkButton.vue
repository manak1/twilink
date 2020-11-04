<template>
  <a
    :href="urlData.url"
    class="w-full block c-button text-center text-white py-4"
    target="_blank"
    rel="nofollow"
  >
    <span>
      {{ urlData.text }}
    </span>
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
