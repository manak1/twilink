<template>
  <footer class="l-footer pt-8 pb-16">
    <section class="container px-5 mx-auto text-center">
      <h2 class="font-bold text-xl">About</h2>
      <div class="mt-4 flex space-x-2 justify-center">
        <nuxt-link to="/terms">利用規約</nuxt-link>
        <span>/</span>
        <a href="#">公式ツイッター</a>
      </div>
      <section>
        <h3 class="mt-8 font-bold">開発者</h3>
        <div class="flex flex-col justify-center items-center mt-4 space-y-3">
          <div class="mt-2">
            <a
              href="https://twitter.com/mikeanakida"
              class="flex justify-between items-center block space-x-6"
            >
              <div class="text-center">
                <img
                  src="/images/intro/penguin.svg"
                  class="rounded-full mx-auto border bg-white w-12"
                  alt="作者のアイコン"
                />
                <a
                  href="https://twitter.com/mikeanakida"
                  class="text-sm text-left"
                >
                  manaki
                </a>
              </div>
              <div class="l-footer__messages relative">
                <p class="text-sm l-footer__message text-left ml-2">
                  デザイン、開発を担当しました!<br />
                  インターン先探してます！！
                </p>
              </div>
            </a>
          </div>
          <div class="mt-2">
            <a
              href="https://twitter.com/mikeanakida"
              class="flex justify-between items-center block space-x-6"
            >
              <div class="text-center">
                <img
                  src="/images/intro/zyung.jpg"
                  class="rounded-full mx-auto border bg-white w-12"
                  alt="作者のアイコン"
                  style="min-width: 48px"
                />
                <a
                  href="https://twitter.com/mikeanakida"
                  class="text-sm text-left"
                >
                  146
                </a>
              </div>
              <div class="l-footer__messages relative">
                <p class="text-sm l-footer__message text-left ml-2">
                  デザイン、開発を担当しました!<br />
                  インターン先探してます！！
                </p>
              </div>
            </a>
          </div>
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

<style scoped lang="scss">
.l-footer {
  background-color: #f5f8fa;

  &__messages {
    &::before {
      position: absolute;
      top: 15px;
      left: -20px;
      transform: rotate(15deg);
      content: '';
      width: 13px;
      height: 2px;
      background-color: #555;
      display: block;
    }
    &::after {
      position: absolute;
      top: -5px;
      left: -20px;
      transform: rotate(-25deg);
      content: '';
      width: 18px;
      height: 2px;
      background-color: #555;
      display: block;
    }
  }

  &__message {
    position: relative;
    top: -15px;
  }
}
</style>
