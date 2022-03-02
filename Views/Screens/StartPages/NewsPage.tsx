import React from 'react';
import {TodoProps} from '../../Navigation/INavigator';
import {Text, View} from 'react-native';
import {TodoStateDefaultData} from '../../../Model/AppData/IMagazineState';
import StartPage from '../../Components/pages/StartPage';
import CarouselVacancyData from '../../../Model/CarouselData/CarouselVacancyData';
import CarouselNewsData from '../../../Model/CarouselData/CarouselNewsData';
import {EventHandlingScreen} from '../../../Controller/EventHandling/EventHandlingScreen';
export class NewsPage extends React.Component<TodoProps, TodoStateDefaultData> {
  constructor(props: TodoProps) {
    super(props);
    this.state = {DataJSON: []};
  }
  componentDidMount(): void {
    new EventHandlingScreen(this.props).GetUserList();
  }

  render(): React.ReactNode {
    return (
      <StartPage
        dataNewsCompany={CarouselNewsData}
        dataVacancy={CarouselVacancyData}
        _this={this}
      />
    );
  }
}
