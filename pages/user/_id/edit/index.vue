<template>
  <div v-if="getUser" class="text-center px-5" style="padding-bottom: 160px">
    <ul class="pt-4">
      <draggable
        v-model="ghostUrls"
        class="space-y-3"
        handle=".handle"
        animation="100"
        @change="orderButtonData()"
      >
        <li v-for="(link, index) in ghostUrls" :key="link.id" class="blcok">
          <UiUrl
            :url-data="link"
            :index="index"
            @edit="openEditModal(index)"
            @delete="openDeleteModal(index)"
          />
        </li>
      </draggable>
    </ul>
    <div class="fixed w-full text-right pr-5 container c-addButton">
      <UiButton
        text="URLを追加する"
        :style="`background-color:${getUser.color}`"
        @clickEvent="edit = !edit"
      />
    </div>
    <transition
      enter-active-class="animated c-fade__in"
      leave-active-class="animated c-fade__out"
    >
      <DeleteModal
        v-if="deleteModal"
        @cancel="deleteModal = !deleteModal"
        @delete="deleteButton"
      />
    </transition>
    <transition
      enter-active-class="animated slideInUp c-animation__in"
      leave-active-class="animated c-animation__out"
    >
      <CreateModal
        v-if="edit"
        :mode="mode"
        :button-data="buttonData"
        @close="closeModal"
        @updateButtonData="updateButtonData"
        @addButtonData="addButtonData"
      />
    </transition>
  </div>
</template>

<script>
import { userMapper } from '@/store/user'
import { loadedMapper } from '@/store/loaded'
import { AuthService } from '@/service/AuthService'
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
      deleteModal: false,
      mode: 'create',
      index: null,
      buttonData: {
        url: '',
        text: '',
        id: this.generateRandomId(),
        options: {
          visible: true,
        },
      },
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
    this.initButtonData()
    if (this.isLoaded) {
      this.ghostUrls = [...this.getUser.urls]
    }
  },

  methods: {
    ...userMapper.mapMutations(['addUrl', 'updateUrls']),
    ...userMapper.mapActions(['relogin']),

    initButtonData() {
      this.buttonData = {
        url: '',
        text: '',
        id: this.generateRandomId(),
        options: {
          visible: true,
        },
      }
    },

    generateRandomId() {
      return '_' + Math.random().toString(36).substr(2, 9)
    },

    async orderButtonData() {
      const updatedUrls = [...this.ghostUrls]
      this.updateUrls(updatedUrls)
      const authInstance = new AuthService(this.$fb)
      await authInstance.updateButtonData(this.getUser.uid, updatedUrls)
    },

    async updateButtonData(buttonData) {
      this.ghostUrls[this.index] = buttonData
      const updatedUrls = [...this.ghostUrls]
      const autnInstance = new AuthService(this.$fb)
      this.updateUrls(updatedUrls)
      await autnInstance.updateButtonData(this.getUser.uid, updatedUrls)
      this.edit = false
      this.index = null
      this.initButtonData()
    },

    async addButtonData(buttonData) {
      this.ghostUrls.push(buttonData)
      const updatedUrls = [...this.ghostUrls]
      const authInstance = new AuthService(this.$fb)
      await authInstance.updateButtonData(this.getUser.uid, updatedUrls)
      this.updateUrls(updatedUrls)
      this.edit = false
    },

    openDeleteModal(index) {
      this.index = index
      this.deleteModal = true
    },

    openEditModal(index) {
      this.buttonData = this.ghostUrls[index]
      this.index = index
      this.mode = 'edit'
      this.edit = true
    },

    closeModal() {
      this.initButtonData()
      this.edit = false
    },

    async deleteButton() {
      this.ghostUrls.splice(this.index, 1)
      const updatedUrls = [...this.ghostUrls]
      const authInstance = new AuthService(this.$fb)
      this.updateUrls(updatedUrls)
      authInstance.updateButtonData(this.getUser.uid, updatedUrls)
      this.index = null
      this.deleteModal = false
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
  animation-name: fadeInUp;
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
}

.c-animation__out {
  -webkit-animation-name: fadeoutdown;
  animation-name: fadeOutDown;
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
}

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
</style>
