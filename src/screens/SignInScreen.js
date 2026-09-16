import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import styles from './SignInScreen_styles';

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image
                    source={require('../../assets/logo1.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.heading}>Sign in</Text>

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

                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Your password"
                        placeholderTextColor="#9CA3AF"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons
                            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                            size={20}
                            color="#9CA3AF"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <View style={styles.rememberRow}>
                        <Switch
                            value={rememberMe}
                            onValueChange={setRememberMe}
                            trackColor={{ false: '#D1D5DB', true: '#5B5FEF' }}
                            thumbColor="#fff"
                        />
                        <Text style={styles.rememberText}>Remember Me</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('MainTabs')}>
                    <Text style={styles.signInText}>SIGN IN</Text>
                    <View style={styles.arrowCircle}>
                        <Ionicons name="arrow-forward" size={16} color="#5B5FEF" />
                    </View>
                </TouchableOpacity>

                <Text style={styles.orText}>OR</Text>

                <TouchableOpacity style={styles.socialButton}>
                    <AntDesign name="google" size={20} color="#EA4335" />
                    <Text style={styles.socialText}>Login with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-facebook" size={20} color="#1877F2" />
                    <Text style={styles.socialText}>Login with Facebook</Text>
                </TouchableOpacity>

                <View style={styles.signupRow}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signupLink}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}