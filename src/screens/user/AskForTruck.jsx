// AskForTruck.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomDropdown from '../../components/user/CustomDropdown';

const AskForTruck = ({ navigation }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedLoadType, setSelectedLoadType] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [weightFrom, setWeightFrom] = useState('');
  const [weightTo, setWeightTo] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [locationFrom, setLocationFrom] = useState('');
  const [locationTo, setLocationTo] = useState('');
  const [price, setPrice] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const cities = [
    { label: 'Amman', value: 'Amman' },
    { label: 'Zarqa', value: 'Zarqa' },
    { label: 'Irbid', value: 'Irbid' },
    { label: 'Aqaba', value: 'Aqaba' },
  ];

  const loadTypes = [
    { label: 'Furniture', value: 'Furniture' },
    { label: 'Construction', value: 'Construction' },
    { label: 'Supplies', value: 'Supplies' },
  ];

  const vehicles = [
    { label: 'Small Truck', value: 'Small Truck' },
    { label: 'Medium Truck', value: 'Medium Truck' },
    { label: 'Large Truck', value: 'Large Truck' },
  ];

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || date;
    setShowTimePicker(false);
    setDate(currentTime);
  };

  const handleSubmit = () => {
    navigation.navigate('MyOrders', {
      city: selectedCity,
      loadType: selectedLoadType,
      vehicle: selectedVehicle,
      weightFrom,
      weightTo,
      date: date.toISOString(), // Convert date to ISO string
      locationFrom,
      locationTo,
      price,
      additionalInfo,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}></View>
        <Text style={styles.headertxt}>Request a Truck</Text>

        <CustomDropdown
          label="Select City:"
          data={cities}
          selectedValue={selectedCity}
          setSelectedValue={setSelectedCity}
          placeholder="Select City"
        />

        <CustomDropdown
          label="Select Load Type:"
          data={loadTypes}
          selectedValue={selectedLoadType}
          setSelectedValue={setSelectedLoadType}
          placeholder="Select Load Type"
        />

        <CustomDropdown
          label="Select Vehicle Type:"
          data={vehicles}
          selectedValue={selectedVehicle}
          setSelectedValue={setSelectedVehicle}
          placeholder="Select Vehicle Type"
        />

        <View style={styles.weightContainer}>
          <Text style={styles.label}>Estimated Load Weight (From - To):</Text>
          <View style={styles.weightInputContainer}>
            <TextInput
              style={styles.weightInput}
              placeholder="From"
              value={weightFrom}
              onChangeText={setWeightFrom}
              keyboardType="numeric"
            />
            <Text style={styles.toText}>To</Text>
            <TextInput
              style={styles.weightInput}
              placeholder="To"
              value={weightTo}
              onChangeText={setWeightTo}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.locationContainer}>
          <Text style={styles.label}>Location:</Text>
          <View style={styles.locationInputContainer}>
            <TextInput
              style={styles.locationInput}
              placeholder="From"
              value={locationFrom}
              onChangeText={setLocationFrom}
            />
            <TextInput
              style={styles.locationInput}
              placeholder="To"
              value={locationTo}
              onChangeText={setLocationTo}
            />
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.label}>Price:</Text>
          <TextInput
            style={styles.priceInput}
            placeholder="Enter Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.additionalInfoContainer}>
          <Text style={styles.label}>Additional Information:</Text>
          <TextInput
            style={styles.additionalInfoInput}
            placeholder="Enter additional information here"
            value={additionalInfo}
            onChangeText={setAdditionalInfo}
            multiline
          />
        </View>

        <View style={styles.dateTimeContainer}>
          <Text style={styles.label}>Shipment Date:</Text>
          <View style={styles.dateTimeButtons}>
            <TouchableOpacity style={styles.dateTimeButton} onPress={() => setShowDatePicker(true)}>
              <Text style={styles.dateTimeButtonText}>Select Date</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateTimeButton} onPress={() => setShowTimePicker(true)}>
              <Text style={styles.dateTimeButtonText}>Select Time</Text>
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
          {showTimePicker && (
            <DateTimePicker
              value={date}
              mode="time"
              display="default"
              onChange={onTimeChange}
            />
          )}
          <Text style={styles.selectedDateTime}>
            {`Selected Date: ${date.toLocaleDateString()} - Selected Time: ${date.toLocaleTimeString()}`}
          </Text>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Request</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headertxt: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  weightContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  weightInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weightInput: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 5,
    fontSize: 16,
  },
  toText: {
    fontSize: 16,
    color: 'black',
  },
  locationContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  locationInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationInput: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal: 5,
    fontSize: 16,
  },
  priceContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  priceInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  additionalInfoContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  additionalInfoInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  dateTimeContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  dateTimeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateTimeButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  dateTimeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedDateTime: {
    fontSize: 16,
    color: 'black',
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AskForTruck;
