
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


const { height } = Dimensions.get('window');

interface Payload {
    phone: any;
    referralCode: string
}

const SignUp: React.FC = () => {
    const [payload, setPayload] = useState<Payload>({
        phone: '',
        referralCode: ''
    });

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
                            <Text style={styles.titleText}>Create an account</Text>
                            <Text style={styles.descText}>Enter your phone number and we’ll send an SMS with a code to verify your phone number.</Text>

                        </View>

                        {/* Input View */}

                        <View style={{ marginTop: scale(20) }}>
                            <Input
                                label='Phone Number'
                                value={payload.phone}
                                iconName={icons.flag}
                                phone={true}
                                placeholder='080 918 9282 918'
                                onChangeText={(text: string) => setPayload({ ...payload, phone: text })}
                            />

                            <Input
                                label='Referral Code (Optional)'
                                value={payload.referralCode}
                                iconName={icons.flag}
                                phone={false}
                                onChangeText={(text: string) => setPayload({ ...payload, referralCode: text })}
                            />

                            <Text style={{ ...styles.descText, textAlign: 'left', marginTop: scale(10), fontSize: scale(12) }}>By Signing up, you accept to our <Text style={{...styles.signUpText, fontSize: scale(12) }}>Terms and Conditions</Text></Text>
                        </View>



                    </View>
                </ScrollView>
            </SafeAreaView>

            {/* footer */}
            <View style={styles.footer}>
                <Button
                    buttonStyle={{ marginTop: scale(60) }}
                    text='Next' 
                    onPress={() => router.navigate('/(auth)/verify-phone')}
                    />
                <Text style={{ ...styles.descText, textAlign: 'center', marginTop: scale(10) }}>Already have an account? <Text
                onPress={()=> router.navigate('/(auth)/sign-in')}
                 style={styles.signUpText}>Login here</Text></Text>


                <Text style={{ ...styles.descText, textAlign: 'center', marginTop: scale(10) }}>
                    v1.282.2
                </Text>


            </View>
        </>
    );
};





export default SignUp;
