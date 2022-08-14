import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';


import {
    View,
    TouchableOpacity,
    Image,
    Text,
    ImageBackground,
    FlatList,
    Dimensions
} from 'react-native';

import leftarr from '../../assets/leftarr.png';
import searchs from '../../assets/searchs.png';
import basketicon from '../../assets/basket1.png';
import dpimg from '../../assets/samantha.jpg';

const screenWidth = Dimensions.get('screen').width

const dataItem = [
    {
        id: '0',
        name: 'XS',
    },
    {
        id: '1',
        name: 'S',
    },
    {
        id: '2',
        name: 'M',
    },
    {
        id: '3',
        name: 'L',
    },
    {
        id: '4',
        name: 'XL',
    },
    {
        id: '5',
        name: 'XXL',
    }
]

const ProductView = ({ route }) => {
    const [data, setData] = useState(null)
    const [selected, setSelected] = useState('XS')

    useEffect(() => {
        if (route && route.params) {
            const { params } = route
            setData(params.data)
        }
    }, [route])
    const navigation = useNavigation()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)



    return (

        <View style={{ flex: 1 }}>
            <View>
                <ImageBackground
                    source={data?.imgpd}
                    style={{
                        zIndex: 1, opacity: 20,
                        width: '100%', // applied to Image
                        height: 320
                    }}
                    imageStyle={{
                        resizeMode: 'stretch' // works only here!
                    }}
                >

                    <View style={{ alignItems: 'center', padding: 10, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Search Screen')}>
                            <Image
                                style={{ width: 40, height: 15, marginLeft: 10 }}
                                source={leftarr}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, color: 'white', marginLeft: -5 }}>
                            {'Product Profile'}
                        </Text>

                        <Image
                            style={{ width: 20, height: 20, marginLeft: 100 }}
                            source={searchs}
                        />


                        <Image
                            style={{ width: 25, height: 5, paddingHorizontal: 5, paddingVertical: 10, marginLeft: 5 }}
                            source={basketicon}
                        />
                    </View>


                </ImageBackground>


                <View style={{
                    backgroundColor: 'white', justifyContent: 'center',
                    marginHorizontal: 18, marginVertical: -40, marginBottom: -5, padding: 5, borderRadius: 10
                }}>

                    <View style={{ paddingHorizontal: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
                            {data?.text1}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                            source={dpimg}
                        />

                        <View style={{ justifyContent: 'space-between', padding: 8, flexGrow: 1 }}>
                            <Text style={{ flexWrap: 'wrap' }}>
                                {'Rachel Lannister'}
                            </Text>

                            <Text style={{ color: 'lightgrey', fontWeight: 'bold' }}>
                                {'Pro Seller'}
                            </Text>
                        </View>

                        <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#2e8b57' }}>
                            {data?.text2}
                        </Text>
                    </View>

                    <View style={{ paddingHorizontal: 8 }}>
                        <Text style={{ fontSize: 15 }}>
                            {'S i z e'}
                        </Text>
                    </View>

                    <View style={{ margin: 30, flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <FlatList 
                            data={dataItem}
                            keyExtractor={item => item.id}
                            style={{ flex: 1  }}
                            contentContainerStyle={{ flexDirection: 'row',flexWrap: 'wrap', justifyContent: 'space-evenly' }}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => setSelected(item.name)}>
                                        <View style={{
                                            paddingVertical: 12, alignItems: 'center',
                                            marginBottom: 10,
                                            width: screenWidth / 5, backgroundColor: selected === item.name ? 'red' : '#add8e6', borderRadius: 10
                                        }}>

                                            <Text style={{ fontWeight: 'bold', color: selected === item.name ? '#fff' : '#000080' }}>
                                                {item.name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />

                    </View>

                    <View style={{flexDirection:'row', flexWrap:'wrap', marginTop:-22, justifyContent:'center', alignItems:'center'}}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />

                        <Text>
                            {'I agree to the Terms of Services'}
                        </Text>
                    </View>



                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 5, marginTop:10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home Screen')}>
                            <View style={{ borderRadius: 5, width: 250, backgroundColor: '#ffa500', padding: 15 }}>
                                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
                                    {'ADD TO CART'}
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>













                </View>

            </View>



        </View>




    );
};

export default ProductView