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

const SecurityPin: React.FC = () => {
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
                    title="PIN Created Successful!"
                    description="You have successfully created your security pin."
                    buttonText="Continue"
                    onPress={() => {
                        router.navigate('/(auth)/bvn-verification')
                        setShowSuccess(false);
                        
                    }}
                />
                <Header
                    title='Set your security pin' />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.body}>

                        {/* sign in view */}
                        <View style={styles.textView}>
                            <Text style={{ ...styles.descText, textAlign: 'center' }}>Set a six (6) digit pin that you would use for all transactions</Text>

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
                    onPress={() => setShowSuccess(true)} />
            </View>
        </>
    );
};



export default SecurityPin;
