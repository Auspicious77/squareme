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

const RequestMoneyMain: React.FC = () => {
    const [payload, setPayload] = useState<Payload>({ amount: '', tag: '', purpose: '' });

    return (
        <>
            <SafeAreaView style={styles.page}>
                <StatusBar backgroundColor={COLORS.bg} barStyle="light-content" />
                <Header title='Request' />
                <View
                    style={styles.body}>

                    <Input
                        label='Amount'
                        placeholder='₦ 500'
                        value={payload.amount}
                        keyboardType='numeric'
                        onChangeText={(text: string) => setPayload({ ...payload, amount: text })}
                    />
                    <Input
                        label='Enter recipient squareme tag'
                        placeholder='@'
                        value={payload.tag}
                        onChangeText={(text: string) => setPayload({ ...payload, tag: text })}
                    />

                    <Input
                        label='Add note (Optional)'
                        placeholder=''
                        value={payload.purpose}
                        textAlignVertical='top'
                        textAlign='top'
                        description
                        onChangeText={(text: string) => setPayload({ ...payload, purpose: text })}
                    />

                </View>

            </SafeAreaView>

            <View style={{ paddingHorizontal: scale(20), backgroundColor: COLORS.white, paddingBottom: scale(40) }}>
                <Button
                    text='Request Money'
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

export default RequestMoneyMain;







