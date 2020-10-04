<template>
  <div class="c-noUrl text-sm mt-6">
    <font-awesome-icon icon="unlink" style="font-size: 30px" />
    <h2 class="mt-3">作成されたURLはまだありません</h2>
    <p class="c-noUrl__text text-xs mt-1 inline-block">
      ボタンをクリックして、URLを追加しましょう。
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.c-noUrl {
  color: #bbb;

  &__icon {
    background-color: #bbb;
    opacity: 0.8;
  }

  &__text {
    position: relative;
    &::before {
      position: absolute;
      top: -1px;
      left: -17px;
      content: '';
      width: 16px;
      height: 16px;
      background-image: url('~assets/images/pages/edit/button.png');
      background-size: contain;
      background-repeat: no-repeat;
      display: inline-block;
    }
  }
}
</style>
