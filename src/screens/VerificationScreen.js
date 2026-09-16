import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './VerificationScreen_styles';

export default function VerificationScreen({ navigation }) {
    const [code, setCode] = useState(['', '', '', '']);
    const [seconds, setSeconds] = useState(20);
    const inputs = useRef([]);

    useEffect(() => {
        if (seconds === 0) return;
        const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
        return () => clearInterval(timer);
    }, [seconds]);

    const handleChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const formatTime = (s) => `0:${s.toString().padStart(2, '0')}`;

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#111827" />
            </TouchableOpacity>

            <Text style={styles.heading}>Verification</Text>
            <Text style={styles.subheading}>
                We've send you the verification code on +1 2620 0323 7631
            </Text>

            <View style={styles.codeRow}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputs.current[index] = ref)}
                        style={[styles.codeBox, digit !== '' && styles.codeBoxFilled]}
                        value={digit}
                        onChangeText={(text) => handleChange(text.replace(/[^0-9]/g, ''), index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        keyboardType="number-pad"
                        maxLength={1}
                    />
                ))}
            </View>

            <TouchableOpacity
                style={styles.continueButton}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.continueText}>CONTINUE</Text>
                <View style={styles.arrowCircle}>
                    <Ionicons name="arrow-forward" size={16} color="#5B5FEF" />
                </View>
            </TouchableOpacity>

            <View style={styles.resendRow}>
                <Text style={styles.resendText}>Re-send code in </Text>
                {seconds > 0 ? (
                    <Text style={styles.resendTime}>{formatTime(seconds)}</Text>
                ) : (
                    <TouchableOpacity onPress={() => setSeconds(20)}>
                        <Text style={styles.resendLink}>Resend</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
}