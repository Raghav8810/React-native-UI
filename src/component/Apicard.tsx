/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Product{
    id: number,
    title: string,
    description: string;
    price: number;
}

interface ProductItemProps {
    item: Product;
  }
  

const Apicard: React.FC<ProductItemProps> = ({item}) => {
  return (
    <View style={{ padding: 10 }}>
    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
      {item.title}
    </Text>
    <Text style={{ fontSize: 14, color: 'gray' }}>
      {item.description}
    </Text>
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>
      ${item.price}
    </Text>
  </View>
  )
}

export default Apicard

const styles = StyleSheet.create({})