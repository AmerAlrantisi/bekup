// DriverLoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const DriverLoginScreen = () => {
    const [loginMethod, setLoginMethod] = useState('email');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        if (!password || (loginMethod === 'email' && !email) || (loginMethod === 'phone' && !phone)) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        // Handle driver login logic here
        Alert.alert('Success', 'Logged in successfully!');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Driver Login</Text>

            <Picker
                selectedValue={loginMethod}
                onValueChange={(itemValue) => setLoginMethod(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Login with Email" value="email" />
                <Picker.Item label="Login with Phone" value="phone" />
            </Picker>

            {loginMethod === 'email' ? (
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            ) : (
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />
            )}
            
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={() => navigation.navigate('DriverSignupScreen')}>
                <Text style={styles.signupLink}>Don't have an account? Sign Up</Text>
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
    picker: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: '#fff',
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
    link: {
        fontSize: 16,
        color: '#007bff',
        textAlign: 'center',
        marginTop: 20,
    },
    signupLink: {
        fontSize: 16,
        color: '#007bff',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
    },
});

export default DriverLoginScreen;
