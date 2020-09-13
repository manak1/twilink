<template>
  <div
    class="c-modal container mx-auto fixed w-full left-0 bg-black right-0 top-0 bottom-0 container border-r border-l top-0 bottom-0 bg-red"
  >
    <div class="absolute c-center w-full" style="max-width: 320px">
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.c-modal {
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999999;
}

.c-center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
