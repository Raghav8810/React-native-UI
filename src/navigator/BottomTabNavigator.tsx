/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import WalletScreen from './screens/WalletScreen';
import NotificationScreen from './screens/NotificationScreen';
import SettingScreen from './screens/SettingScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import SettingsNavigator from './SettingsNavigator';
const Tab = createBottomTabNavigator();


export type RootStackParamList = {
  HOME: undefined;
  WALLET: undefined;
  NOTIFICATION: undefined;
  SETTING: undefined;
};


function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => {

            let iconName;

          if (route.name === 'HOME') {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === 'SETTING') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'WALLET') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'NOTIFICATION') {
            iconName = focused
              ? 'md-notifications-sharp'
              : 'md-notifications-outline';
          }

          return <Icon name={iconName} size={22} color={color} />;
        }
        })}>
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="WALLET" component={WalletScreen} />
      <Tab.Screen name="NOTIFICATION" component={NotificationScreen} />
      <Tab.Screen name="SETTING_NAVIGATOR" options={{tabBarLabel: 'SETTINGS'}} component={SettingsNavigator} />
    </Tab.Navigator>
    
  );
}

export default BottomTabNavigator;