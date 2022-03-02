import {getAsyncStorage} from '../../Model/AppData/AsyncStorage';
import {TodoProps} from '../../Views/Navigation/INavigator';
import React from 'react';
import {
  GetAllUserList,
  GetDataUser,
  GetKpi,
  GetNewsCompany,
  GetSchedule,
  GetTask,
  GetTaskMoreDetails,
} from '../../Model/API/WebManager';
import {Alert} from 'react-native';
import {TodoStateDefaultData} from '../../Model/AppData/IMagazineState';

export class EventHandlingScreen extends React.Component<
  TodoProps,
  TodoStateDefaultData,
  {navigation: string}
> {
  constructor(props: TodoProps) {
    super(props);
  }

  LoginInEvent() {
    let auth: string | null = '';
    setTimeout(() => {
      getAsyncStorage('LoginIn').then(loginIn => {
        auth = loginIn;
        if (auth == 'true') {
          let {navigation} = this.props;
          setTimeout(() => {
            navigation.navigate('Личный Кабинет');
          }, 1000);
        }
      });
    }, 300);
  }

  GetAllData() {
    getAsyncStorage('Login')
      .then(login => {
        if (login != undefined) {
          GetNewsCompany();
          GetDataUser(login);
          GetSchedule(login);
          GetTask(login);
          GetKpi(login);
        }
      })
      .catch(e => {
        Alert.alert(
          'ОШИБКА СЕТИ',
          'Проблемы с соединением попробуйте позже' + e,
        );
      });
  }
  GetUserList() {
    GetAllUserList();
  }
}
