import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function LoginPage() {

  const navigateMainHomePage = () =>{
    router.push('/HomePage');
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.up}>
        <Image source={require('./../assets/images/pageTwo/21.png')} style={styles.imageTwo}/>
      </View>
      <View style={styles.down}>
        <Text style={styles.title}> Sign In </Text>
        <View style={styles.inputArea}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput placeholder='Enter your email'
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
        </View>
      
        <View style={styles.inputArea}>
          <Text style={styles.inputText}>Password</Text>
          <TextInput placeholder='Enter your password'
            placeholderTextColor="#888"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}

          />
          <Text style={styles.forgot}>Forgot Password</Text>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={ () => navigateMainHomePage() }>
            <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E2BCB7'
  },
  up:{
    paddingBottom:35
  },
  imageTwo:{
    height:300,
    objectFit:'cover'
  },
  down:{
    flex:1,
    backgroundColor:'#FFEFE0',
    borderTopRightRadius:35,
    borderTopLeftRadius:35,
    padding:25,
    gap:25
  },
  title:{
    fontSize:32,
    letterSpacing:5,
    color:'#4E352F',
    fontWeight:'bold'
  },
  inputArea:{
    gap:10
  },
  inputText:{
    paddingLeft:10,
    fontSize:18,
    fontWeight:500
  },  
  input:{
    backgroundColor:'#E2BCB7',
    borderRadius:10,
    paddingLeft:15
  },
  forgot:{
    fontSize:12,
    paddingLeft:30
  },
  button:{
    backgroundColor:'#E2BCB7',
    width:215,
    height:65,
    borderRadius:20,
    borderColor:'black',
    borderWidth:1,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color:'#4E352F',
    textTransform:'uppercase',
    fontSize:24,
    fontWeight:500,
    letterSpacing:3
  },
  signArea:{
    flexDirection:'row',
    alignSelf:'center',
    gap:7
  },
  action:{
    color:"#4E352F",
    textTransform:'uppercase',
    fontWeight:'bold',
    letterSpacing:1.5
  }
});
