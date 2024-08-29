// DriverSignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const DriverSignupScreen = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [licenseExpiry, setLicenseExpiry] = useState('');
    const [address, setAddress] = useState('');
    const [insurance, setInsurance] = useState('');
    const [vanModel, setVanModel] = useState('');
    const [vanRegNumber, setVanRegNumber] = useState('');

    const handleSignup = () => {
        if (!name || !phone || !email || !dob || !licenseNumber || !licenseExpiry || !address || !insurance || !vanModel || !vanRegNumber) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        // Handle driver signup logic here
        Alert.alert('Success', 'Driver registered successfully!');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Driver Signup</Text>

            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Date of Birth (YYYY-MM-DD)"
                value={dob}
                onChangeText={setDob}
            />
            <TextInput
                style={styles.input}
                placeholder="License Number"
                value={licenseNumber}
                onChangeText={setLicenseNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="License Expiry Date (YYYY-MM-DD)"
                value={licenseExpiry}
                onChangeText={setLicenseExpiry}
            />
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
            />
            <TextInput
                style={styles.input}
                placeholder="Insurance Details"
                value={insurance}
                onChangeText={setInsurance}
            />
            <TextInput
                style={styles.input}
                placeholder="Van Model"
                value={vanModel}
                onChangeText={setVanModel}
            />
            <TextInput
                style={styles.input}
                placeholder="Van Registration Number"
                value={vanRegNumber}
                onChangeText={setVanRegNumber}
            />

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
        elevation: 3,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default DriverSignupScreen;
