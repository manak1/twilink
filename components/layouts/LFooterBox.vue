<template>
  <div
    class="fixed bottom-0 w-full overflow-hidden px-3 bg-white shadow-sm z-50"
    style="box-shadow: 0 0 2px rgba(0, 0, 0, 0.25); color: #555"
  >
    <ul class="flex justify-between text-xs text-center">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="flex flex-col w-1/3"
      >
        <nuxt-link class="block py-2" :to="link.path">
          <font-awesome-icon :icon="link.icon" class="text-lg" />
          <p>{{ link.text }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          path: '/',
          text: 'ホーム',
          icon: 'home',
        },
        {
          path: 'edit',
          text: '編集',
          icon: 'pen',
        },
        {
          path: '/settings',
          text: '設定',
          icon: 'cog',
        },
      ],
    }
  },
}
</script>
