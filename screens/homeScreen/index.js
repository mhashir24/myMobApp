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
import homewall from '../../assets/homewall.jpg';
import option from '../../assets/option.png';

const homeScreen = () => {
  const navigation = useNavigation()

  const openMyDrawer = () => {
    navigation.openDrawer()
  }

  return (

    <View style={{ flex: 1 }}>

      <ImageBackground
        source={homewall}
        style={{
          zIndex: 1, opacity: 20,
          width: '100%', // applied to Image
          height: '100%'
        }}
        imageStyle={{
          resizeMode: 'cover' // works only here!
        }}
      >

        <View style={{margin:20, padding:20}}>
          <TouchableOpacity onPress = {() => openMyDrawer()}>
          <Image
          style={{width:30, height:30}}
          source = {option}
          />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
            <View style={{ borderRadius: 5, width: 250, backgroundColor: '#ffa500', padding: 15 }}>
              <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                {'GET STARTED'}
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      </ImageBackground>

    </View>



  );
};

export default homeScreen;
