// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import icon1 from '../../assets/imgs/van.png';
import icon2 from '../../assets/imgs/driver.png';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Text style={styles.headertxt}>Welcome to the Bekom Online App</Text>

        <View style={styles.mainbox}>
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AskForTruck')}>
            <Image style={styles.icon} source={icon1} />
          </TouchableOpacity>
          <Text style={styles.headertxt2}>Request a Truck</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('AvailableDrivers')}>
            <Image style={styles.icon} source={icon2} />
          </TouchableOpacity>
          <Text style={styles.headertxt2}>Contact a Driver</Text>
        </View>

   
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headertxt: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    marginVertical: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  pointsText: {
    fontSize: 18,
    marginRight: 10,
    width: 200,
  },
  pointsButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  pointsButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  headertxt2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    marginHorizontal: 28,
    alignSelf: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    paddingHorizontal: 100,
    paddingVertical: 100,
  },
  box: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 15,
  },
  mainbox: {
    marginVertical: 50,
  },
});

export default HomeScreen;
