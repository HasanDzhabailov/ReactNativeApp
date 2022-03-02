import {NavigationScreenProp} from 'react-navigation';

export interface Params {
  myParam: string;
}

export interface TodoProps {
  navigation: NavigationScreenProp<Params>;
}
