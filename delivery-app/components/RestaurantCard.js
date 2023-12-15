import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function RestaurantCard({
  imageUrl,
  title,
  rating,
  genre,
  address,
}) {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ratingContainer}>
          <AntDesign style={styles.star} name="staro" size={20} color="black" />
          <Text style={styles.ratingText}>
            {rating} - {genre}
          </Text>
        </View>
        <View style={styles.locationContainer}>
          <EvilIcons
            style={styles.location}
            name="location"
            size={24}
            color="black"
          />
          <Text style={styles.addressText}>Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FDEBD0',
    borderRadius: 4,
    elevation: 10,
    marginRight: 8,
  },
  image: {
    height: 100,
    width: 200,
    borderRadius: 8,
    margin: 4,
  },
  container: {
    paddingBottom: 16,
    paddingHorizontal: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 4,
    backgroundColor: '#FDEBD0',
  },
  star: {
    opacity: 0.5,
  },
  location: {
    opacity: 0.5,
  },
  locationContainer: {
    flexDirection: 'row',
    backgroundColor: '#FDEBD0',
    justifyContent: 'flex-start',
    padding: 4,
  },
  addressText: {
    color: 'black',
    fontSize: 12,
  },
  ratingText: {
    color: 'black',
    fontSize: 12,
  },
});
