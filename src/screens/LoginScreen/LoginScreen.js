/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import Button from '../../components/Button'; // Assuming your custom Button component
import {useNavigation} from '@react-navigation/native'; // Import useNavigation

const LoginScreen = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/img/facility.png')}
            style={styles.doctorImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.contentSection}>
          <View style={styles.LoginContainer}>
            <Text style={styles.LoginTitleContainer}>Login In or Sign Up</Text>
          </View>
          <View style={styles.LoginContainerInput}>
            <Text style={{fontSize: 18, paddingHorizontal: 10}}>{'+91'}</Text>
            <TextInput
              style={styles.LoginInput}
              keyboardType="numeric"
              placeholder="Phone Number"
              maxLength={10}
            />
          </View>

          <Button
            label={'Login with Mobile'}
            style={styles.signInButton}
            onPress={() => navigation.navigate('Onboarding')} // Assuming 'SignInScreen' is your route name
          />
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <Button style={styles.googleSignInButton}>
            <Image source={require('../../assets/img/google_icon.png')} />
            <Text style={{color:'Black',fontSize:18}}>Continue with Google</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  LoginInput: {padding: 10, fontSize: 18},
  LoginContainerInput: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 2,
    alignItems: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' depending on desired effect
    justifyContent: 'flex-end', // Pushes content to the bottom
    backgroundColor: '#0B3DA9',
  },
  imageContainer: {
    flex: 0.55, // Takes up remaining space at the top
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorImage: {
    width: '80%', // Adjust as needed
    height: '80%', // Adjust as needed
  },
  contentSection: {
    flex: 0.45,
    marginTop: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10, // Added padding for overall content
  },
  LoginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20, // Adjust as needed
  },
  LoginTitleContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10, // Spacing between title and subtitle
  },
  welcomeSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  buttonContainer: {
    bottom: 0, // Changed from 10 to 0 to align with bottom edge of contentSection
    position: 'absolute',
    width: '100%',
    padding: 10,
    backgroundColor: 'white', // Ensure it has a background if contentSection doesn't cover it fully
    paddingBottom: 20, // Add some padding at the very bottom for better visual
  },
  signInButton: {
    backgroundColor: '#0B3DA9',
  },
  googleSignInButton: {
    flexDirection:'row',
    gap:8,
    borderColor:'#939393',
    borderWidth:2,
    backgroundColor: 'white',
  },
});
