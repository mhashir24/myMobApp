import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    TouchableOpacity,
    Image,
    Text,
    TextInput,
    FlatList,
    ImageBackground

} from 'react-native';


import leftarrow from '../../assets/leftarrow.png';
import chaticon from '../../assets/chaticon.png';
import basketicon from '../../assets/basket.png';
import basketicon1 from '../../assets/camera.png';
import pd1 from '../../assets/pd1.jpg';
import pd2 from '../../assets/pd2.jpg';
import pd3 from '../../assets/pd3.jpg';
import pd4 from '../../assets/pd4.jpg';
import pd5 from '../../assets/pd5.jpg';
import signupwall from '../../assets/signupwall.jpg';


const lists = [
    {
        imgpd: pd1,
        text1:'Game Of Thrones Season 1',
        text2: '$ 100'
    },
    {
        imgpd: pd2,
        text1: 'Dell E6440 Laptop',
        text2: '$ 120'
    },
    {
        imgpd: pd3,
        text1:'Nike Air Max',
        text2: '$ 250'
    },
    {
        imgpd: pd4,
        text1:'David Beckam Coat',
        text2: '$ 500'
    },
    {
        imgpd: pd5,
        text1:'Rado Watch For Men',
        text2: '$ 100'
    }
]





const searchScreen = () => {
    const navigation = useNavigation()

    return (

        <View style={{ flex: 1, borderWidth: 1}}>
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

            <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#ffa500', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Image
                        style={{ width: 40, height: 15, marginLeft: 10 }}
                        source={leftarrow}
                    />
                </TouchableOpacity>

                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', marginLeft: -5 }}>
                    {'Search'}
                </Text>

                <Image
                    style={{ width: 30, height: 10, marginLeft: 170, paddingHorizontal: 5, paddingVertical: 10 }}
                    source={chaticon}
                />


                <Image
                    style={{ width: 25, height: 5, paddingHorizontal: 5, paddingVertical: 10 }}
                    source={basketicon}
                />
            </View>


            <View style={{margin: 10, borderRadius: 7, flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between', backgroundColor: 'white', marginBottom:-3}}>
                <TextInput
                    style={{ marginLeft: 10, color: 'purple' }}
                    keyboardType={'default'}
                    placeholder={'S e a r c h'}
                />

                <Image
                    style={{ width: 10, height: 5, marginRight: 15, paddingVertical: 11, paddingHorizontal: 12 }}
                    source={basketicon1}
                />
            </View>


            
            <FlatList
            data = {lists}
            renderItem={({ item }) => {
                return(
                    <TouchableOpacity onPress={() => navigation.navigate('ProductView', { data: item })}>
                    <View style={{ borderWidth: 0.5, borderColor: '#dcdcdc' ,backgroundColor:'white',
                    marginHorizontal: 18, marginVertical:10 ,marginBottom:-5,flexDirection: 'row', padding: 5, borderRadius: 10 }}>

                    <Image
                        style={{ width: 130, height: 100, borderRadius: 10 }}
                        source={item.imgpd}
                    />
    
                    <View style={{ justifyContent: 'space-between', padding: 8 }}>
                        <Text style={{ flexWrap: 'wrap', marginRight: 120 }}>
                            {item.text1}
                        </Text>
    
                        <Text style={{ color: 'lightgrey', fontWeight:'bold' }}>
                            {item.text2}
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>
                )
            }}
            
            />

</ImageBackground>

        </View>



    );
};

export default searchScreen