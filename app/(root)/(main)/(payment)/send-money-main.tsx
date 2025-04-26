import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
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

const SendMoneyMain: React.FC = () => {
    const [payload, setPayload] = useState<Payload>({ amount: '', tag: '', purpose: '' });



    return (
        <>
            <SafeAreaView style={styles.page}>
                <StatusBar backgroundColor={COLORS.bg} barStyle="light-content" />
                <Header title='Send' />
                <View
                    style={styles.body}>
                    <Input
                        label='Enter squareme tag'
                        placeholder='@'
                        keyboardType='numeric'
                        value={payload.tag}
                        onChangeText={(text:string) => setPayload({...payload, tag:text})}
                    />

                    <Input
                        label='Purpose of sending (Optional)'
                        placeholder=''
                        value={payload.purpose}
                        onChangeText={(text:string) => setPayload({...payload, purpose:text})}
                    />

                    <Input
                        label='Amount'
                        placeholder='₦ 500'
                        value={payload.amount}
                        onChangeText={(text:string) => setPayload({...payload, amount:text})}
                    />





                </View>

            </SafeAreaView>

            <View style={{ paddingHorizontal: scale(20), backgroundColor: COLORS.white, paddingBottom: scale(40) }}>
                <Button
                    text='Send Money'
                    buttonStyle={{}}
                    disabled={!payload?.tag || !payload?.tag}
                    onPress={() => router.navigate('/confirm-transaction')}
                />
            </View>


        </>
    );
};


const styles = StyleSheet.create({

    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.05,
        // paddingTop: scale(60),
    },

    body: {
        marginHorizontal: scale(15)
    },

});

export default SendMoneyMain;







