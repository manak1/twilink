<template>
  <a
    href="#"
    class="inline-block bg-blue text-white w-2/3 py-4 hover:opacity-70"
    style="border-radius: 30px"
    @click.prevent="$emit('clickEvent')"
  >
    <div class="flex justify-center items-center">
      <font-awesome-icon icon="plus" class="text-xl mr-4" />
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
