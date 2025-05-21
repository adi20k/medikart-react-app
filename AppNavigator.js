import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './src/screens/Onboarding/Onboarding';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => { // Renamed for clarity, you can keep it 'Navigation' if you prefer
  return (
    <NavigationContainer>
      {/* ONLY ONE Stack.Navigator here */}
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen" // LoginScreen is now a route within the SAME Stack.Navigator
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        {/* Add any other screens that should be part of this main stack here */}
        {/* For example, if you have a main app screen after login: */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; // Export the combined navigator

const styles = StyleSheet.create({});