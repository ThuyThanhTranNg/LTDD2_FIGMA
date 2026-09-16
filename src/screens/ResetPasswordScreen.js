import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './ResetPasswordScreen_styles';

export default function ResetPasswordScreen({ navigation }) {
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#111827" />
            </TouchableOpacity>

            <Text style={styles.heading}>Resset Password</Text>
            <Text style={styles.subheading}>
                Please enter your email address to request a password reset
            </Text>

            <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="abc@email.com"
                    placeholderTextColor="#9CA3AF"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <TouchableOpacity
                style={styles.sendButton}
                onPress={() => navigation.navigate('Verification')}
            >
                <Text style={styles.sendText}>SEND</Text>
                <View style={styles.arrowCircle}>
                    <Ionicons name="arrow-forward" size={16} color="#5B5FEF" />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}