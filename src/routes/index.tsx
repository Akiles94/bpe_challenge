import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailScreen, HomeScreen} from '../screens';

const MainStack = createStackNavigator();

export default function Router() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => <></>}}
      />
      <MainStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{header: () => <></>}}
      />
    </MainStack.Navigator>
  );
}
