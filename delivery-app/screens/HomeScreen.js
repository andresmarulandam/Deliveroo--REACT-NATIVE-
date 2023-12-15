import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import CurrentLocationTab from '../components/CurrentLocationTab';
import { useNavigation } from '@react-navigation/native';
import SearchTab from '../components/SearchTab';
import Categories from '../components/Categories';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <CurrentLocationTab />
      <SearchTab />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 8,
          backgroundColor: 'white',
        }}
      >
        <Categories />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDEBD0',
    padding: 4,
  },
});
