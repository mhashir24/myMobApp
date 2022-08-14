import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image
}
    from "react-native";

import { useNavigation } from "@react-navigation/native";
import drawwall from '../assets/drawwall.jpg';
import dpimg from '../assets/samantha.jpg';
import homeicon from '../assets/homeicon.png';
import signupicon from '../assets/signupicon.png';
import signinicon from '../assets/signinicon.png';


const DrawerComponent = ({ }) => {
    let navigation = useNavigation()

    return (

        <View style={{ flex: 1}}>

            <ImageBackground
                source={drawwall}
                style={{
                    zIndex: 1, opacity: 20,
                    width: '100%', // applied to Image
                    height: '100%'
                }}
                imageStyle={{
                    resizeMode: 'cover' // works only here!
                }}
            >


                <View style={{ flex: 1}}>

                    <View style={{padding: 20 }}>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 50 }}
                            source={dpimg}
                        />

                        <Text style={{ fontSize: 20, color: '#ffefd5', fontWeight: 'bold' }}>
                            {'Rachel Lannister'}
                        </Text>
                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate('Home Screen')}>
                        <View style={{ borderRadius: 30, width: 255, backgroundColor: '#ffa500', 
                        marginHorizontal: 10, marginVertical: 10, padding: 10, flexDirection:'row', alignItems:'center' }}>
                            
                            <Image
                            style={{width:20, height:20}}
                            source = {homeicon}
                            />
                            
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginLeft: 10 }}>
                                {'Home'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                    <View style={{ borderRadius: 30, width: 255, backgroundColor: '#ffa500', 
                        marginHorizontal: 10, marginVertical: 10, padding: 10, flexDirection:'row', alignItems:'center' }}>
                            
                            <Image
                            style={{width:20, height:20}}
                            source = {signupicon}
                            />

                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginLeft: 10 }}>
                                {'Create An Account'}
                            </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={{ borderRadius: 30, width: 255, backgroundColor: '#ffa500', 
                        marginHorizontal: 10, marginVertical: 10, padding: 10, flexDirection:'row', alignItems:'center' }}>
                            
                            <Image
                            style={{width:20, height:20}}
                            source = {signinicon}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginLeft: 10 }}>
                                {'Log In'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Tab View')}>
                    <View style={{ borderRadius: 30, width: 255, backgroundColor: '#ffa500', 
                        marginHorizontal: 10, marginVertical: 10, padding: 10, flexDirection:'row', alignItems:'center' }}>
                            
                            <Image
                            style={{width:20, height:20}}
                            source = {signinicon}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginLeft: 10 }}>
                                {'Tab View'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Search Screen')}>
                    <View style={{ borderRadius: 30, width: 255, backgroundColor: '#ffa500', 
                        marginHorizontal: 10, marginVertical: 10, padding: 10, flexDirection:'row', alignItems:'center' }}>
                            
                            <Image
                            style={{width:20, height:20}}
                            source = {signinicon}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginLeft: 10 }}>
                                {'Search Screen'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('ProductView')}>
                    <View style={{ borderRadius: 30, width: 255, backgroundColor: '#ffa500', 
                        marginHorizontal: 10, marginVertical: 10, padding: 10, flexDirection:'row', alignItems:'center' }}>
                            
                            <Image
                            style={{width:20, height:20}}
                            source = {signinicon}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginLeft: 10 }}>
                                {'Product View'}
                            </Text>
                        </View>
                    </TouchableOpacity>


                </View>

            </ImageBackground>
        </View>

    );
};

export default DrawerComponent
