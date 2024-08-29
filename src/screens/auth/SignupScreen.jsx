import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
const SignupScreen = () => {
    const [authType, setAuthType] = useState('email'); // 'email' or 'phone'
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const handleSignup = () => {
        if (password === confirmPassword) {
            // Handle signup logic here
            console.log('Signing up with', authType, emailOrPhone, password);
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.instruction}>Choose your authentication method:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={authType}
                    style={styles.picker}
                    onValueChange={(itemValue) => setAuthType(itemValue)}
                >
                    <Picker.Item label="Email" value="email" />
                    <Picker.Item label="Phone" value="phone" />
                </Picker>
            </View>
            <TextInput
                style={styles.input}
                placeholder={authType === 'email' ? 'Email Address' : 'Phone Number'}
                value={emailOrPhone}
                onChangeText={setEmailOrPhone}
                keyboardType={authType === 'email' ? 'email-address' : 'phone-pad'}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.link}>Already have an account? Log In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    instruction: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
        textAlign: 'center',
    },
    pickerContainer: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderColor: '#DDD',
        borderWidth: 1,
        marginBottom: 15,
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        width: '100%',
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: '#DDD',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        color: '#007BFF',
        textAlign: 'center',
    },
});

export default SignupScreen;
