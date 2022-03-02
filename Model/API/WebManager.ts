import {HTTPRequest} from './HTTPRequest';
import {Alert} from 'react-native';
import {setAsyncStorage} from '../AppData/AsyncStorage';
const timeout: number = 3000;

export function RequestGet(param: string) {
  let response = new HTTPRequest();
  setTimeout(() => {
    response
      .getRequest('methodUrl', '?param=' + param)
      .then(() => setAsyncStorage('DataUser', response.jsonData))
      .catch((error) => error);
  }, timeout);
}
export function RequestPost(user: string, phone: string, password: string) {
  let response = new HTTPRequest();
  let content: object = {
    User: user,
    phone: phone,
    Password: password,
  };
  response
    .postRequest('SendContactForm', content)
    .catch(e => console.log(e + ' SendContactForm'));
}



