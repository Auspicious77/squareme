
import { COLORS, FONTS, SCREEN_WIDTH, SIZES } from '@/constants/theme';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Keyboard, SafeAreaView, ImageBackground, Alert, TextInput } from 'react-native';
import { scale } from '@/lib/shared';
import CodeFieldComponent from '@/components/global/CodeFieldComponent';
// import { styles } from './styles';
import images from '@/constants/images';
import { AntDesign } from '@expo/vector-icons';
import icons from '@/constants/icons';
import Button from '@/components/global/button';
import Input from '@/components/global/Input';
import styles from './styles';
import { router } from 'expo-router';
import Header from '@/components/global/Header';
import BVNCriteria from '@/components/auth/BVNCriteria';



const { height } = Dimensions.get('window');

interface Payload {
    email: any;
    referralCode: string
}

const EmailVerification: React.FC = () => {
    const [payload, setPayload] = useState<Payload>({
        email: '',
        referralCode: ''
    });

    return (
        <>
            <SafeAreaView style={styles.container}>
            <Header title='Enter your email address' />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.body}>
                     
                        {/* sign in view */}
                        <View style={{}}>
                            <Text style={styles.descText}>Please enter your email address</Text>
                        </View>

                        {/* Input View */}
                        <View style={{ marginTop: scale(20) }}>
                            <Input
                                label='Email address'
                                value={payload.email}
                                placeholder=''
                                keyboardType={'email-address'}
                                onChangeText={(text: string) => setPayload({ ...payload, email: text })}
                            />
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>

            {/* footer */}
            <View style={styles.footer}>
                <Button
                    buttonStyle={{ marginTop: scale(60) }}
                    text='Submit' 
                    onPress={() => router.navigate('/(auth)/otp-verification')}
                    />
            </View>
        </>
    );
};





export default EmailVerification;
