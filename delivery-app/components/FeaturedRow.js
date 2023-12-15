import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';

export default function FeaturedRow({ id, title, description }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <EvilIcons name="arrow-right" size={32} color="orange" />
      </View>
      <Text style={styles.description}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        style={styles.scrollview}
      >
        <RestaurantCard
          imageUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="Street 123"
        />
        <RestaurantCard
          imageUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="Street 123"
        />
        <RestaurantCard
          imageUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="Street 123"
        />
        <RestaurantCard
          imageUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="Street 123"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    marginTop: 4,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    paddingHorizontal: 4,
    margin: 4,
  },
  scrollview: {
    paddingTop: 4,
  },
});
