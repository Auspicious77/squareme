import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, SafeAreaView, ScrollView, Platform } from 'react-native';
import { COLORS, FONTS, SCREEN_HEIGHT, SIZES } from '@/constants/theme';
import { formattedAmountWithNaira, scale } from '@/lib/shared';
import FormButton from '@/components/global/FormButton';
import CustomAmountInput from '@/components/global/CustomAmountInput';
import Button from '@/components/global/button';
import HeaderA from '@/components/global/HeaderA';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import Header from '@/components/global/Header';
import Input from '@/components/global/Input';
import { router } from 'expo-router';

interface Payload {
    amount: string;
    tag: string;
    purpose?: string

}

const ConfirmTransaction: React.FC = () => {
    const [payload, setPayload] = useState<Payload>({ amount: '', tag: '', purpose: '' });



    return (
        <>
            <SafeAreaView style={styles.page}>
                <StatusBar backgroundColor={COLORS.bg} barStyle="light-content" />
                <Header title='Confirm Transaction' />


                <View
                    style={styles.body}>
                    <View>
                        <Text style={styles.text1}>Please confirm the details before you proceed as your money cannot be reversed once processed. </Text>
                    </View>

                    <View style={styles.View}>
                        <Text style={{ ...FONTS.regularText, fontSize: scale(17), color: COLORS.white, marginTop: SIZES.base, }}>Amount</Text>
                        <Text style={{ ...FONTS.mediumText, color: COLORS.white, fontSize: scale(18), marginTop: SIZES.base }}>{formattedAmountWithNaira(50000)}</Text>
                    </View>

                    <View style={styles.View2}>
                        <View style={{ ...styles.row }}>
                            <Text style={{ ...FONTS.regularText, fontSize: scale(12), color: COLORS.black, }}>Beneficiary Number:</Text>
                            <Text style={{ ...FONTS.regularText, fontSize: scale(12), color: COLORS.black, }}>08027272722</Text>

                        </View>
                        <View style={{ width: '100%', height: 1, marginVertical: scale(20), backgroundColor: '#EFEFF1', alignSelf: 'center' }} />

                        <View style={{ ...styles.row }}>
                            <Text style={{ ...FONTS.regularText, fontSize: scale(12), color: COLORS.black, }}>Beneficiary</Text>
                            <Text style={{ ...FONTS.regularText, fontSize: scale(12), color: COLORS.black, }}>Mum</Text>

                        </View>

                    </View>

                </View>

            </SafeAreaView>

            <View style={styles.footer}>
                <Button
                    text='Cancel'
                    buttonStyle={{ width: '48%' }}
                    secondary
                />
                <Button
                    text='Confirm'
                    buttonStyle={{ width: '48%' }}
                    onPress={()=> router.navigate('/confirm-pin')}
                />
            </View>


        </>
    );
};


const styles = StyleSheet.create({

    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: Platform.OS == 'android'? scale(30): 0
       
    },
    text1: {
        ...FONTS.regularText,
        fontSize: 16,
        color: COLORS.black

    },

    body: {
        marginHorizontal: scale(15)
    },

    View: {
        height: SCREEN_HEIGHT * 0.11,
        width: '99%',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.base * 2.2,
        alignSelf: 'center',
        paddingVertical: SIZES.base,
        margin: scale(3),
        marginTop: scale(20),

    },


    View2: {
        width: '99%',
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        paddingHorizontal: SIZES.base * 2.2,
        paddingVertical: scale(20),
        margin: scale(3),
        marginTop: scale(20),


    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footer: {
        paddingHorizontal: scale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        paddingBottom: scale(40)
    }

});

export default ConfirmTransaction;







