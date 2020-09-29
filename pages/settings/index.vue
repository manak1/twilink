<template>
  <div v-if="getUser" class="container mx-auto text-center px-5 pt-4">
    <div>
      <img
        :src="getImage"
        class="h-24 mx-auto rounded-full bg-white border"
        :alt="`${getUser.name}のアイコン`"
      />
      <hr class="mt-4" />
    </div>
    <div class="flex flex-col justify-center items-center space-y-8 mt-6">
      <UiButtonOutline @clickEvent="logout">ログアウト</UiButtonOutline>
      <UiButtonOutline type="danger" @clickEvent="openModal">
        アカウントを削除
      </UiButtonOutline>
    </div>
    <transition
      enter-active-class="animated c-fade__in"
      leave-active-class="animated c-fade__out"
    >
      <DeleteModal v-if="modal" target="アカウント" @cancel="modal = false" />
    </transition>
  </div>
</template>

<script>
import { userMapper } from '@/store/user'
import DeleteModal from '@/components/pages/edit/DeleteModal'
import { AuthService } from '@/service/AuthService'
export default {
  components: {
    DeleteModal,
  },
  data() {
    return {
      modal: false,
    }
  },
  computed: {
    ...userMapper.mapGetters(['getUser']),
    getImage() {
      return this.getUser.icon.replace('_normal', '')
    },
  },
  mounted() {
    if (!this.getUser) {
      this.$router.push('/')
    }
  },
  methods: {
    ...userMapper.mapActions(['logout']),
    openModal() {
      this.modal = true
    },
    async deleteAccount() {
      const authInstance = new AuthService(this.$fb)
      await authInstance.deleteAccount(this.getUser.uid)
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.c-fade__in {
  -webkit-animation-name: fadein;
  animation-name: fadeIn;
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
}

.c-fade__out {
  -webkit-animation-name: fadeout;
  animation-name: fadeOut;
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
}
.c-button {
  &__logout {
    border: 2px solid;
    border-color: #1ea1f1;
    color: #1ea1f1;
  }
}
</style>
