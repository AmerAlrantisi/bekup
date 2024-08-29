// BoxedItem.js
import React from 'react';
import { TouchableOpacity, ImageBackground, Image, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import plus from '../../assets/imgs/plus.png';

const BoxedItem = ({ imageSource, buttonText, destination }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(destination); // Navigate to the specified destination screen
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={handlePress}>
      <ImageBackground source={imageSource} style={styles.backgroundImage}>
        {/* Content inside ImageBackground */}
      </ImageBackground>
      <View style={styles.row}>
        <Text style={styles.text}>{buttonText}</Text>
        <Image source={plus} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 300,
    marginBottom: 50,
    borderRadius: 15,
    overflow: 'hidden',
    height: 250,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal:5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  icon: {
    width: 40,
    height: 40,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default BoxedItem;
