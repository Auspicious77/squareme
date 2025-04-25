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


const { height } = Dimensions.get('window');



const SuccessMessage: React.FC = () => {
 

    return (
        <>
            <SafeAreaView style={{...styles.container, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{...styles.body, marginTop: scale(180)}}>
                        {/* logo view */}
                        <View style={{ alignItems: 'center' }}>
                            <Image source={icons.mail} style={styles.image} />

                        </View>
                        {/* sign in view */}
                        <View style={styles.textView}>
                            <Text style={{ ...FONTS.mediumText, color: COLORS.black, fontSize: scale(20), textAlign: 'center' }}>Stay in the Loop!</Text>
                            <Text style={{ ...styles.descText, textAlign: 'center', marginTop: scale(14) }}>Get ready to be the first to know about all the cool stuff happening at Squareme! From new features and product updates to exclusive offers and insider tips, we’ll make sure you’re always ahead of the curve.
                            Excited to stay connected? Just hit the button below and let us keep you in the know!</Text>
                        </View>

                
                    </View>
                </ScrollView>
            </SafeAreaView>

            {/* footer */}
            <View style={styles.footer}>
                <Button
                    buttonStyle={{ marginTop: scale(60) }}
                    text='Yes, please'
                    onPress={()=> router.navigate('/(auth)/email-verification')} 
                    />
                    <TouchableOpacity>
                    <Text style={{ ...FONTS.regularText, color: COLORS.black, fontSize: scale(14), marginTop: scale(12), textAlign: 'center' }}>No, thank you</Text>

                    </TouchableOpacity>
            </View>
        </>
    );
};



export default SuccessMessage;
