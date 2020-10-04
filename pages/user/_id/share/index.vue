<template>
  <section class="px-5 text-center pt-4 pb-20">
    <h2 class="font-bold">リンク集をシェアしよう。</h2>
    <ul class="space-y-4 mt-4">
      <li v-for="(sns, index) in socials" :key="index">
        <UiShareButton :type="sns.type">
          {{ sns.text }}
        </UiShareButton>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  layout: 'project',

  data() {
    return {
      socials: [
        {
          type: '',
          text: 'URLをコピー',
        },
        {
          type: 'twitter',
          text: 'ページをツイート',
        },
        {
          type: 'facebook',
          text: 'ページをシェア',
        },
        {
          type: 'line',
          text: 'ページを共有',
        },
      ],
    }
  },
}
</script>
