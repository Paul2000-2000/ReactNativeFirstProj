
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const screenHeight = Dimensions.get('window').height


const index = () => {

  const navigateSecondPage = () =>{
    router.push('/RegisterPage');
  }


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.pageOne}>
      <Text style={styles.titleLeft}> Welcome to </Text>
      <Text style={styles.titleRight}> My First App</Text>
      <Image source={require('./../assets/images/pagerOne/11.png')} style={styles.imagePageOne}></Image>
      <Text style={styles.textInfo}> Make you beautifull everyday </Text>
      <View style={styles.circleDiv}>
        <MaterialIcons name='circle' color="white"/>
        <MaterialIcons name='circle' color="grey"/>
        <MaterialIcons name='circle' color="grey"/>
        <MaterialIcons name='circle' color="grey"/>
        <MaterialIcons name='circle' color="grey"/>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigateSecondPage()}>
          <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      
    </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E2BCB7'
  },

 pageOne:{
    width:'auto',
    height:screenHeight,
    backgroundColor:'#E2BCB7',
    padding:35,
    flexDirection:"column",
    gap:15,
    justifyContent:'center'
    
 },
 titleLeft:{
    fontSize:32,
    paddingHorizontal:35,
    textAlign:'left',
    color:'#4E352F'
 },
 titleRight:{
  fontSize:32,
  paddingHorizontal:35,
  textAlign:'right',
  color:'#4E352F'
 },
 imagePageOne:{
  width:300,
  height:300,
  objectFit:'cover',
  alignSelf:'center'
 },
 textInfo:{
  alignSelf:"center",
  fontSize:18,
  color:'#4E352F'
 },
 circleDiv:{
  marginVertical:20,
  flexDirection:'row',
  justifyContent:'space-around'
 },
 button:{
  width:225,
  height:50,
  backgroundColor:'#FFEFE0',
  alignSelf:"center",
  borderRadius:25,
  justifyContent:"center",
  alignItems:'center',
  borderColor:'black',
  borderWidth:1,
 },
 buttonText:{
  color:"#4E352F",
  fontSize:24,
  textTransform:'uppercase',
  letterSpacing:1.4

 }



})