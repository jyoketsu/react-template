export interface User {
  _key: string;
  token: string;
  mobile: string;
  mobileArea: string;
  profile: Profile;
  right: number;
}

interface Profile {
  avatar: string;
  trueName: string;
  nickName: string;
  email: string;
}
