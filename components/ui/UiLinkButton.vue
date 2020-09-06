<template>
  <a
    :href="urlData.url"
    class="block w-full border text-center shadow py-4"
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
  mounted() {
    console.log(this.urlData)
  },
}
</script>
