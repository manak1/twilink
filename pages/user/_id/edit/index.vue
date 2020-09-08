<template>
  <div
    v-if="getUser"
    class="text-center relative px-5"
    style="padding-bottom: 160px"
  >
    <ul class="pt-4">
      <draggable
        v-model="ghostUrls"
        class="space-y-3"
        handle=".handle"
        animation="100"
      >
        <li v-for="link in ghostUrls" :key="link.id" class="blcok">
          <UiUrl :url-data="link" />
        </li>
      </draggable>
    </ul>
    <div class="fixed w-full text-right pr-5 container c-addButton">
      <UiButton text="URLを追加する" @clickEvent="edit = !edit" />
    </div>
    <transition
      enter-active-class="animated slideInUp c-animation__in"
      leave-active-class="animated c-animation__out"
    >
      <CreateModal v-if="edit" @close="edit = !edit" />
    </transition>
  </div>
</template>

<script>
import { userMapper } from '@/store/user'
import { loadedMapper } from '@/store/loaded'
import draggable from 'vuedraggable'
export default {
  layout: 'project',
  components: {
    draggable,
  },
  data() {
    return {
      ghostUrls: null,
      edit: false,
    }
  },
  computed: {
    ...userMapper.mapGetters(['getUser']),
    ...loadedMapper.mapGetters(['isLoaded']),
  },
  watch: {
    isLoaded() {
      this.ghostUrls = [...this.getUser.urls]
    },
  },
  mounted() {
    if (this.isLoaded) {
      this.ghostUrls = [...this.getUser.urls]
    }
  },

  methods: {
    ...userMapper.mapMutations(['addUrl']),
    ...userMapper.mapActions(['relogin']),
    addNewUrl() {
      this.addUrl()
      this.ghostUrls = [...this.getUser.urls]
    },
  },
}
</script>

<style scoped>
.c-addButton {
  bottom: 65px;
  left: 50%;
  transform: translateX(-50%);
}

.c-animation__in {
  -webkit-animation-name: fadeinup;
  animation-name: fadeIn;
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
}

.c-animation__out {
  -webkit-animation-name: fadeout;
  animation-name: fadeOut;
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
}
</style>
