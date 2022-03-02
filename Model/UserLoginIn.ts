export class UserLoginIn {
  loginUser: string;
  password: string;
  loginIn: string;
  constructor(user: string, password: string, loginIn: string) {
    this.loginUser = user;
    this.password = password;
    this.loginIn = loginIn;
  }
}
