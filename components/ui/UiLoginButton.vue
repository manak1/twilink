<template>
  <a
    href="#"
    class="inline-block bg-blue text-white pr-3 py-2 shadow rounded-md"
    @click.prevent="$emit('click-event')"
  >
    <div class="flex items-center">
      <img
        src="@/assets/images/ui/button/twitter-white.svg"
        alt="ツイッターアイコン"
        CLASS="h-5 ml-2 mr-1"
      />
      {{ text }}
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
  computed: {},
}
</script>
