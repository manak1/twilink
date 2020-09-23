<template>
  <div class="container mx-auto pb-12">
    <c-intro />
    <c-about />
    <c-cta />
  </div>
</template>

<script>
import CIntro from '@/pages/-CIntro'
import CAbout from '@/pages/-CAbout'
import CCta from '@/pages/-CCta'
export default {
  components: {
    CIntro,
    CAbout,
    CCta,
  },
}
</script>
