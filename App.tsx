/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigator/AuthNavigator';

const App = () => {
  return (
   <NavigationContainer>
        <AuthNavigator/>
   </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({})