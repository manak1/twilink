 export class AuthService {
  protected $fb:any

  constructor($fb:any) {
    this.$fb = $fb
  }

  async login(): Promise<AuthUser> {
    const provider = new this.$fb.auth.TwitterAuthProvider()
    const result = await this.$fb.auth().signInWithPopup(provider)
    return result
  }
  async logout():Promise<void> {
    this.$fb.auth().signOut()
  }

  async createNewAccount(user: AuthUser) {
    const userData:User = {
      name: user.user.displayName,
      id:user.additionalUserInfo.username,
      icon: user.user.photoURL,
      urls: [
        {
          id: 1,
          text:"testtest",
          url:'https://hellomanaki.com'
        }
      ]as any
    }
    await this.$fb.firestore().collection('users').doc(user.user.uid).set({
      ...userData
    })
    return userData
  }

  /* uidでユーザーを取得 */
  async getUser(uid: string): Promise<User> {
    const doc = await this.$fb.firestore().collection('users').doc(uid).get()
    return doc.data()
  }

  async getUserById(id:string):Promise<User> {
    const result = await this.$fb.firestore().collection('users').where('id',"==",id).get()
    const userData = result.docs.map((d:any)=>{
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
}
 
