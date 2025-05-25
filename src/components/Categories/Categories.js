/* eslint-disable react/no-unstable-nested-components */
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useCallback, useState } from 'react';
import {symptomsList} from './constants';
import { COLORS } from '../../styles/color';

const Categories = ({onChangeCategory}) => {

const [selected,setSelected] =useState(0);

const onPress =useCallback( (index)=>{
    setSelected(index);
    onChangeCategory &&  onChangeCategory(index);
},[onChangeCategory]);
  const RenderItem = ({name, description,index}) => {
    return <TouchableOpacity style={[styles.categoryItem,index=== selected?{backgroundColor:COLORS.PRIMARY}:{}]}
    onPress={()=>onPress(index)}>
        <Text style={index=== selected && {color:COLORS.SECONDARY}}>{name}</Text>
    </TouchableOpacity>;
  };
  return (
    <View>
      <FlatList
        data={symptomsList}
        horizontal={true}
        style={styles.flatList}
        contentContainerStyle={{gap:8}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => <RenderItem {...item} index={index} key={index}/>}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  flatList: {padding: 10},
  categoryItem:{
    backgroundColor:'#E9E9Fe',
    padding:10,
    borderRadius:8,
    alignSelf:'center',
  }
});
