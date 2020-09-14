export { }
declare global {
  interface Url {
    urls: Object[],
    text: string
    url:string
  }

  interface User {
    name: string
    icon: string
    id:string
    urls: Url[]
    color: string
    template: string
  }

  interface AuthUser {
    user: {
      displayName:string,
      photoURL:string,
      uid:string
    }
    additionalUserInfo: {
      username:string
    }

  }



}

