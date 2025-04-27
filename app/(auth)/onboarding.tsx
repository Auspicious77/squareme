import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView, Platform } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import images from '../../constants/images';
import { scale } from '@/lib/shared';
import { router } from 'expo-router';
import { COLORS, FONTS, SCREEN_WIDTH, SIZES } from '@/constants/theme';
import Button from '@/components/global/button';



const { width, height } = Dimensions.get('window');


const slides = [
    {
        key: 'slide1',
        title: 'Spend your money easily \nwithout any complications',
        text: "Receive funds sent to you in seconds.",
        image: images.onboarding1,
    },
    {
        key: 'slide2',
        title: 'A super secure way to pay your bills',
        text: "Pay your bills with the cheapest rates in town.",
        image: images.onboarding2,
    },
    {
        key: 'slide3',
        title: 'A virtual USD card for your payments',
        text: "Shop globally. Renew your subscriptions with ease.",
        image: images.onboarding3,
    },
];

const Onboarding: React.FC = ({ }) => {
    const navigation = useNavigation();
    const sliderRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.goToSlide(currentIndex + 1, true);
        }
    };

    const onSlideChange = (index: number) => {
        setCurrentIndex(index);
    };

    const renderNextButton = () => {
        return (
            <View style={{ alignSelf: 'center', bottom: scale(30), width: SCREEN_WIDTH*0.9,}}>
                <View style={{ width: '100%' }}>
                    <Button 
                    text="Create an account" 
                    onPress={()=> router.navigate('/(auth)/sign-up')} />
                </View>

                <View style={{ width: '100%', marginTop: scale(10) }}>
                    <Button
                     secondary={true}
                     text="I already have an account" 
                     onPress={()=> router.navigate('/(auth)/sign-in')} />
                </View>
            </View>
        );
    };


    const renderDoneButton = () => {
        return (
            <View style={{ alignSelf: 'center', bottom: scale(30), width: SCREEN_WIDTH*0.9,}}>
                <View style={{ width: '100%' }}>
                    <Button text="Create an account" onPress={()=> router.navigate('/(auth)/sign-up')} />
                </View>

                <View style={{ width: '100%', marginTop: scale(10) }}>
                    <Button
                     secondary={true}
                     text="I already have an account" 
                     onPress={()=> router.navigate('/(auth)/sign-in')} />
                </View>
            </View>
        );
    };

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} resizeMode='cover' style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <AppIntroSlider
                ref={sliderRef}
                data={slides}
                renderItem={renderItem}
                activeDotStyle={styles.activeDot}
                dotStyle={styles.dot}
                renderNextButton={renderNextButton}
                renderDoneButton={renderDoneButton}
                onSlideChange={onSlideChange}
                bottomButton
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    slide: {
        backgroundColor: 'white',
    },
    image: {
        height: height * 0.54,
        width: width,
        resizeMode: 'cover',
       
    },
    textContainer: {
        marginHorizontal: SIZES.padding,
    },
    title: {
        ...FONTS.semiBoldText,
        color: COLORS.black,
        textAlign: 'center',
        lineHeight: scale(30),
        fontSize: 25,
        marginTop: scale(40),
        width: '85%',
        alignSelf: 'center'
    },
    text: {
        ...FONTS.regularText,
        color: '#57595A',
        textAlign: 'center',
        marginTop: SIZES.base,
        fontSize: scale(13)
    },
    dot: {
        backgroundColor: COLORS.gray,
        width: 28,
        height: 6,
        borderRadius: 5,
        bottom: Platform.OS == 'ios'? SIZES.padding * 7.9: SIZES.padding*9.6,
        transform: [{ translateX: -5 }],
    },

    activeDot: {
        backgroundColor: COLORS.primary,
        width: 28,
        alignSelf: 'center',
        height: 6,
        borderRadius: 5,
        bottom: Platform.OS == 'ios'? SIZES.padding * 7.9: SIZES.padding*9.6,
        transform: [{ translateX: -5 }],
    },

    buttonView2: {
        marginHorizontal: SIZES.padding * 5,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        ...FONTS.mediumText,
        color: COLORS.black,
    },
});

export default Onboarding;
