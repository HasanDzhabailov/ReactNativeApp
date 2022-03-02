import React from 'react';
import {TodoProps} from '../../Navigation/INavigator';
import {TodoStateTasks} from '../../../Model/AppData/IMagazineState';
import {EventHandlingScreen} from '../../../Controller/EventHandling/EventHandlingScreen';
import {GetJsonSerializeTask} from '../../../Model/AppData/GetJsonSerialize';
import FlatListCustom from '../../Components/elements/CustomElement/FlatListCustom';
import renderItemTasks from '../../Components/elements/TaskPage/renderItemTasks';
import {IRefreshScreen} from '../../../Utils/IRefreshScreen';
import {Alert} from 'react-native';
let isMounted: boolean;
export class Tasks
  extends React.Component<TodoProps, TodoStateTasks>
  implements IRefreshScreen
{
  constructor(props: TodoProps) {
    super(props);
    this.state = {
      DataJSON: '',
      numberTaskGl: '',
      isFetching: false,
      _isMounted: true,
    };
  }

  onRef(): void {
    console.log('test ref');
    new EventHandlingScreen(this.props).GetAllData();
    this.setState({isFetching: true}, () => {
      setTimeout(() => {
        this.fetchData();
      }, 3000);
    });
  }
  fetchData(): void {
    new EventHandlingScreen(this.props).GetAllData();
    setTimeout(() => {
      GetJsonSerializeTask().then(data => {
        let parseObj = JSON.parse(data);
        console.log(parseObj);
        this.setState({DataJSON: parseObj});
        this.setState({isFetching: false});
      });
    }, 2000);
  }
  componentDidUpdate() {
    if (isMounted == true) {
      setTimeout(() => {
        this.componentDidMount();
      }, 5000);
    }
  }

  componentWillUnmount(): void {
    isMounted = false;
    console.log(isMounted);
    this.setState({});
  }

  componentDidMount(): void {
    isMounted = true;
    console.log(isMounted);
    if (isMounted) {
      new EventHandlingScreen(this.props).GetAllData();
      setTimeout(() => {
        GetJsonSerializeTask().then(data => {
          let parseObj = JSON.parse(data);
          this.setState({DataJSON: parseObj});
        });
      }, 3000);
    }
  }

  render(): React.ReactNode {
    return (
      <FlatListCustom
        data={this.state.DataJSON}
        renderItem={renderItemTasks.bind(this, this.props)}
        extraData={this.state.DataJSON}
        refreshing={this.state.isFetching}
        onRefresh={() => this.onRef()}
      />
    );
  }
}
