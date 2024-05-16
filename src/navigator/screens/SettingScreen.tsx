import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// eslint-disable-next-line prettier/prettier
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../AuthNavigator';

type SettingProps = NativeStackScreenProps<RootStackParamList, 'HOME'>;

const SettingScreen = ({route, navigation}: SettingProps) => {
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button
        title="GO TO DETAILS"
        onPress={() => navigation.navigate('SETTINGS_DETAIL')}
      />
      <Button title="LOG OUT" onPress={() => navigation.navigate('LOGIN')}/>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({})