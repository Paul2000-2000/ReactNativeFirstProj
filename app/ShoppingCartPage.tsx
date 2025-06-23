import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navbar from './views/Navbar';

export default function ShoppingCartPage() {
  return (
    <SafeAreaView style={styles.container}> 
    <View style={styles.headerDiv}>
      <FontAwesome name='arrow-left' size={25}/>
      <Text style={styles.headerText}> Shopping Cart </Text>
    </View>
    <Navbar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#E2BCB7',
        paddingTop:40,
        paddingBottom:20
      },
      headerDiv:{
        backgroundColor:'#FFEFE0',
        padding:20,
        display:'flex',
        flexDirection:'row',
        gap:55
      },
      headerText:{
        color:'#4E352F',
        fontSize:24,
      }
})