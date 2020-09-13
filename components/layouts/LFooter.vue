<template>
  <footer class="l-footer pt-4 pb-16">
    <section class="container px-5 mx-auto text-center">
      <h2 class="font-bold text-xl">About</h2>
      <div class="mt-2 flex space-x-2 justify-center">
        <nuxt-link to="/terms"> 利用規約 </nuxt-link>
        <span>/</span>
        <a href="#">ツイッター</a>
      </div>
      <section>
        <h3 class="mt-6 font-bold">運営者</h3>
        <div class="mt-2">
          <a href="#" class="flex justify-center items-center block space-x-2">
            <img
              src="@/assets/images/layouts/footer/avatar1.svg"
              alt="作者のアイコン"
            />
            <a
              href="https://twitter.com/mikeanakida"
              class="text-sm text-left w-24"
            >
              @manaki
            </a>
          </a>
        </div>
        <!-- <div class="mt-2">
          <a href="#" class="flex justify-center items-center block space-x-2">
            <img
              src="@/assets/images/layouts/footer/avatar1.svg"
              alt="作者のアイコン"
            />
            <a href="https://twitter.com/zyungzyung" class="text-sm w-24">
              @zyung_zyung
            </a>
          </a>
        </div> -->
        <!-- <div>
          <a href="htpps://twitter.com/mikeanakida">
            <img
              src="@/assets/images/layouts/footer/twitter-color.svg"
              alt="manakiのtwitterアイコン"
              class="w-12"
            />
          </a>
        </div> -->
      </section>
    </section>
    <div class="mt-4 text-center text-gray-800">
      <small>&copy; hungrypenguin</small>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.l-footer {
  background-color: #f5f8fa;
}
</style>
