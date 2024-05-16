/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import ForgetPassScreen from './screens/ForgetPassScreen';
import RegisterScreen from './screens/RegisterScreen';
import BottomTabNavigator from './BottomTabNavigator';
import SettingScreen from './screens/SettingScreen';
import SettingDetail from './screens/SettingDetail';

export type RootStackParamList = {
    SETTINGS:undefined;
    SETTINGS_DETAIL: undefined;
  };

const Stack = createStackNavigator<RootStackParamList>();
//naigator , screen, group

 function SettingsNavigator() {
  return (
    <Stack.Navigator screenOptions={{}}>
       <Stack.Screen name="SETTINGS"component={SettingScreen} />
       <Stack.Screen name="SETTINGS_DETAIL"component={SettingDetail} />

    </Stack.Navigator>
  );
}

export default SettingsNavigator