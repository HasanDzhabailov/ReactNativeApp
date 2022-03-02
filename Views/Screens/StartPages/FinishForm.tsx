import React from 'react';
import {TodoProps} from '../../Navigation/INavigator';
import {Text, View, TouchableOpacity} from 'react-native';
import {TodoStateDefaultData} from '../../../Model/AppData/IMagazineState';
import ExtendedButton from '../../Components/elements/CustomElement/ExtendedButton';
import ExtendedButtonStyle from '../../Style/elementsStyle/ExtendedButtonStyle';
import globalStyles from '../../Style/globalStyles';
import styleLoginPage from "../../Style/Pages/styleLoginPage";
export class FinishForm extends React.Component<
  TodoProps,
  TodoStateDefaultData
> {
  constructor(props: TodoProps) {
    super(props);
    this.state = {DataJSON: []};
  }
  render(): React.ReactNode {
    return (
      <View style={styleLoginPage.container}>
        <Text
          style={[
            {textAlign: 'center', fontSize: 46},
            globalStyles.fontsColorDefault,
            globalStyles.fontsFamilyExtrabold,
          ]}>
          СПАСИБО ЗА ОТКЛИК!
        </Text>
        <Text
          style={[
            {textAlign: 'center', fontSize: 22},
            globalStyles.fontsColorDefault,
            globalStyles.fontsFamilyExtrabold,
          ]}>
          Ваша заявка на рассмотрении. C вами свяжутся в течении нескольких
          дней!
        </Text>
        <Text
          style={[
            {textAlign: 'center', fontSize: 16,},
            globalStyles.fontsColorDefault,
            globalStyles.fontsFamilyExtrabold,
          ]}>
          (В качестве логина используйте ваше ФИО)
        </Text>
        <ExtendedButton
          text={'НА ГЛАВНУЮ'}
          style={ExtendedButtonStyle.btnDefault}
          _onClick={() => {
            let {navigation} = this.props;
            navigation.navigate('Главная');
          }}
        />
      </View>
    );
  }
}
