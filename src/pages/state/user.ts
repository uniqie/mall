
export enum genderType {
  man = 0,
  woman = 1
}

export class UserType {
  //头像链接
  avatarUrl: string;
  //城市
  city: string;
  //国家
  country: string;
  //性别
  gender: genderType;
  //语言
  language: string;
  //昵称（用户名）
  nickName: string;
  //省份
  province: string;
  token: string;
  openId: string;

}


class User implements UserType {
  avatarUrl: string;
  city: string;
  country: string;
  gender: genderType;
  language: string;
  nickName: string;
  openId: string;
  province: string;
  token: string;

  get isLogin() {
    return !!this.openId;
  }
}

const user = new User();

export default user;

