import React from 'react';
import {TodoProps} from '../Navigation/INavigator';
import {IFlatList} from '../../Model/AppData/IMagazineState';
import {IRefreshScreen} from '../../Utils/IRefreshScreen';
import {EventHandlingScreen} from '../../Controller/EventHandling/EventHandlingScreen';
import {GetJsonSerializeDataUser} from '../../Model/AppData/GetJsonSerialize';

import FlatListCustom from '../Components/elements/CustomElement/FlatListCustom';
import renderItemPrivateOffice from '../Components/elements/PrivateOffice/renderItmePrivateOffice';
let isMounted: boolean;
export class PrivateOffice
  extends React.Component<TodoProps, IFlatList>
  implements IRefreshScreen
{
  constructor(props: TodoProps) {
    super(props);
    this.state = {DataJSON: [], refreshing: false};
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
      GetJsonSerializeDataUser().then(data => {
        let parseObj = JSON.parse(data);
        this.setState({DataJSON: parseObj});
        this.setState({refreshing: false});
      });
    }, 2000);
  }
  componentDidMount(): void {
    isMounted = true;
    if (isMounted) {
      new EventHandlingScreen(this.props).GetAllData();
      setTimeout(() => {
        GetJsonSerializeDataUser().then(data => {
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
    return (
      <FlatListCustom
        data={this.state.DataJSON}
        renderItem={renderItemPrivateOffice}
        extraData={this.state.DataJSON}
        refreshing={this.state.refreshing}
        onRefresh={this.onRef.bind(this)}
      />
    );
  }
}
