import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  Image

} from 'react-native';
import signupwall from '../../assets/signupwall.jpg';
import twitter from '../../assets/twitter1.png';
import facebook from '../../assets/fb.png';
import leftarrow from '../../assets/leftarrow.png';
import instagram from '../../assets/instagram.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';


const loginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigation = useNavigation()

  const submit = async () => {
    const storageEmail = await AsyncStorage.getItem('email')
    const storagePassword = await AsyncStorage.getItem('password')

    const e = JSON.parse(storageEmail)
    const p = JSON.parse(storagePassword)

    if (email === e && password === p) {
      console.log('login successfull')
      setMessage('login successfull')

      setTimeout(() => {
        setMessage('')
        navigation.navigate('Search Screen')
      }, 3000);

    } else {
      console.log('invalid credentials')
      setMessage('invalid credentials')
      
      setTimeout(() => {
        setMessage('')
      }, 3000);
    }

  }

  return (

    <View style={{ flex: 1 }}>

      <ImageBackground
        source={signupwall}
        style={{
          zIndex: 1, opacity: 20,
          width: '100%', // applied to Image
          height: '100%'
        }}
        imageStyle={{
          resizeMode: 'cover' // works only here!
        }}
      >

        <View style={{
          borderWidth: 1, alignItems: 'center',
          padding: 10, backgroundColor: '#ffa500', flexDirection: 'row'
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
            <Image
              style={{ width: 40, height: 15, marginLeft: 10 }}
              source={leftarrow}
            />
          </TouchableOpacity>

          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', marginLeft: -5 }}>
            {'Sign In'}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'center' }}>

          <View style={{}}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 30 }}
              source={facebook}
            />
          </View>

          <View style={{ marginLeft: 20 }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 30 }}
              source={twitter}
            />
          </View>

          <View style={{ marginLeft: 20 }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 30 }}
              source={instagram}
            />
          </View>


        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -120 }}>

          <View style={{ borderBottomWidth: 1, width: 260, paddingHorizontal: 10, marginBottom: 20, borderColor: 'white' }}>
            <TextInput
              keyboardType={'email-address'}
              placeholder={'E m a i l'}
              onChangeText={(value) => setEmail(value)}
            />
          </View>

          <View style={{ borderBottomWidth: 1, width: 260, paddingHorizontal: 10, marginBottom: 30, borderColor: 'white' }}>
            <TextInput
              keyboardType={'default'}
              secureTextEntry
              placeholder={'P a s s w o r d'}
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <TouchableOpacity onPress={() => submit()}>
            <View style={{ borderRadius: 5, width: 250, backgroundColor: '#ffa500', padding: 15 }}>
              <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                {'Log In'}
              </Text>
            </View>
          </TouchableOpacity>


          <View style={{ height: 50, justifyContent: 'center' }}>
            <Text>
              {
                message &&
                message
              }
            </Text>
          </View>

        </View>



      </ImageBackground>

    </View>



  );
};

export default loginScreen