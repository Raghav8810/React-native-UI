import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../AuthNavigator';

type DetailProps = NativeStackScreenProps<RootStackParamList, 'HOME'>;

const SettingDetail = ({route, navigation}: DetailProps) => {
  return (
    <View>
      <Text>SettingDetail</Text>
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default SettingDetail

const styles = StyleSheet.create({})