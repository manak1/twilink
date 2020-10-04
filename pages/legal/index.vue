<template>
  <section class="p-legal px-4 pb-8">
    <div class="p-legal__box container mx-auto bg-white pb-8">
      <div class="p-legal__legals" v-html="renderMd"></div>
      <p class="text-right mt-8 p-legal__end">以上</p>
    </div>
  </section>
</template>

<script>
import legal from '@/documents/legal/legal.md'
export default {
  computed: {
    renderMd() {
      return legal
    },
  },
}
</script>

// eslint-disable-next-line vue-scoped-css/require-scoped
<style lang="scss">
.p-legal {
  &__legals {
    p {
      font-size: 13px;
      margin-top: 20px;
      line-height: 19px;
      + ol {
        padding-left: 20px;
      }
    }
    h2 {
      font-size: 24px;
      line-height: 45px;
      font-weight: bold;
    }

    h3 {
      margin-top: 35px;
      font-size: 18px;
      line-height: 27px;
      font-weight: bold;
    }

    li {
      margin-top: 10px;
      font-size: 13px;
      line-height: 19px;
      font-weight: middle;

      ol {
        padding-left: 20px;
      }
    }
  }

  &__end {
    font-size: 14px;
  }
}
</style>
