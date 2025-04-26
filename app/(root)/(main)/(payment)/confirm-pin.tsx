import { COLORS, FONTS, SCREEN_WIDTH, SIZES } from '@/constants/theme';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, Keyboard, SafeAreaView, ImageBackground, Alert } from 'react-native';
import { scale } from '@/lib/shared';
import CodeFieldComponent from '@/components/global/CodeFieldComponent';
import images from '@/constants/images';
import { AntDesign } from '@expo/vector-icons';
import icons from '@/constants/icons';
import Button from '@/components/global/button';
import Header from '@/components/global/Header';
import { router } from 'expo-router';
import SuccessModal from '@/components/modal/success-modal';
import styles from '@/app/(auth)/styles';



const { height } = Dimensions.get('window');

interface Payload {
    pin: any;
}

const ConfirmPin: React.FC = () => {
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
                    title="Transaction Successful!"
                    description="You have successfully sent  NGN 2,000.00 to Aderinsola. The recipient should get an alert shortly"
                    buttonText="Continue"
                    onPress={() => {
                        router.navigate('/payment')
                        setShowSuccess(false);
                        
                    }}
                />
                <Header
                    title='Enter your security PIN' />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.body}>

                        {/* sign in view */}
                        <View>
                            <Text style={{ ...styles.descText, textAlign: 'left' }}>Enter your PIN to continue. Do not share your PIN with anyone,</Text>

                        </View>

                        {/* Input View */}
                        <View style={{ marginTop: scale(20) }}>
                            <CodeFieldComponent
                                error={undefined}
                                value={value}
                                onChange={handleCodeChange}
                                success={undefined}

                            />
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



export default ConfirmPin;
