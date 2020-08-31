<template>
  <ul
    class="flex container mx-auto justify-center space-x-6 px-4 pt-1 pb-2 border-b"
  >
    <li
      v-for="(link, index) in links"
      :key="index"
      class="text-sm relative"
      :class="{ activeLink: $route.path.includes(link.path) }"
    >
      <nuxt-link :to="link.path">
        {{ link.text }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          path: 'preview',
          text: 'プレビュー',
        },
        {
          path: 'edit',
          text: '編集',
        },
        {
          path: 'setting',
          text: '設定',
        },
      ],
    }
  },
}
</script>

<style scoped>
.activeLink {
  position: relative;
}

.activeLink::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 40px;
  height: 2px;
  background-color: #1da1f2;
  display: inline-block;
  transform: translateX(-50%);
}
</style>
