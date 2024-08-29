// MyOrders.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MyOrders = () => {
  const route = useRoute();
  const {
    city,
    loadType,
    vehicle,
    weightFrom,
    weightTo,
    date: dateString,
    locationFrom,
    locationTo,
    price,
    additionalInfo,
  } = route.params;

  const date = new Date(dateString); // Convert dateString back to Date object

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headertxt}>Order Details</Text>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>City:</Text>
        <Text style={styles.boxContent}>{city}</Text>
     
        <Text style={styles.boxTitle}>Load Type:</Text>
        <Text style={styles.boxContent}>{loadType}</Text>
        <Text style={styles.boxTitle}>Vehicle Type:</Text>
        <Text style={styles.boxContent}>{vehicle}</Text>
        <Text style={styles.boxTitle}>Estimated Load Weight:</Text>
        <Text style={styles.boxContent}>{`From ${weightFrom} to ${weightTo}`}</Text>
        <Text style={styles.boxTitle}>Location:</Text>
        <Text style={styles.boxContent}>{`From ${locationFrom} to ${locationTo}`}</Text>
        <Text style={styles.boxTitle}>Price:</Text>
        <Text style={styles.boxContent}>{price}</Text>
        <Text style={styles.boxTitle}>Additional Information:</Text>
        <Text style={styles.boxContent}>{additionalInfo}</Text>
        <Text style={styles.boxTitle}>Shipment Date:</Text>
        <Text style={styles.boxContent}>
          {`Selected Date: ${date.toLocaleDateString()} - Selected Time: ${date.toLocaleTimeString()}`}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  headertxt: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  box: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#dee2e6',
    borderWidth: 1,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#495057',
  },
  boxContent: {
    fontSize: 16,
    color: '#212529',
    marginTop: 5,
  },
});

export default MyOrders;
