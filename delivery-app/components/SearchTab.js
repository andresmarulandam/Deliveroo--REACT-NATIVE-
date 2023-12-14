import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function SearchTab() {
  return (
    <View style={style.container}>
      <View style={style.searchContainer}>
        <EvilIcons name="search" size={24} color="gray" />
        <TextInput placeholder="Search Restaurants" keyboardType="default" />
      </View>
      <AntDesign name="filter" size={24} color="orange" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',

    margin: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E5E8E8',
    borderRadius: 16,
    alignItems: 'center',
  },
});
