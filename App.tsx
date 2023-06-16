import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginLanding from './src/screens/LoginLanding';
import SignIn from './src/screens/SignIn';
import Register from './src/screens/Register';
import LupaPassword from './src/screens/LupaPassword';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Bookmark from './src/screens/Bookmark';
import News1 from './src/components/Detail/News1';
import News2 from './src/components/Detail/News2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginLanding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginLanding" component={LoginLanding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LupaPassword" component={LupaPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Bookmark" component={Bookmark} />
        <Stack.Screen name="News1" component={News1} />
        <Stack.Screen name="News2" component={News2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
