export interface Userdata {
  name : string;
  email : string;
  password: string;
  repassword: string;
  phone : string;
}


export interface SignInDate {
  email : string;
  password: string;
}

export interface userToken {
  id: string
  name: string
  role: string
  iat: number
  exp: number
}

