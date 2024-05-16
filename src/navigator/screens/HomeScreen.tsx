/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Apicard from '../../component/Apicard';


const HomeScreen = () => {
  const[apidata, setApidata] = useState([]);
  // eslint-disable-next-line prettier/prettier
  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
     setApidata(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList
        data={apidata}
        keyExtractor={(item) => item.id.toString()}
        renderItem= {({item, index})=>(
          // eslint-disable-next-line react-native/no-inline-styles
        <Apicard item={item} />
  )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
