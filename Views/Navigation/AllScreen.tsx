import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginIn} from '../Screens/LoginIn';
import {PrivateOffice} from '../Screens/PrivateOffice';
import BottomNavigation from './BottomNavigation';
import {Schedule} from '../Screens/Schedule';
import {Tasks} from '../Screens/TasksPages/Tasks';
import {ReportsKPI} from '../Screens/ReportsKPI/ReportsKPI';
import {NewsPage} from '../Screens/StartPages/NewsPage';
import {ContactForm} from '../Screens/StartPages/ContactForm';
import {FinishForm} from '../Screens/StartPages/FinishForm';
import {Lightning} from '../Screens/Lightning';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {TaskMoreInfo} from '../Screens/TasksPages/TaskMoreInfo';
const Stack = createStackNavigator();

const AllScreen = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName={'Главная'}>
        <Stack.Screen
          name="Главная"
          component={NewsPage}
          initialParams={{}}
          options={{
            title: 'Главная',
            headerTitleStyle: {textAlign: 'center', color: '#fff'},
          }}
        />
        <Stack.Screen
          name="Анкета"
          component={ContactForm}
          initialParams={{}}
        />
        <Stack.Screen
          name="Вакансия"
          component={FinishForm}
          initialParams={{}}
        />
        <Stack.Screen
          name="Вход"
          component={LoginIn}
          initialParams={{}}
          options={{
            title: 'Вход',
            headerTitleStyle: {textAlign: 'center', color: '#fff'},
          }}
        />
        <Stack.Screen
          name="Профиль"
          component={PrivateOffice}
          initialParams={{}}
        />
        <Stack.Screen name="График" component={Schedule} initialParams={{}} />
        <Stack.Screen name="Задачи" component={Tasks} initialParams={{}} />
        <Stack.Screen
          name="К задачам"
          component={TaskMoreInfo}
          initialParams={{}}
        />
        <Stack.Screen
          name="Показатели KPI"
          component={ReportsKPI}
          initialParams={{}}
        />
        <Stack.Screen name="Молния" component={Lightning} initialParams={{}} />
        <Stack.Screen
          name="Личный Кабинет"
          component={BottomNavigation}
          initialParams={{}}
          options={{
            title: 'Личный Кабинет',
            headerTitleStyle: {textAlign: 'center', color: '#fff',  width:252},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AllScreen;
