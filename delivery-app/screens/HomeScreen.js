import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import CurrentLocationTab from '../components/CurrentLocationTab';
import { useNavigation } from '@react-navigation/native';
import SearchTab from '../components/SearchTab';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

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
          backgroundColor: 'white',
        }}
      >
        <Categories />
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying these discounts"
        />
        <FeaturedRow
          style={styles.lastFeaturedRow}
          id="3"
          title="Offers near you"
          description="Why noy support your local restaurant tonight?"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDEBD0',
    padding: 4,
  },
  lastFeaturedRow: {
    marginBottom: 8,
  },
});
