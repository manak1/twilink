<template>
  <footer class="l-footer pt-8 pb-16">
    <section class="container px-5 mx-auto text-center">
      <h2 class="font-bold text-xl">メニュー</h2>
      <ul class="mt-4 mx-auto space-y-3 text-left list-disc pl-32">
        <li>
          <UiLink to="/legal"> 利用規約 </UiLink>
        </li>
        <li>
          <UiLink button @clickEvent="login"> ログイン </UiLink>
        </li>
        <li>
          <UiLink href="https://twitter.com/twilink_app"> 公式Twitter </UiLink>
        </li>
      </ul>
      <section>
        <h3 class="mt-8 font-bold text-xl">作者</h3>
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
                <span class="text-sm"> manaki </span>
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
                <span class="text-sm"> 146 </span>
              </div>
              <div class="l-footer__messages relative">
                <p class="text-sm l-footer__message text-left ml-2">
                  ゆるくデザインやってます！！<br />
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </section>
    <div class="mt-4 text-center text-gray-800">
      <small>&copy; hungrypenguin</small>
    </div>
  </footer>
</template>

<script>
import { userMapper } from '@/store/user'
export default {
  methods: {
    ...userMapper.mapActions(['login']),
  },
}
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
    top: -10px;
  }
}
</style>
