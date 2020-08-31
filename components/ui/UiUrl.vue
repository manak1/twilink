<template>
  <div
    v-if="urlData"
    class="w-full rounded-md border mx-auto flex justify-center bg-white items-center"
  >
    <div class="w-12 block text-center border-r py-4 handle cursor-move">
      <font-awesome-icon icon="bars" class="text-sm mx-auto text-center" />
    </div>
    <div class="w-full py-4">
      {{ urlData.id }}
    </div>
  </div>
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
