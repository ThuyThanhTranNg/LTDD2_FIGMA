import React from 'react';
import { View, Image, StatusBar, TouchableOpacity } from 'react-native';
import styles from './SplashScreen_styles';

export default function SplashScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <TouchableOpacity onPress={() => navigation.navigate('Onboarding1')}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
}