import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Onboarding1Screen_styles';

export default function Onboarding1Screen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    source={require('../../assets/onboarding1-bg.png')}
                    style={styles.bgImage}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.card}>
                <SafeAreaView edges={['bottom']}>
                    <Text style={styles.title}>Explore Upcoming and{'\n'}Nearby Events</Text>
                    <Text style={styles.subtitle}>
                        In publishing and graphic design, Lorem is a placeholder text commonly
                    </Text>

                    <View style={styles.bottomRow}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.skipText}>Skip</Text>
                        </TouchableOpacity>

                        <View style={styles.dotsContainer}>
                            <View style={[styles.dot, styles.dotActive]} />
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.nextText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    );
}