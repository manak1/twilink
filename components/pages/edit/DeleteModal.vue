<template>
  <UiModalSmall>
    <section class="bg-white rounded-lg w-full c-deleteModal">
      <h2 class="font-bold text-xl">URLを削除しますか？</h2>
      <p class="block mt-3">
        この操作は取り消せません。<br />
        削除してもよろしいですか？
      </p>
      <div class="flex justify-center mt-4 space-x-3">
        <UiButtonRound cancel @click="$emit('cancel')">
          キャンセル
        </UiButtonRound>
        <UiButtonRound delete @click="$emit('delete')">削除</UiButtonRound>
      </div>
    </section>
  </UiModalSmall>
</template>
<script>
export default {}
</script>

<style scoped>
.c-deleteModal {
  padding: 30px 20px;
}
</style>
