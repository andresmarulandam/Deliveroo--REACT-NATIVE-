import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function CurrentLocationTab() {
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.deliveryText}> Delivery Now!</Text>
          <Text style={styles.locationText}>
            Current Location
            <AntDesign name="down" size={20} color="black" />
          </Text>
        </View>

        <EvilIcons name="user" size={45} color="orange" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    paddingBottom: 3,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  deliveryText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'gray',
  },
  locationText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    height: 28,
    width: 28,
    borderRadius: 999,
    margin: 6,
  },
});
