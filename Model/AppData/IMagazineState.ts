export interface TodoStateLoginIn {
  LoginUser: string;
  Password: string;
  LoginIn: string;
  List: [];
  Loading: boolean;
}

export interface TodoStateDefaultData {
  DataJSON: [];
}
export interface TodoStateContactForm {
  LoginUser: string;
  Phone: string;
  Password: string;
}

export interface IFlatList {
  DataJSON: string | [];
  refreshing: boolean;
}

export interface TodoStateTasks {
  DataJSON: string | [];
  numberTaskGl: any;
  comment?: string;
  stateButton?: boolean;
  isFetching: boolean;
  _isMounted: boolean;
}
export interface TodoStateTasksMore {
  DataJSON: [];
  Login: string;
  numberTaskGl: any;
  comment: string;
  stateButton?: boolean;
  isFetching: boolean;
}
export interface TodoStateReportKpi {
  DataJSON: [];
  ReportKPI: string;
}
