import React from 'react';
import {TodoProps} from '../../Navigation/INavigator';
import {Text, View} from 'react-native';
import {TodoStateContactForm} from '../../../Model/AppData/IMagazineState';
import BlockContactForm from '../../Components/pages/BlockContactForm';
export class ContactForm extends React.Component<
  TodoProps,
  TodoStateContactForm
> {
  constructor(props: TodoProps) {
    super(props);
    this.state = {LoginUser: '', Phone: '', Password: ''};
  }
  render(): React.ReactNode {
    return (
      <BlockContactForm
        _this={this}
        login={this.state.LoginUser}
        phone={this.state.Phone}
        password={this.state.Password}
      />
    );
  }
}
