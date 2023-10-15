import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ImageListScreen from './ImageListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ImageListAPOD" component={ImageListScreen} />
        <Stack.Screen name="ImageListAsteroids" component={ImageListScreen} />
        <Stack.Screen name="ImageListEarth" component={ImageListScreen} />
        <Stack.Screen name="ImageListMars" component={ImageListScreen} />
        <Stack.Screen name="ImageListEpic" component={ImageListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;