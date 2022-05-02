import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';  
import SearchMovies from './screens/SearchMovies'
import MovieDetails from './screens/MovieDetails'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./TabNavigator";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Splash from "./screens/Splash";

const Stack = createStackNavigator()

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
}; 

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{headerLeft: (props) => null }}  />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
 
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name = "SearchMovies" 
          component = {SearchMovies} 
          options={{ title: 'Movie Browser' }} />
          <Stack.Screen name = "MovieDetails" 
          component = {MovieDetails} 
          options={{ title: 'Movie Details' }} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
        </ Stack.Navigator>
      </ NavigationContainer>
    );
  }
}

export { HomeStackNavigator, ContactStackNavigator };