import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Home/HomeScreen";
import AboutScreen from "./About/AboutScreen";
import DescriptionScreen from "./Description/DescriptionScreen";
const Stack = createNativeStackNavigator();
const AuthRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={'home'} component={HomeScreen}/>
        <Stack.Screen name={'about'} component={AboutScreen}/>
        <Stack.Screen name={'description'} component={DescriptionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRouter;
