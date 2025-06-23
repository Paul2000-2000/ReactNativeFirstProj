import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const screenWidth = Dimensions.get('window').width


export default function ShortAnklePage() {




  return (

    <SafeAreaView style={styles.container}> 
    <View style={styles.up}>
        <Image source={require('./../assets/images/shortAnklePage/upImage.png')} style={styles.imageUp}/>
    </View>
    <View style={styles.down}>
        <Text style={styles.heading}> Short ankle socks </Text>
        <View style={styles.items}>
        <View style={styles.item}>
            <Image style={styles.imageItem} source={require('./../assets/images/shortAnklePage/down1.png')}/>
            <View style={styles.itemInfo}>
                <Text style={styles.itemPrice}>25 EURO</Text>
                <FontAwesome name='shopping-cart'size={25}/>
            </View>
        </View>
        <View style={styles.item}>
            <Image style={styles.imageItem} source={require('./../assets/images/shortAnklePage/down2.png')}></Image>
            <View style={styles.itemInfo}>
                <Text style={styles.itemPrice}>30 EURO</Text>
                <FontAwesome name='shopping-cart'size={25}/>
            </View>
        </View>
        <View style={styles.item}>
            <Image style={styles.imageItem} source={require('./../assets/images/shortAnklePage/down3.png')}></Image>
            <View style={styles.itemInfo}>
                <Text style={styles.itemPrice}>25 EURO</Text>
                <FontAwesome name='shopping-cart'size={25}/>
            </View>
        </View>
        <View style={styles.item}>
            <Image style={styles.imageItem} source={require('./../assets/images/shortAnklePage/down4.png')}></Image>
            <View style={styles.itemInfo}>
                <Text style={styles.itemPrice}>18 EURO</Text>
                <FontAwesome name='shopping-cart'size={25}/>
            </View>
        </View>
    </View>
    </View>
    <View style={styles.navbarDown}>
        <FontAwesome name='home' size={25}/>
        <Ionicons name='notifications' size={25}/>
        <AntDesign name='heart' size={25}/>
        <FontAwesome name='shopping-cart' size={25}/>
        
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#E2BCB7',
      },
      up:{
        height:250
      },
      imageUp:{
        resizeMode:'cover',
        height:250,
        width:screenWidth,

      },
      

      down:{
        display:'flex',
        flexDirection:"column",
        alignItems:'center',
        gap:7,
        padding:15,
        width:screenWidth,
      },
      heading:{
        fontSize:32,
        color:'#4E352F'
      },
      items:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
      },
      item:{
        width: screenWidth / 2 - 30,  // fit 2 items per row with some spacing
        display:'flex',
        flexDirection:'column',
        marginBottom:20
        
      },
      imageItem:{
        height:150,
        width:175,
        resizeMode:'cover'
      },
      itemInfo:{
        display:'flex',
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
        alignItems:"center",
        backgroundColor:'#FFEFE0'
      },
      itemPrice:{
        color:'#4E352F',
        fontSize:16
      },

      navbarDown: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#FFEFE0',
        height: 65,
      },

})