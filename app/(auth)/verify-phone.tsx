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

const VerifyPhone: React.FC = () => {
    const [payload, setPayload] = useState<Payload>({
        pin: '',
    });
    const [showSuccess, setShowSuccess] = useState<boolean>(false);



    const [value, setValue] = useState('')
    const handleCodeChange = (newValue: string) => {
        console.log('valueLLL:::', value)
        setValue(newValue);
    };


    return (
        <>
            <SafeAreaView style={styles.container}>
            <SuccessModal
                    visible={showSuccess}
                    title="Verification Successful!"
                    description="Your phone number has been verified successfully."
                    buttonText="Continue"
                    onPress={() => {
                        router.navigate('/(auth)/security-pin')
                        setShowSuccess(false);
                        
                    }}
                />
                <Header
                    title='Verify your phone number' />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.body}>
                        {/* logo view */}
                        <View style={{ alignItems: 'center' }}>
                            <Image source={images.airplane} style={styles.image} />

                        </View>
                        {/* sign in view */}
                        <View style={styles.textView}>
                            <Text style={{ ...styles.titleText, fontSize: scale(15), textAlign: 'center' }}>Check your WhatsApp</Text>
                            <Text style={{ ...styles.descText, textAlign: 'center' }}>Please input the five (5) digit code that was sent to your Whatsapp below</Text>

                        </View>

                        {/* Input View */}
                        <View style={{ marginTop: scale(20) }}>
                            <CodeFieldComponent
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
                    text='Verify'
                    onPress={()=> setShowSuccess(true)} />
            </View>
        </>
    );
};



export default VerifyPhone;
