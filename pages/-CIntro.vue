<template>
  <section class="mx-auto px-5 pt-8 pb-24">
    <h2 class="text-center font-bold text-xl">
      あなただけのリンク集を作ろう！！
    </h2>
    <figure class="mt-8">
      <img
        src="@/assets/images/pages/intro/intro.png"
        alt="リンクを表現する画像"
        class="h-64 mx-auto"
      />
    </figure>
    <p class="mt-8 px-3 text-sm mx-auto text-center leading-7">
      TwiLinkはリンクを沢山貼るとごちゃごちゃしがちなTwitterプロフィールをシンプルにリンク1つにまとめることができるサービスです。
    </p>
    <div class="text-center mt-8">
      <ui-login-button text="リンクページを作る" @click-event="login" />
    </div>
  </section>
</template>

<script>
import { userMapper } from '@/store/user'
export default {
  methods: {
    ...userMapper.mapActions(['login']),
  },
}
</script>
