/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AuthNavigator';
import { ActivityIndicator, Avatar, TextInput } from 'react-native-paper';
import { Badge , FAB} from 'react-native-paper';
import { Button } from 'react-native-paper';


//material ui


type LoginProps = NativeStackScreenProps<RootStackParamList, 'HOME'>;

const LoginScreen = ({ route, navigation }: LoginProps) => {
  const[isLoding, setIsLoading] = useState(false);

  const handleLogin = () =>{
     setIsLoading(true);

     setTimeout(()=>{
         setIsLoading(false);
         navigation.navigate('HOME');
     },2000)
  }

  return (
    <View>
     <View style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
     }}>
       <Text style={{
        color: 'black',
        fontSize:17
       }}>Login Screen</Text> 
      <Avatar.Image size={50} source={require('../../assets/young-man.png')} />
     </View>
      {/* <FAB icon="bell"  />
      <Badge>3</Badge>
      <Button icon="check" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button> */}

      <View style={{
        paddingHorizontal: 55,
        marginTop: 50
        
      }}>
      <TextInput
      style={{
       backgroundColor:'transparent',
        marginVertical: 20
      }}
      label="name"
    />
       <TextInput
        style={{
          backgroundColor:'transparent',
           
         }}
      label="email"
    />
      </View>

    
      
 
        <View style={{paddingHorizontal: 15,marginTop: 20, flexDirection:'column', alignItems: "center" }}>
        <Button mode="contained" loading={false} style={{width: 300}}  onPress={handleLogin}>
        {isLoding ? (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ActivityIndicator animating={true} color="white" />
            <Text style={{ marginLeft: 10 }}>Loading</Text>
          </View>
        ) : (
          'Login'
        )}
        </Button>
      
        <Button mode="contained" style={{margin: 10, width: 300}}
            onPress={()=> navigation.navigate('FORGET_PASS')}
        >Forget Password</Button>
        <Button mode="contained" style={{width: 300}}
          onPress={()=> navigation.navigate('REGISTER')}
        >Sign Up</Button>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})