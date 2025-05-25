import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {COLORS} from '../../styles/color';
import SearchBar from '../../components/SearchBar/SearchBar';
import Button from '../../components/Button/Button';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const onChange = useCallback(text => {
    console.log('Search text:', text);
    setSearchText(text);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar onChange={onChange} />
      </View>
      <View style={styles.subContainer}>
        <Text>Recent Searches</Text>
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY,
  },
  searchContainer: {
    backgroundColor: COLORS.PRIMARY,
    height: 65,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  clearText: {color: COLORS.PRIMARY, fontWeight: 'bold'},
});
