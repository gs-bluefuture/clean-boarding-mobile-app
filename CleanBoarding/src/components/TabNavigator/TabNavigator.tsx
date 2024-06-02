// TabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Portal from '../../screens/Portal';
import DocumentationPage from '../../screens/Documents';
import Profile from '../../screens/Profile';
import TabBarIconComponent from './TabBarIcon';
import {tabBarOptions} from './style';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({focused}) => (
        <TabBarIconComponent routeName={route.name} focused={focused} />
      ),
      ...tabBarOptions,
    })}>
    <Tab.Screen name="Início" component={Portal} />
    <Tab.Screen name="Documents" component={DocumentationPage} />
    <Tab.Screen name="Navio" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
