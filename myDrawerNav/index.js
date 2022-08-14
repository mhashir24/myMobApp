import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import signUp from '../screens/signUp';
import homeScreen from '../screens/homeScreen';
import DrawerComponent from '../DrawerComponent';
import loginScreen from '../screens/LogIn';
import TabViewExample from '../screens/tabView';
import searchScreen from '../screens/searchScreen';
import ProductView from '../screens/ProductView';


const Drawer = createDrawerNavigator();

const myDrawerNav =() => {
  return (
      <Drawer.Navigator
      drawerContent = {props => <DrawerComponent {...props}/>}
      initialRouteName="Home Screen">
        <Drawer.Screen name="Home Screen" component={homeScreen} />
        <Drawer.Screen name="Sign Up" component={signUp} />
        <Drawer.Screen name="Login" component={loginScreen} />
        <Drawer.Screen name="Tab View" component={TabViewExample}/>
        <Drawer.Screen name="Search Screen" component={searchScreen}/>
        <Drawer.Screen name="ProductView" component={ProductView}/>
      </Drawer.Navigator>
  );
}

export default myDrawerNav