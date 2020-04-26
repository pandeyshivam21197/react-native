import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/appScreens/HomeScreen';
import React from 'react';

const Stack = createStackNavigator();

const BootstrapStack = () => (
    <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="OnBoarding" component={HomeScreen} options={{ title: 'OnBoarding' }}/>
        <Stack.Screen name="SignUp" component={HomeScreen} options={{ title: 'SignUp' }}/>
        <Stack.Screen name="Login" component={HomeScreen} options={{ title: 'Login' }}/>
    </Stack.Navigator>
);

export default BootstrapStack;
