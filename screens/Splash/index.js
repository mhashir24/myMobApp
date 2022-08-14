import React, { useEffect} from 'react';
import {
    View, Image, Dimensions
}           
from "react-native";
import { useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height


import insta from '../../assets/instagram.jpg';



const SplashScreen = ({ }) => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000);
    }, [])

    return (
        <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Image
            style={{width:50, height:50}}
            source = {insta}
            />

        </View>
    );
};

export default SplashScreen
