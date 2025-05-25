/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const cardGap = 16;

const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

const DoctorCard = ({
  id,
  name,
  image,
  speciality,
  horizontal,
  style,
  ...props
}) => {
  //   console.log('card imge url', image);

  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate('DoctorDetails', {doctorId: id})}
      style={[styles.container,style]}>
      <Image
        source={{uri: image}}
        style={[styles.image, !horizontal ? {height: 220} : {}]}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: 5,
        }}>
        <Text style={styles.textName}>{name}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 2}}>
          <Image source={require('../../assets/img/star.png')} />
          <Text>{props.rating}</Text>
        </View>
      </View>
      <View style={{paddingVertical: 5, flexDirection: 'row'}}>
        <Text>Fee ₹ {props?.fee} </Text>
      </View>
      <Text>{speciality}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    width: cardWidth,
  },
  image: {
    height: '45%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 5,
  },
  textName: {
    fontSize: 14,
    fontWeight: '600',
    width: '50%',
  },
});
