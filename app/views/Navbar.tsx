import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'



export default function Navbar() {


    const navigateShoppingCart = () =>{
        router.push('/ShoppingCartPage');
    }

    

  return (
    <View style={styles.navbarDown}>
    <TouchableOpacity onPress={ () => navigateShoppingCart()} >
             <FontAwesome name='home' size={25} />
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => navigateShoppingCart()} >
             <Ionicons name='notifications' size={25}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => navigateShoppingCart()} >
            <AntDesign name='heart' size={25} />
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => navigateShoppingCart()} >
            <FontAwesome name='shopping-cart' size={25} />
    </TouchableOpacity>
</View>

  )
}

const styles = StyleSheet.create({
  
    navbarDown: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical:10,
        backgroundColor: '#FFEFE0',
        height: 65,
        zIndex: 1000,        
        elevation: 1000,    
      },
})