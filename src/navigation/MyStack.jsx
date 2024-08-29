import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/user/HomeScreen';
import AskForTruck from '../screens/user/AskForTruck';
import AvailableDrivers from '../screens/user/AvailableDrivers';
import AskForWorker from '../screens/user/AskForWorker';
import MyOrders from '../screens/user/MyOrders';
import DriverProfileScreen from '../screens/user/DriverProfileScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import UserTypeScreen from '../screens/auth/UserTypeScreen';
import DriverSignupScreen from '../screens/auth/DriverSignupScreen';
import DriverLoginScreen from '../screens/auth/ DriverLoginScreen';
import { View , Text } from 'react-native';
import CustomDrawerContent from '../components/CustomDrawerContent';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const MyDrawer = () => {
return <Drawer.Navigator  
initialRouteName='HomeScreen'
drawerContent={() => <CustomDrawerContent />} 


>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />




</Drawer.Navigator>


}








const MyStack = () => {
    return (



        <Stack.Navigator initialRouteName="HomeScreen" >
            {/* ***************************************user*********************************************** */}

            <Stack.Screen name="HomeScreen" component={MyDrawer}         options={{ headerShown: false }} 
 />
            <Stack.Screen name="AskForTruck" component={AskForTruck} />
            <Stack.Screen name="AvailableDrivers" component={AvailableDrivers} />
            <Stack.Screen name="AskForWorker" component={AskForWorker} />
            <Stack.Screen name="MyOrders" component={MyOrders} />
            <Stack.Screen name="DriverProfileScreen" component={DriverProfileScreen} />




            
{/* **************************************************auth************************************ */}

            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="UserTypeScreen" component={UserTypeScreen} />
            <Stack.Screen name="DriverSignupScreen" component={DriverSignupScreen} />
            <Stack.Screen name="DriverLoginScreen" component={DriverLoginScreen} />










        </Stack.Navigator>
    );
};







export default MyStack;
