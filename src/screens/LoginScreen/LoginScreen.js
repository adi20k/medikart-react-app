import { Image, StyleSheet, ImageBackground, Text, View } from 'react-native';
import React from 'react';
import Button from '../../components/Button'; // Assuming your custom Button component
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const LoginScreen = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/img/splash.png')} style={styles.background}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/img/doctor.png')}
            style={styles.doctorImage}
            resizeMode="contain"
          />
        </View>

        {/* Content Section - Consider moving inline styles to StyleSheet */}
        <View style={styles.contentSection}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeTitle}>Welcome to MediKart</Text>
            <Text style={styles.welcomeSubtitle}>{'Book appointment with your doctor'}</Text>
          </View>
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <Button
            label={'Sign In'}
            style={styles.signInButton}
            onPress={() => navigation.navigate('SignInScreen')} // Assuming 'SignInScreen' is your route name
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' depending on desired effect
    justifyContent: 'flex-end', // Pushes content to the bottom
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
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10, // Added padding for overall content
  },
  welcomeTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20, // Adjust as needed
  },
  welcomeTitle: {
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
});