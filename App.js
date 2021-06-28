import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./Screens/HomeScreen";
import DailyPic from "./Screens/DailyPic";
import SpaceCraft from "./Screens/SpaceCrafts"
import StarMap from "./Screens/StarMap"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

const stack=createStackNavigator()

export default function App() {
  return (
  <NavigationContainer>
    <stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
      <stack.Screen name="Home" component={HomeScreen}/>
      <stack.Screen name="Daily" component={DailyPic}/>
      <stack.Screen name="Space" component={SpaceCraft}/>
      <stack.Screen name="Star" component={StarMap}/>
    </stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
