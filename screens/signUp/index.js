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
import instagram from '../../assets/instagram.jpg';
import leftarrow from '../../assets/leftarrow.png';
import AsyncStorage from '@react-native-async-storage/async-storage';



const signUp = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()


    const submit = () => {

        if (email && password) {

            AsyncStorage.setItem('email', JSON.stringify(email))
            AsyncStorage.setItem('password', JSON.stringify(password))
            navigation.navigate('Login')

        } else {
            console.log('fields empty')
        }

        // console.log(username, 'username')
        // console.log(email, 'email')
        // console.log(password, 'password')
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
                    <TouchableOpacity onPress={() => navigation.navigate('Home Screen')}>
                        <Image
                            style={{ width: 40, height: 15, marginLeft: 10 }}
                            source={leftarrow}
                        />
                    </TouchableOpacity>

                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', marginLeft: -5 }}>
                        {'Create An Account'}
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

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -90 }}>

                    {/* <View style={{ borderBottomWidth: 1, width: 260, paddingHorizontal: 10, marginBottom: 20, borderColor: 'white' }}>
                        <TextInput
                            keyboardType={'default'}
                            placeholder={'U s e r n a m e'}
                            onChangeText={(value) => setUsername(value)}
                        />
                    </View> */}

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
                                {'SIGN UP'}
                            </Text>
                        </View>
                    </TouchableOpacity>


                </View>



            </ImageBackground>

        </View>



    );
};

export default signUp