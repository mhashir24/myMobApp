import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import myDrawerNav from './myDrawerNav';
import Splash from './screens/Splash';

const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={myDrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;