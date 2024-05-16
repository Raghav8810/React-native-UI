/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import ForgetPassScreen from './screens/ForgetPassScreen';
import RegisterScreen from './screens/RegisterScreen';
import BottomTabNavigator from './BottomTabNavigator';

export type RootStackParamList = {
    LOGIN:undefined;
    HOME: undefined;
    FORGET_PASS: undefined;
    REGISTER:undefined;
  };

const Stack = createStackNavigator<RootStackParamList>();
//naigator , screen, group

 function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName="LOGIN" >
       <Stack.Screen name="LOGIN"component={LoginScreen} />
       <Stack.Screen name="FORGET_PASS"component={ForgetPassScreen} />
       <Stack.Screen name="REGISTER"component={RegisterScreen} />
       <Stack.Screen name="HOME"component={BottomTabNavigator} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default AuthNavigator