import {
  FontAwesome,
  MaterialIcons
} from '@expo/vector-icons';

import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './views/Navbar';

const screenHeight = Dimensions.get('window').height



export default function HomePage() {

  const [isOpen , setIsOpen] = useState(false);

  const setOpen = () =>{
    setIsOpen(!isOpen);
    console.log('mergeee');
  }
  
  const navigateProfile = ()=>{
    router.push('/ProfilePage');
  }

  const navigateShortAnkle = ()=>{
    router.push('/ShortAnklePage');
  }

  return (

    <SafeAreaView style={styles.container}> 

{isOpen && (
  <View style={styles.openModal}>
    <MaterialIcons name='close'  size={25} onPress={() => setOpen() }  style={styles.closeIcon}/>
    <View style={styles.categoriesImportant}>
        <View style={styles.categoryImportant}>
            <MaterialIcons name='home' size={30}/>
            <Text style={styles.categoryImportantText}> Home </Text>
        </View>
        <View style={styles.categoryImportant}>
             <MaterialIcons name='notifications' size={23}/>
             <Text style={styles.categoryImportantText}>  Notifications </Text>
        </View>
        <View style={styles.categoryImportant}>
            <FontAwesome name='heart' size={25}/>
            <Text style={styles.categoryImportantText}>  Wish List </Text>
        </View>
    </View>

    <View style={styles.bigCateogoriesList}>

    <View style={styles.categoriesTitle}>
        <MaterialIcons name='category' size={25} />
        <Text style={styles.categoryTitleMe}> Products categories</Text>
    </View>

    <View style={styles.categoriesList}>
        <TouchableOpacity style={styles.Category} onPress={ () => navigateShortAnkle()}>
            <Text style={styles.CategoryTitile}>Short ankle socks</Text>
            <MaterialIcons name='chevron-right' />
        </TouchableOpacity>
        <View style={styles.Category}>
            <Text style={styles.CategoryTitile}>Long socks</Text>
            <MaterialIcons name='chevron-right' />
        </View>
        <View style={styles.Category}>
            <Text style={styles.CategoryTitile}>Medium-length socks</Text>
            <MaterialIcons name='chevron-right' />
        </View>
        <View style={styles.Category}>
            <Text style={styles.CategoryTitile}>Mesh socks</Text>
            <MaterialIcons name='chevron-right' />
        </View>
        <View style={styles.Category}>
            <Text style={styles.CategoryTitile}>Basic men’s/women’s socks</Text>
            <MaterialIcons name='chevron-right' />
        </View>
        <View style={styles.Category}>
            <Text style={styles.CategoryTitile}>Patterned socks</Text>
            <MaterialIcons name='chevron-right' />
        </View>
        <View style={styles.Category}>
            <Text style={styles.CategoryTitile}> New collection 2021</Text>
            <MaterialIcons name='chevron-right' />
        </View>
    </View>

    <View style={styles.contactDiv}>
            <FontAwesome name='phone' size={25}/>
            <Text style={styles.contactDivText}>Contact</Text>
    </View>


    </View>

  </View>
)}


    <View style={styles.up}>
      <View style={styles.upFirstSection}>
        {
          !isOpen ?         <MaterialIcons name='menu'  size={25} onPress={() => setOpen() }/>
          :     <MaterialIcons name='close'  size={25} onPress={() => setOpen() } />

        }
        <MaterialIcons name='person' size={30} onPress={() => navigateProfile()}/>
      </View>
      <Text style={styles.welcomeName}>Hi, Craig George</Text>
      <View style={styles.searchDiv}>
        <MaterialIcons name='search' size={20}/>
        <TextInput placeholder='search' />
        <FontAwesome name='microphone' size={20}/>
      </View>
    </View>
    <View style={styles.down}>
        <Text style={styles.title}>NEW ITEMS OCTOBER</Text>
        <Image style={styles.imageFirst} source={require('../assets/images/homePage/ImageOne.png')}/>
        <View style={styles.imagesDiv}>
          <Image style={styles.image} source={require('../assets/images/homePage/ImageOneLeft.png')}/>
          <Image style={styles.image} source={require('../assets/images/homePage/ImageOneRight.png')}/>
        </View>
        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}> BUY NOW </Text>
        </TouchableOpacity>
    </View>

      <Navbar/>
  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#E2BCB7',
        
      },
    up:{
        backgroundColor:'#FFEFE0',
        display:'flex',
        flexDirection:'column',
        gap:'15',
        padding:20,
        
    },
    upFirstSection:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    welcomeName:{
        fontSize:28,
        letterSpacing:1.2,
        color:'#4E352F'
    },
    searchDiv:{
        display:'flex',
        flexDirection:'row',
        gap:5,
        alignItems:'center',
        paddingHorizontal:8,
        paddingVertical:3,
        borderWidth:2,
        borderRadius:25,
        justifyContent:'space-between',
        backgroundColor:'#E2BCB7',
        width:355,
    
    },
    searchText:{
        width:200,
        alignSelf:'flex-start',
        paddingLeft:5,
    },
   
    down:{
        flex:1,
        flexDirection:'column',
        gap:'5',
        padding:20,
        backgroundColor:'#E2BCB7',
        alignItems:"center",
        paddingBottom: 100,

        },
    title:{
      fontSize:28,
      letterSpacing:1.6,
      color:'#4E352F'
    },
    imageFirst:{
      width:300,
      height:200,
      objectFit:'cover',
    },
    imagesDiv:{
      flexDirection:'row',
      
    },
    image:{
      width:200,
      height:200,
      marginRight: 10,
    },
    button:{
      width:225,
      height:65,
      backgroundColor:'#FFEFE0',
      borderRadius:25,
      display:'flex',
      alignItems:"center",
      justifyContent:"center",
    },
    buttonText:{
      fontSize:28,
      fontWeight:500,
      color:"#4E352F",
      letterSpacing:1.5,
    } ,
    





    openModal:{
      position:'absolute',
      paddingTop:213,
      width:200,
      flex:1,
      backgroundColor:'#FFEFE0',
      height:screenHeight,
      top:0,
      left:0,
      right:0,
    bottom:0,
    zIndex:999,
    },
    closeIcon:{
      position:'absolute',
      top:45,
      left:20,
      zIndex:2
    },
    categoriesImportant:{
      display:'flex',
      flexDirection:'column',
      gap:5,
      alignItems:'center',

    },
    categoryImportant:{
      display:'flex',
      flexDirection:'row',
      gap:5,
      padding:10,
      width:200,
      alignItems:'center',
      backgroundColor:'#FCD8CD',
      color:'#4E352F',
    },
    categoryImportantText:{
      fontSize:18,
      fontWeight:500,
      letterSpacing:1.4
    },
    bigCateogoriesList:{
      display:'flex',
      flexDirection:'column',
      gap:'5',
      padding:10
    },
    categoriesTitle:{
      display:'flex',
      flexDirection:'row',
      gap:10,
      alignItems:'center',
      width:200,
      padding:10
    },
    categoryTitleMe:{
      letterSpacing:1.4,
      fontSize:18,
      fontWeight:500,
      color:'#4E352F',
      alignSelf:'center'
    },
    categoriesList:{
      display:'flex',
      flexDirection:'column',
      gap:'10'
      
    },
    Category:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:"center",
    },
    CategoryTitile:{
      fontSize:17,
      color:"#4E352F",
      width:125,
      alignSelf:'flex-start'
    },
    contactDiv:{
      marginTop:12,
      display:'flex',
      flexDirection:'row',
      gap:10,
      alignItems:"center"
    },
    contactDivText:{
      letterSpacing:1.4,
      fontSize:18,
      color:'#4E352F'
    }
   

})