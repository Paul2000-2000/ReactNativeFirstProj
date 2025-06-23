import { AntDesign, FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './views/Navbar';


export default function ProfilePage() {


  const navgigateLogin = () =>
  {
    router.push('/LoginPage');
  }

  return (
    <SafeAreaView style={styles.container}> 

    <View style={styles.profileInformation}>
        <View style={styles.profileInformationDiv}>
          <MaterialIcons name='person' size={45}/>
            <View style={styles.personInformation}>
              <Text style={styles.personText}>Craig George-Mash</Text>
              <Text style={styles.personText}>0713 981 213</Text>
              <Text style={styles.personText}>Registered: 10/10/2021</Text>
            </View>
        </View>
        <MaterialIcons name='chevron-right' size={30}/>
    </View>

    



    <View style={styles.cateogoryMain}>
       <AntDesign name='barcode' size={25}/>
       <Text style={styles.categoryMainText}> Discount codes </Text>
       <MaterialIcons name='chevron-right' size={30}/>
    </View>

    <View style={styles.cateogoryMain}>
       <FontAwesome5 name='medal' size={25}/>
       <Text style={styles.categoryMainText}> Product reviews </Text>
       <MaterialIcons name='chevron-right' size={30}/>
    </View>


    
    <View style={styles.ContentList}>
      <View style={styles.listItem}>
          <FontAwesome6 name='jedi-order' size={25}/>
          <Text style={styles.listItemText}>Order management</Text>
          <MaterialIcons name='chevron-right' size={30}/>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>Socks shop you’ve followed</Text>
        <MaterialIcons name='chevron-right' size={30}/>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}> Orders awaiting shipment</Text>
        <MaterialIcons name='chevron-right' size={30}/>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>Completed orders</Text>
        <MaterialIcons name='chevron-right' size={30}/>
      </View>

    </View>

    <View style={styles.PaymentDiv}>
        <AntDesign name='idcard' size={25}/>  
        <Text style={styles.PaymentDivText}>Payment Information</Text>
        <MaterialIcons name='chevron-right' size={30}/>
    </View>

    <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText} onPress={() => navgigateLogin()}> LOG OUT </Text>
    </TouchableOpacity>

   <Navbar/>

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
      profileInformation:{
        backgroundColor:'#FFEFE0',
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:40,
      },
      profileInformationDiv:{
        display:'flex',
        flexDirection:"row",
        gap:5,
        alignItems:'center'
      },
      personInformation:{
        display:"flex",
        flexDirection:'column',
        gap:5
      },
      personText:{
        fontSize:14,
        color:'#4E352F'
      },
    
      cateogoryMain:{
        marginTop:10,
        padding:10,
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        backgroundColor:"#EAD1CE"
      },
      categoryMainText:{
        fontSize:17,
        color:'#4E352F'
      },
      ContentList:{
        marginTop:10
      },
      listItem:{
        marginBottom:2,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:'#EAD1CE'
      },
      listItemText:{
        fontSize:18,
        color:'#4E352F'
      },
      PaymentDiv:{
        marginVertical:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
        backgroundColor:'#EAD1CE'
      },
      PaymentDivText:{
         fontSize:18,
        color:'#4E352F'
      },

      button:{
        width:225,
        height:65,
        backgroundColor:'#FFEFE0',
        borderRadius:25,
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center',
      },
      buttonText:{
        fontSize:28,
        fontWeight:500,
        color:"#4E352F",
        letterSpacing:1.5,
      } ,

    
})