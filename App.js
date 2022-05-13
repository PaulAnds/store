import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './zHome';
import DetailScreen from './zDetails';
import StoreScreen from './zStore';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailScreen} options={{title: "Tasks"}}/>
        <Stack.Screen name="Store" component={StoreScreen} options={{title: "Store"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}