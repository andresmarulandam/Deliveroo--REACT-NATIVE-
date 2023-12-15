import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function CategoryCard({ imageUrl, title }) {
  return (
    <TouchableOpacity style={styles.touchable}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 72,
    width: 72,
    borderRadius: 6,
  },
  text: {
    position: 'absolute',
    bottom: 1,
    left: 3,
    color: 'white',
    fontWeight: 'bold',
  },
  touchable: {
    position: 'relative',
    margin: 4,
  },
});
