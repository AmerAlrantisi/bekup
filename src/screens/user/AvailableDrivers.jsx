import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DriverItem from '../../components/user/DriverItem';
import driverImage from '../../assets/imgs/driver.jpg';

const AvailableDrivers = ({ navigation }) => {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: 'John Doe',
      image: driverImage,
      description: '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci aut hic beatae asperiores iusto sint consequuntur itaque, incidunt nostrum temporibus ullam modi? Suscipit in ex sint nihil deserunt aperiam.',
      rating: 4.5,
      phoneNumber: '123-456-7890',
      images: [driverImage, driverImage, driverImage],
      feedback: [
        'Great driver, very professional.',
        'Arrived on time and was very courteous.',
        'Had a pleasant journey, highly recommend.',
      ],
      city: 'New York',
      coveredCities: ['Brooklyn', 'Manhattan', 'Queens'],
      isActive: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: driverImage,
      description: 'Friendly and reliable driver.',
      rating: 4.7,
      phoneNumber: '234-567-8901',
      images: [driverImage, driverImage, driverImage],
      feedback: [
        'Amazing service, very satisfied.',
        'Jane was very helpful and polite.',
        'Would definitely use her services again.',
      ],
      city: 'Los Angeles',
      coveredCities: ['Downtown', 'Hollywood', 'Santa Monica'],
      isActive: false,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      image: driverImage,
      description: 'Safe driver with excellent customer service skills.',
      rating: 4.6,
      phoneNumber: '345-678-9012',
      images: [driverImage, driverImage, driverImage],
      feedback: [
        'Bob was fantastic, very friendly.',
        'Great experience, Bob was very punctual.',
        'Highly recommend Bob for any trips.',
      ],
      city: 'Chicago',
      coveredCities: ['North Side', 'South Side', 'West Side'],
      isActive: true,
    },
  ]);
  

  const handleDriverPress = (driver) => {
    navigation.navigate('DriverProfileScreen', { driver });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headertxt}>Available Drivers</Text>
        {drivers.map(driver => (
          <DriverItem
            key={driver.id}
            driver={driver}
            onPress={() => handleDriverPress(driver)}
            isActive={driver.isActive}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  headertxt: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
});

export default AvailableDrivers;
