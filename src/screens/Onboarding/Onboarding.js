/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
     const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/img/splash.png')} style={styles.background}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/img/doctor.png')}
            style={styles.doctorImage}
            resizeMode="contain"
          />
        </View>
        <View style={{flex:0.45,backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:24,fontWeight:'bold',paddingVertical:10}}>Welcome to MediKart</Text>
                    <Text style={{fontSize:18,alignSelf:'center',paddingVertical:10,paddingHorizontal:10,textAlign:'center',color:'grey'}}>{'Book appointment with your doctor'}</Text>
                </View>
          </View>
          <View style={{bottom:10,position:'absolute',width:'100%',padding:10,}}>
           <Button label={'Get started'} onPress={()=>navigate('LoginScreen')} style={{backgroundColor:'#0B3DA9'}}/>
          </View>
      </ImageBackground>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.6,
    justifyContent: 'center',
    marginTop:120,
    alignItems: 'center',
  },
  doctorImage: {
    width: '100%',
    height: '100%',
  },
})
