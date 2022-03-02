import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {PrivateOffice} from '../Screens/PrivateOffice';
import {Tasks} from '../Screens/TasksPages/Tasks';
import {Schedule} from '../Screens/Schedule';
import {ReportsKPI} from '../Screens/ReportsKPI/ReportsKPI';
import {Lightning} from '../Screens/Lightning';
import globalStyles from '../Style/globalStyles';
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={'Молния'}
      tabBarOptions={{
        style: {height: 50, backgroundColor: '#000'},
        labelStyle: [globalStyles.fontsFamilyLight, {fontSize: 10, bottom: 3}],
      }}>
      <Tab.Screen
        name={'Молния'}
        component={Lightning}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Молния',
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../Assets/img/icon10.png')
                  : require('../../Assets/img/icon9.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Кабинет"
        component={PrivateOffice}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Кабинет',
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../Assets/img/icon2.png')
                  : require('../../Assets/img/icon1.png')
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Задачи"
        component={Tasks}
        options={{
          unmountOnBlur: true,
          tabBarBadgeStyle: [
            globalStyles.fontsColorDefault,
            globalStyles.fontsFamilyExtrabold,
          ],
          tabBarLabel: 'Задачи',
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../Assets/img/icon6.png')
                  : require('../../Assets/img/icon5.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="График"
        component={Schedule}
        options={{
          tabBarLabel: 'График',
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../Assets/img/icon4.png')
                  : require('../../Assets/img/icon3.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Отчет'}
        component={ReportsKPI}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Отчет',
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('../../Assets/img/icon8.png')
                  : require('../../Assets/img/icon7.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
