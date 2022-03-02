import React from 'react';
import {TodoProps} from '../Navigation/INavigator';
import {TodoStateDefaultData} from '../../Model/AppData/IMagazineState';
import LightningPage from '../Components/pages/LightningPage';
import CarouselVacancyData from '../../Model/CarouselData/CarouselVacancyData';
import {GetJsonSerializeNewsCompany} from '../../Model/AppData/GetJsonSerialize';
import {EventHandlingScreen} from '../../Controller/EventHandling/EventHandlingScreen';
import LoadingPage from '../Components/pages/LoadingPage';
let isMounted: boolean;
export class Lightning extends React.Component<
  TodoProps,
  TodoStateDefaultData
> {
  constructor(props: TodoProps) {
    super(props);
    this.state = {DataJSON: []};
  }
  componentDidMount(): void {
    isMounted = true;
    if (isMounted) {
      new EventHandlingScreen(this.props).GetAllData();
      setTimeout(() => {
        GetJsonSerializeNewsCompany().then(data => {
          let parseObj = JSON.parse(data);
          this.setState({DataJSON: parseObj});
        });
      }, 3000);
    }
  }

  render(): React.ReactNode {
    if (this.state.DataJSON.length == 0) {
      return <LoadingPage />;
    }
    return (
      <LightningPage
        dataNewsCompany={this.state.DataJSON}
        dataVacancy={CarouselVacancyData}
        _this={this}
      />
    );
  }
}
