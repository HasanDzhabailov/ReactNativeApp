import {getAsyncStorage} from './AsyncStorage';
import {UserLoginIn} from '../UserLoginIn';
import {DataJSON} from '../DataJSON';

export function GetJsonSerializeUserAuth() {
  let userLogin = new UserLoginIn('', '', '');
  getAsyncStorage('Login').then(login => {
    login != null ? (userLogin.loginUser = login) : (userLogin.loginUser = '');
  });
  getAsyncStorage('Password').then(pass => {
    pass != null ? (userLogin.password = pass) : (userLogin.password = '');
  });
  getAsyncStorage('LoginIn').then(loginIn => {
    loginIn == 'true'
      ? (userLogin.loginIn = loginIn)
      : (userLogin.loginIn = 'false');
  });
  return userLogin;
}
// и т.к далее

}