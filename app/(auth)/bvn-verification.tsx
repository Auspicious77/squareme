
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
    bvn: any;
    referralCode: string
}

const BVNVerification: React.FC = () => {
    const [payload, setPayload] = useState<Payload>({
        bvn: '',
        referralCode: ''
    });

    return (
        <>
            <SafeAreaView style={styles.container}>
            <Header
                    title='Provide your BVN' />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.body}>
                     
                        {/* sign in view */}
                        <View style={{}}>
                        
                            <Text style={styles.descText}>Kindly provide your Bank Verification Number</Text>

                        </View>

                        {/* Input View */}

                        <View style={{ marginTop: scale(20) }}>
                            <Input
                                label='BVN'
                                value={payload.bvn}
                                phone={false}
                                placeholder=''
                                maxLenght={11}
                                onChangeText={(text: string) => setPayload({ ...payload, bvn: text })}
                            />
                        </View>

                        <BVNCriteria/>

                    </View>
                </ScrollView>
            </SafeAreaView>

            {/* footer */}
            <View style={styles.footer}>
                <Button
                    buttonStyle={{ marginTop: scale(60) }}
                    text='Submit' 
                    onPress={() => router.navigate('/(auth)/success-message')}
                    />
            </View>
        </>
    );
};





export default BVNVerification;
