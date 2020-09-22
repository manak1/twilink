<template>
  <section>
    <div class="text-center mt-8">
      <ui-login-button text="リンクページを作る" />
      <p class="mt-3 text-xs text-gray-800 opacity-75">
        あなただけのリンクページをつくろう！
      </p>
    </div>

    <aside class="text-center mt-12">
      <p>↓ こんな感じのリンク集が作れるよ！</p>
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
