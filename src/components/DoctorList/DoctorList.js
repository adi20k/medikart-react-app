import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {fetchDoctors} from '../../api/doctor';
import DoctorCard from './DoctorCard';
import {useNavigation} from '@react-navigation/native';

const DoctorList = ({horizontal}) => {
  const navigate = useNavigation();
  const {data, isLoading, error} = useQuery({
    queryKey: ['doctors'],
    queryFn: fetchDoctors,
  });
  console.log('data', data);
  return (
    <View style={styles.container}>
      {!horizontal && (
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            style={styles.backButton}>
            <Image
              source={require('../../assets/img/back.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Doctors</Text>
        </View>
      )}
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal={horizontal}
        numColumns={!horizontal && 2}
        columnWrapperStyle={
          !horizontal && {justifyContent: 'space-between', flex: 1, gap: 16}
        }
        style={styles.container}
        contentContainerStyle={{gap: 16}}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <DoctorCard key={item.id} horizontal={horizontal} {...item} />
        )}
      />
    </View>
  );
};

export default DoctorList;

const styles = StyleSheet.create({
  container: {padding: 8},
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
