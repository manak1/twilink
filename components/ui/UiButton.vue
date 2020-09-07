<template>
  <a
    href="#"
    class="inline-block ml-auto relative c-button rounded-full bg-blue text-white py-3"
    @click.prevent="$emit('clickEvent')"
  >
  </a>
</template>

<script>
export default {}
</script>

<style scoped>
.c-button {
  width: 55px;
  height: 55px;
  box-shadow: rgba(0, 0, 0, 0.08) 0 8px 28px;
}

.c-button::after {
  position: absolute;
  top: 20px;
  left: 20px;
  content: '';
  width: 21px;
  height: 21px;
  background-image: url('~assets/images/ui/button/link-solid.svg');
  display: block;
}

.c-button::before {
  position: absolute;
  top: 14px;
  left: 16px;
  content: '';
  width: 10px;
  height: 10px;
  background-image: url('~assets/images/ui/button/plus-solid.svg');
  display: block;
}

.c-button:hover {
  background-color: rgb(26, 145, 218);
}
</style>
