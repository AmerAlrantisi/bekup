// UserTypeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserTypeScreen = () => {
    const navigation = useNavigation();

    const handleSelectClient = () => {
        navigation.navigate('LoginScreen');
    };

    const handleSelectDriver = () => {
        
        navigation.navigate('DriverLoginScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Your Role</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, styles.clientButton]} 
                    onPress={handleSelectClient}
                >
                    <Text style={styles.buttonText}>I am a Client</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, styles.driverButton]} 
                    onPress={handleSelectDriver}
                >
                    <Text style={styles.buttonText}>I am a Driver</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333',
    },
    buttonContainer: {
        width: '100%',
        maxWidth: 350,
        justifyContent: 'space-between',
    },
    button: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        elevation: 3,
    },
    clientButton: {
        backgroundColor: '#007BFF', // Blue color for client button
    },
    driverButton: {
        backgroundColor: '#28a745', // Green color for driver button
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default UserTypeScreen;
