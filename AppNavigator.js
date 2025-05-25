import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './src/screens/Onboarding/Onboarding';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import OtpVerification from './src/screens/OtpVerification/OtpVerification';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import DoctorList from './src/components/DoctorList/DoctorList';
import DoctorDetails from './src/screens/DoctorDetails/DoctorDetails';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="OtpVerify"
          component={OtpVerification}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
           options={{headerShown: false}}
        />
         <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="DoctorList"
          component={DoctorList}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="DoctorDetails"
          component={DoctorDetails}
          options={{headerBackTitle:'Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
