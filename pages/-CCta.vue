<template>
  <section class="c-cta py-4">
    <div class="text-center mt-8">
      <h3 class="font-bold text-xl">さっそく作ってみよう！！</h3>
      <figure class="mt-10 c-cta__icon relative block mx-auto mb-4">
        <img
          src="/images/intro/sheep.svg"
          class="relative w-16 border mx-auto rounded-full bg-white"
          alt="羊君"
        />
      </figure>
      <ui-login-button text="リンクページを作る" />
      <p class="mt-3 text-xs text-gray-800 opacity-75">
        あなただけのリンクページをつくろう！
      </p>
    </div>

    <aside class="text-center mt-12">
      <p>↓ 実際のリンクページはこんな感じだよ！</p>
      <nuxt-link to="/mikeanakida">
        <img
          src="@/assets/images/pages/intro/intro__example.png"
          alt="manakiのリンク集"
          class="w-4/5 mx-auto mt-4 rounded-md"
        />
      </nuxt-link>
    </aside>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-cta {
  &__icon {
    &::after {
      content: '';
      width: 30px;
      height: 2px;
      top: -15px;
      left: calc(50% - 45px);
      transform: rotate(45deg);
      background-color: #555;
      display: block;
      position: absolute;
    }

    &::before {
      content: '';
      width: 30px;
      height: 2px;
      top: -15px;
      left: calc(50% + 15px);
      transform: rotate(-45deg);
      background-color: #555;
      display: block;
      position: absolute;
    }
  }
}
</style>
