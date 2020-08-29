export { }
declare global {
  interface Url {
    url: string,
    text: string
  }

  interface User {
    name: string,
    icon: string,
    id:string
    urls: Url[]
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

