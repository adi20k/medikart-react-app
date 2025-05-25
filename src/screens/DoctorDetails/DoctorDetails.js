import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {fetchDoctorById} from '../../api/doctor';
import {COLORS} from '../../styles/color';
import DoctorCard from '../../components/DoctorList/DoctorCard';

const DoctorDetails = ({route}) => {
  const navigation = useNavigation();
  const {doctorId} = route?.params || {};
  const {data} = useQuery({
    queryKey: ['doctorById', doctorId],
    queryFn: () => fetchDoctorById(doctorId),
  });
  console.log('Doctor ', data);
  return (
    <ScrollView style={styles.container}>
      
      <View>
        <DoctorCard {...data} style={{width:'100%'}}/>
      </View>
    </ScrollView>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60, // Example height
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginBottom: 10, // Space below header
  },
  backButton: {
    padding: 10, // Gives a larger touchable area around the icon
  },
  backIcon: {
    width: 24, // Adjust size as needed
    height: 24, // Adjust size as needed
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15, // Space between icon and title
    color: '#333',
  },
});
