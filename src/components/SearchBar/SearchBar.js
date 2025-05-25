/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */

import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/color';
import Button from '../Button/Button';
import {useNavigation} from '@react-navigation/native';

const SearchBar = ({onChange})  => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Button onPress={() => navigate.goBack()} style={styles.backButton}>
        <Text>Back</Text>
      </Button>
      <TextInput
        style={styles.textInput}
        placeholder='Search doctor..'
        clearButtonMode='always'
        autoCapitalize='none'
        onChangeText={onChange}
        autoCorrect={false} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY,
    flexDirection: 'row',
    borderRadius: 10,
    margin: 10,
    width: '95%',
    alignItems: 'center',
  },
  backButton: {
    paddingHorizontal: 10,
  },
  textInput: {
    width: '80%',
  },
});
