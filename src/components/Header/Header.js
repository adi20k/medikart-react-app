/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/color';
import Button from '../Button/Button';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const {navigate} =useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.Image}
            source={require('../../assets/img/avatar.png')}
          />
          <View style={styles.bio}>
            <Text style={styles.text}>Hello, Welcome</Text>
            <Text style={[styles.text, {paddingTop: 5}]}>Username</Text>
          </View>
        </View>
        <View style={styles.bellIcon}>
          <Button>
            <Image source={require('../../assets/img/icon.png')} />
          </Button>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigate('SearchScreen')} style={styles.searchBar}>
        <Image style={styles.searchImg} source={require('../../assets/img/search.png')}/>
        <Text style={styles.searchText}>{'Search doctor..'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: '22%',
    backgroundColor: COLORS.PRIMARY,
  },
  profile: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Image: {
    height: 48,
    backgroundColor: 'gray',
    width: 48,
    borderRadius: 50,
    alignSelf: 'center',
  },
  bio: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 5,
  },
  text: {
    color: COLORS.SECONDARY,
    fontSize: 18,
  },
  bellIcon: {
    alignSelf: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 48,
    borderRadius: 10,
    margin: 10,
    borderColor: '#EDEDFC',
  },searchImg:{
    alignSelf:'center',
    marginHorizontal:10,

  },searchText:{
    alignSelf:'center',
    fontSize:16,
    color:COLORS.SECONDARY,
  }
});
