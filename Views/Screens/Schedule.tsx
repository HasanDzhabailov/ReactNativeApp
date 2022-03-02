import React, {Component} from 'react';
import {TodoProps} from '../Navigation/INavigator';
import {IFlatList} from '../../Model/AppData/IMagazineState';
import {EventHandlingScreen} from '../../Controller/EventHandling/EventHandlingScreen';
import {GetJsonSerializeSchedule} from '../../Model/AppData/GetJsonSerialize';
import FlatListCustom from '../Components/elements/CustomElement/FlatListCustom';
import renderItemSchedule from '../Components/elements/Schedule/renderItemSchedule';
import {IRefreshScreen} from '../../Utils/IRefreshScreen';
import {View} from 'react-native';
import LoadingPage from '../Components/pages/LoadingPage';
let isMounted: boolean;
export class Schedule
  extends Component<TodoProps, IFlatList>
  implements IRefreshScreen
{
  constructor(props: TodoProps) {
    super(props);
    this.state = {
      DataJSON: [],
      refreshing: false,
    };
  }
  onRef(): void {
    new EventHandlingScreen(this.props).GetAllData();
    this.setState({refreshing: true}, () => {
      setTimeout(() => {
        this.fetchData();
      }, 3000);
    });
  }
  fetchData(): void {
    new EventHandlingScreen(this.props).GetAllData();
    setTimeout(() => {
      GetJsonSerializeSchedule().then(data => {
        let parseObj = JSON.parse(data);
        this.setState({DataJSON: parseObj});
        this.setState({refreshing: false});
      });
    }, 2000);
  }

  componentDidMount(): void {
    isMounted = true;
    if(isMounted) {
      new EventHandlingScreen(this.props).GetAllData();
      setTimeout(() => {
        GetJsonSerializeSchedule().then(data => {
          let parseObj = JSON.parse(data);
          this.setState({DataJSON: parseObj});
        });
      }, 3000);
    }
  }
  componentWillUnmount(): void {
    isMounted = false;
    this.setState({});
  }
  render(): React.ReactNode {
    if (this.state.DataJSON.length == 0) {
      return <LoadingPage />;
    } else {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FlatListCustom
            data={this.state.DataJSON}
            renderItem={renderItemSchedule}
            extraData={this.state.DataJSON}
            refreshing={this.state.refreshing}
            onRefresh={() => this.onRef()}
          />
        </View>
      );
    }
  }
}
