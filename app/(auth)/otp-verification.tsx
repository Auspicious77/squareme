import { COLORS, FONTS, SCREEN_WIDTH, SIZES } from '@/constants/theme';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Keyboard, SafeAreaView, ImageBackground, Alert } from 'react-native';
import { scale } from '@/lib/shared';
import CodeFieldComponent from '@/components/global/CodeFieldComponent';
import styles from './styles';
import images from '@/constants/images';
import { AntDesign } from '@expo/vector-icons';
import icons from '@/constants/icons';
import Button from '@/components/global/button';
import Header from '@/components/global/Header';
import { router } from 'expo-router';
import SuccessModal from '@/components/modal/success-modal';



const { height } = Dimensions.get('window');

interface Payload {
    pin: any;
}

const OtpVerification: React.FC = () => {
    const [payload, setPayload] = useState<Payload>({
        pin: '',
    });
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [value, setValue] = useState('')
    const handleCodeChange = (newValue: string) => {
        setValue(newValue);
    };



    return (
        <>

            <SafeAreaView style={styles.container}>
                <SuccessModal
                    visible={showSuccess}
                    title="Email added Successful!"
                    description="Your email address has been added successfully."
                    buttonText="Continue"
                    onPress={() => {
                        router.replace('/(root)/(tabs)/home');
                        setShowSuccess(false);

                    }}
                />
                <Header
                    title='Verify your email address' />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.body}>

                        {/* sign in view */}
                        <View style={{}}>
                            <Text style={{ ...styles.descText, textAlign: 'left' }}>Please input the five (5) digit code that was sent to your email address below</Text>

                        </View>

                        {/* Input View */}
                        <View style={{ marginTop: scale(20) }}>
                            <CodeFieldComponent
                                boxNumber={5}
                                error={undefined}
                                value={value}
                                onChange={handleCodeChange}
                                success={undefined}
                            />

                            <View style={styles.row}>
                                <Text style={{ ...styles.signUpText, textAlign: 'center' }}>30:00</Text>
                                <TouchableOpacity>
                                    <Text style={{ ...styles.signUpText, textAlign: 'center' }}>Resend code</Text>
                                </TouchableOpacity>

                            </View>
                        </View>



                    </View>
                </ScrollView>
            </SafeAreaView>
            {/* footer */}
            <View style={styles.footer}>
                <Button
                    buttonStyle={{ marginTop: scale(60) }}
                    text='Continue'
                    disabled={!value}
                    onPress={() => setShowSuccess(true)} />
            </View>
        </>
    );
};



export default OtpVerification;
