<template>
  <div class="bg-red-300 py-20">
    <ul class="space-y-3">
      <li v-for="(chat, index) in script" :key="index">
        <UiCharachter
          :name="chat.name"
          :text="chat.text"
          :right="chat.right"
          :icon="chat.icon"
          :image="chat.image"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      script: [
        {
          name: '迷える羊',
          icon: '/images/intro/sheep.svg',
          text: 'う〜ん、どうしよう...',
          right: true,
        },
        {
          name: 'ペンギンさん',
          icon: '/images/intro/penguin.svg',
          text: 'どうしたんだい羊君？',
          right: false,
        },
        {
          name: '迷える羊',
          icon: '/images/intro/sheep.svg',
          text: 'Twitterのプロフィールにリンクをたくさん貼りたいんですけど',
          right: true,
        },
        {
          name: '迷える羊',
          icon: '/images/intro/sheep.svg',
          text: 'Twitterのプロフィールにリンクをたくさん貼りたいんですけど...',
          right: true,
          image: '/images/intro/screenshot.png',
        },
        {
          name: '迷える羊',
          icon: '/images/intro/sheep.svg',
          text: 'こんな感じでごちゃごちゃしちゃうんですよね...',
          right: true,
        },
        {
          name: 'ペンギンさん',
          icon: '/images/intro/penguin.svg',
          text: 'そんな君におすすめがTwiLinkだ！!',
          right: false,
        },
        {
          name: 'ペンギンさん',
          icon: '/images/intro/penguin.svg',
          text: 'TwiLinkを使うとさっきのプロフィールがこんな感じに...',
          right: false,
        },
        {
          name: 'ペンギンさん',
          icon: '/images/intro/penguin.svg',
          text: 'TwiLinkを使うとさっきのプロフィールがこんな感じに...',
          right: false,
          image: '/images/intro/screenshot2.png',
        },
        {
          name: 'ペンギンさん',
          icon: '/images/intro/penguin.svg',
          text: 'リンクを一つにまとめられてプロフィールがスッキリするよ！',
          right: false,
        },
        {
          name: '迷える羊',
          icon: '/images/intro/sheep.svg',
          text: '本当だ！！しかもめっちゃ可愛いページになってる！！',
          right: true,
        },
        {
          name: '迷える羊',
          icon: '/images/intro/sheep.svg',
          text: '本当だ！！しかもめっちゃ可愛いページになってる！！',
          right: true,
          image: '/images/intro/screenshot3.png',
        },
        {
          name: 'ペンギンさん',
          icon: '/images/intro/penguin.svg',
          text: 'うわお！凄い！おしゃれだね！！！みんなも是非使ってみてね！！',
          right: false,
        },
      ],
    }
  },
}
</script>
