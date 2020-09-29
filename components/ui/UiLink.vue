<template>
  <span>
    <nuxt-link v-if="to" :to="to">
      <slot />
    </nuxt-link>
    <a v-if="!to && !button" :href="href">
      <slot />
    </a>
    <a v-if="button" href="#" @click.prevent="$emit('clickEvent')">
      <slot />
    </a>
  </span>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: '#',
    },
    button: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
