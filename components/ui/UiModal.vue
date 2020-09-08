<template>
  <div
    class="fixed container border-r border-l top-0 bottom-0 c-center right-0 bg-white"
    style="left: 50%; transform: translate(-50%)"
  >
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style>
.c-ceter {
  left: 50%;
  transform: translateX(-50%);
}
</style>
