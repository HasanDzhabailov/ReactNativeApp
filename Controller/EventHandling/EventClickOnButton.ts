import {
  CheckLoginIn,
  GetTask,
  GetTaskMoreDetails,
  SendCommentInTask,
} from '../../Model/API/WebManager';
import {
  getAsyncStorage,
  setAsyncStorage,
} from '../../Model/AppData/AsyncStorage';
import {GetJsonSerializeUserAuth} from '../../Model/AppData/GetJsonSerialize';
import {EventHandlingScreen} from './EventHandlingScreen';
import {Alert} from 'react-native';

/** Авторизация пользователя Начало */
function saveAuthDataUser(user: string, password: string) {
  try {
    CheckLoginIn(user, password);
    setAsyncStorage('Login', user);
    setAsyncStorage('Password', password);
  } catch (e) {}
}
export function enterPrivateOffice(this: any) {
  saveAuthDataUser(this.state.LoginUser, this.state.Password);
  setTimeout(() => {
    let user = GetJsonSerializeUserAuth();
    setTimeout(() => {
      this.setState({LoginIn: user.loginIn});
      if (this.state.LoginIn == 'true') {
        new EventHandlingScreen(this.props).GetAllData();
        let {navigation} = this.props;
        navigation.navigate('Личный Кабинет');
      }
    }, 300);
  }, 500);
}
/** Авторизация пользователя Конец */

/** Задачник начало */
export function enterOnTask(numberTask: string) {
  getAsyncStorage('Login')
    .then(login => {
      if (login != null) {
        GetTaskMoreDetails(login, numberTask);
        setTimeout(() => {
          GetTaskMoreDetails(login, numberTask);
          GetTask(login);
        }, 200);
      } else {
        Alert.alert(
          'Ошибка обработки данных',
          'Повторите снова, возникла непредвиденная ошибка ',
        );
      }
    })
    .catch(error => enterOnTask(numberTask));
}
export function enterSendComment(
  taskNumber: string,
  user: string,
  comment: string,
) {
  SendCommentInTask(taskNumber, user, comment);
}
/** Задачник конец*/
export function enterInLkStartPage(this: any) {
  new EventHandlingScreen(this.props).GetUserList();
  let {navigation} = this.props;
  navigation.navigate('Вход');
}

export function enterInEndStartPage(
  this: any,
  login: string,
  phone: string,
  password: string,
) {
  if (login == '' || phone == '' || password == '') {
    Alert.alert('Ошибка валидации', 'Заполните все поля, пожалуйста!');
  } else {
    let {navigation} = this.props;
    navigation.navigate('Вакансия');
  }
}
