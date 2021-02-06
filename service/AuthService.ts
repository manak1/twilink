export class AuthService {
  protected $fb: any

  constructor($fb: any) {
    this.$fb = $fb
  }

  async login(): Promise<AuthUser> {
    const provider = new this.$fb.auth.TwitterAuthProvider()
    const result = await this.$fb.auth().signInWithPopup(provider)
    return result
  }
  async logout(): Promise<void> {
    this.$fb.auth().signOut()
  }

  async deleteAccount(uid: string): Promise<void> {
    await this.$fb.firestore().collection('users').doc(uid).delete()
  }

  async createNewAccount(user: AuthUser) {
    const doc = await this.$fb.firestore().collection('users').doc(user.user.uid).get()
    if (doc.exists) {
      return doc.data()
    }
    else {
      const userData: User = {
        name: user.user.displayName,
        id: user.additionalUserInfo.username,
        icon: user.user.photoURL,
        color: 'rgba(29,162,241,1)',
        template: 'l-simple',
        urls: [] as any
      }
      await this.$fb.firestore().collection('users').doc(user.user.uid).set({
        ...userData,
        uid: user.user.uid
      })
      return userData
    }
  }

  /* uidでユーザーを取得 */
  async getUser(uid: string): Promise<User> {
    const doc = await this.$fb.firestore().collection('users').doc(uid).get()
    return doc.data()
  }

  async getUserById(id: string): Promise<User> {
    const result = await this.$fb.firestore().collection('users').where('id', "==", id).get()
    const userData = result.docs.map((d: any) => {
      return {
        ...d.data()
      }
    })
    return userData[0]
  }

  async updateUser(uid: string, user: User): Promise<void> {
    this.$fb.firestore().collection('users').doc(uid).update({
      ...user
    })
  }

  async updateButtonData(uid: string, urls: any) {
    await this.$fb.firestore().collection('users').doc(uid).update({
      "urls": urls
    })
  }

  async updateColor(uid: string, color: string) {
    await this.$fb.firestore().collection('users').doc(uid).update({
      "color": color
    })
  }

  async updateTemplate(uid: string, template: string) {
    await this.$fb.firestore().collection('users').doc(uid).update({
      "template": template
    })
  }

  async updateIcon(uid: string, iconUrl: string) {
    await this.$fb.firestore().collection('users').doc(uid).update({
      'icon': iconUrl
    })
  }
}

