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
import { router } from 'expo-router';


const { height } = Dimensions.get('window');

interface Payload {
    pin: any;
}

const SignIn: React.FC = () => {
    const [payload, setPayload] = useState<Payload>({
        pin: '',
    });

      
    const [value, setValue] = useState('')
    const handleCodeChange = (newValue: string) => {
        console.log('valueLLL:::', value)
        setValue(newValue);
    };


    return (
        <>
            <SafeAreaView style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.body}>
                        {/* logo view */}
                        <View style={styles.row}>
                            <Image source={images.logo2} style={styles.logo} />
                            <TouchableOpacity>
                            <AntDesign name="questioncircleo" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        {/* sign in view */}
                        <View style={styles.textView}>
                            <Text style={styles.titleText}>Welcome Back, John!</Text>
                            <Text style={styles.descText}>Enter your PIN to access your Squareme account</Text>

                        </View>

                        {/* Input View */}
                        <View style={{ marginTop: scale(20) }}>
                            <CodeFieldComponent
                                error={undefined}
                                value={value}
                                onChange={handleCodeChange}
                                success={undefined}
                            />
                            <TouchableOpacity>
                            <Text style={{ ...styles.signUpText, textAlign: 'center' }}>Forgot Pin?</Text>
                            </TouchableOpacity>

                        </View>



                    </View>
                </ScrollView>
            </SafeAreaView>
            {/* footer */}
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={icons.fingerprint} style={styles.img} />
                </TouchableOpacity>

                <Button
                    buttonStyle={{ marginTop: scale(60) }}
                    text='Login' 
                    onPress={()=> router.replace('/(root)/(tabs)/home')}
                    />
                <Text style={{ ...styles.descText, textAlign: 'center', marginTop: scale(10) }}>Not John? <Text onPress={()=> router.navigate('/(auth)/onboarding')} style={styles.signUpText}>Log out</Text></Text>
                <Text style={{ ...styles.descText, textAlign: 'center', marginTop: scale(10) }}>
                    v1.282.2
                </Text>


            </View>
        </>
    );
};



export default SignIn;
