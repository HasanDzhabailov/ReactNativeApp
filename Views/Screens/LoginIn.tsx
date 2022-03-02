import React from 'react';
import {TodoProps} from '../Navigation/INavigator';
import {EventHandlingScreen} from '../../Controller/EventHandling/EventHandlingScreen';
import {TodoStateLoginIn} from '../../Model/AppData/IMagazineState';
import {
  GetJsonSerializeAllUserList,
  GetJsonSerializeUserAuth,
} from '../../Model/AppData/GetJsonSerialize';
import LoginPageView from '../Components/pages/LoginPage';
import LoadingPage from '../Components/pages/LoadingPage';

let isMounted: boolean;
export class LoginIn extends React.Component<TodoProps, TodoStateLoginIn> {
  constructor(props: TodoProps) {
    super(props);
    this.state = {
      LoginUser: '',
      Password: '',
      LoginIn: '',
      List: [],
      Loading: true,
    };
  }
  componentWillUnmount(): void {
    isMounted = false;
    this.setState({});
  }
  requestUserList(): void {
    new EventHandlingScreen(this.props).GetUserList();
    setTimeout(() => {
      GetJsonSerializeAllUserList().then(data => {
        let parseObj = JSON.parse(data);

        this.setState({List: parseObj});
      });
    }, 2000);
  }
  componentDidMount() {
    new EventHandlingScreen(this.props).GetUserList();

    setTimeout(() => {
      GetJsonSerializeAllUserList()
        .then(data => {
          let parseObj = JSON.parse(data);

          this.setState({List: parseObj});
        })
        .catch(() => {
          this.requestUserList();
        });
    }, 1000);
    this.requestUserList();
    isMounted = true;
    if (isMounted) {
      let user = GetJsonSerializeUserAuth();
      setTimeout(() => {
        this.setState({LoginUser: user.loginUser});
        this.setState({Password: user.password});
      }, 300);

      new EventHandlingScreen(this.props).LoginInEvent();
      new EventHandlingScreen(this.props).GetAllData();
    }
    setTimeout(() => {
      this.setState({Loading: false});
    }, 4000);
  }
  render() {
    if (this.state.List.length == 0) {
      this.requestUserList();
      return <LoadingPage />;
    } else {
      return (
        <LoginPageView
          _this={this}
          login={this.state.LoginUser}
          password={this.state.Password}
        />
      );
    }
  }
}
