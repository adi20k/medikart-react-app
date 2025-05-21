import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({label,onPress,style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button,style]}>
      <Text style={styles.text}> {label}</Text>
    </TouchableOpacity >
  )
}

export default Button

const styles = StyleSheet.create({button:{
textAlign:'center',
alignItems:'center',
height:48,
justifyContent:'center',borderRadius:10
,},text:{
    color:'white',
    fontSize:22,
}})