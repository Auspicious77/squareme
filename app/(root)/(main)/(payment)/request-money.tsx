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
import { router } from 'expo-router';

interface Payload {
    amount: number;
}

const RequestMoney: React.FC = () => {
    const [payload, setPayload] = useState<Payload>({ amount: 0 });
    const [formattedAmount, setFormattedAmount] = useState<string>('');
    const [selectedText, setSelectedText] = useState("");
    const bottomSheetRef = useRef<any>();
    const openBottomSheet = () => bottomSheetRef?.current?.open();
    const closeBottomSheet = () => bottomSheetRef?.current?.close();


    const handleKeyPress = (value: string) => {
        if (value === '<') {
            // Handle backspace
            const newAmountStr = formattedAmount.replace(/[^0-9]/g, '').slice(0, -1);
            updateAmount(newAmountStr);
        } else {
            // Handle numeric input
            const newAmountStr = formattedAmount.replace(/[^0-9]/g, '') + value;
            updateAmount(newAmountStr);
        }
    };

    const updateAmount = (amountStr: string) => {
        const numericValue = parseFloat(amountStr);
        if (!isNaN(numericValue)) {
            const formatted = numericValue.toLocaleString('en-US');
            setFormattedAmount(`₦ ${formatted}`);
            setPayload({ amount: numericValue });
        } else {
            setFormattedAmount('');
            setPayload({ amount: 0 });
        }
    };

    const CustomKeyboard = ({ onKeyPress }: { onKeyPress: (value: string) => void }) => {
        const keyboardValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '<'];

        return (
            <View style={styles.keyboardContainer}>
                <FlatList
                    data={keyboardValues}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => item && onKeyPress(item)}
                            style={item === '<' ? styles.deleteButton : styles.keyboardButton}
                        >
                            <Text style={item === '<' ? styles.deleteText : styles.keyboardText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    ListHeaderComponent={listHeaderComponent}

                />
            </View>
        );
    };

    const listHeaderComponent = () => {
        return (
            <View>
                <View style={styles.walletContainer}>
                    <Text style={{...styles.text1, fontSize: 16, marginBottom: 5, ...FONTS.regularText}}>Wallet Balance</Text>
                    <Text style={styles.text2}>{formattedAmountWithNaira(5000)}</Text>
                </View>

                <FormButton
                    buttonStyle={{ marginTop: scale(20) }}
                    fontSize={17}
                    text={selectedText ? selectedText : "Who do you want to request money from?"}
                    onPress={openBottomSheet}
                />

                <View style={{ alignSelf: 'center', marginVertical: scale(20) }}>
                    <CustomAmountInput
                        value={formattedAmount || ''}
                        editable={false}
                        placeholder="₦0.00"
                        onChangeText={() => {}}
                    />
                </View>

            </View>
        )
    }

    const data = [
        { id: '2', title: 'Request from beneficiary', iconName: 'account-multiple-plus' },
        { id: '3', title: 'Request using sqaureme tag', iconName: 'account-group' },
        { id: '4', title: 'Request from contact list', iconName: 'plus' }
    ]

    return (
        <SafeAreaView style={styles.page}>
            <StatusBar backgroundColor={COLORS.bg} barStyle="light-content" />
            <HeaderA />
            <View
                style={styles.body}>

                <CustomKeyboard onKeyPress={handleKeyPress} />

                <Button
                    text="Proceed"
                    disabled={!payload.amount || !selectedText}
                    onPress={() => router.navigate('/request-money-main')}
                />
            </View>

            <RBSheet
                ref={bottomSheetRef}
                height={SIZES.height * 0.4}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                    },
                    container: {
                        borderTopLeftRadius: SIZES.h5,
                        borderTopRightRadius: SIZES.h5,
                        paddingHorizontal: SIZES.width * 0.05,
                    },
                }}
            >
                <Text style={{ ...styles.text2, color: COLORS.black, fontSize: 17, paddingTop: scale(20), textAlign: 'left' }}>Who do you want to request from?</Text>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20, paddingTop: 15 }}
                    renderItem={({ item }: any) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    setSelectedText(item?.title);
                                    closeBottomSheet();
                                }}
                                style={styles.box}>
                                <View style={styles.circle}>
                                    <MaterialCommunityIcons name={item?.iconName} size={24} color="black" />

                                </View>
                                <Text style={{ marginLeft: SIZES.h4, ...FONTS.regularText, color: COLORS.black, flex: 1, fontSize: 18 }}>{item?.title}</Text>
                                <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
                            </TouchableOpacity>
                        )
                    }}
                />
            </RBSheet>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    keyboardContainer: {

    },
    keyboardButton: {
        width: SIZES.width * 0.3,
        height: 57,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.gray,
        marginBottom: SIZES.h2,
        marginTop: scale(20),

    },
    keyboardText: {
        ...FONTS.mediumText,
        color: '#BDBDBD',
        fontSize: 27
    },
    deleteButton: {
        width: SIZES.width * 0.3,
        height: 57,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.gray,
        marginBottom: scale(10),
        marginTop: scale(20)
    },
    deleteText: {
        fontSize: 27,
        color: COLORS.red,
    },
    walletContainer: {
        backgroundColor: '#9F56D41A',
        paddingVertical: scale(10),
        paddingHorizontal: scale(10),
        width: '50%',
        alignSelf: 'center',
        borderRadius: scale(14),
        marginTop: scale(25)

    },
    text1: {
        ...FONTS.mediumText,
        color: '#B7BABF',
        fontSize: scale(17),
        textAlign: 'center'

    },
    text2: {
        ...FONTS.mediumText,
        color: COLORS.white,
        fontSize: scale(20),
        textAlign: 'center'

    },



    page: {
        flex: 1,
        backgroundColor: COLORS.bg,
        paddingHorizontal: SIZES.width * 0.05,
        // paddingTop: scale(60),
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SIZES.padding * 2,
        marginTop: SIZES.h1 * 2,
    },
    otpInputBox: {
        width: SIZES.h1 * 2,
        height: SIZES.h1 * 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.4,
        borderColor: COLORS.gray,
        marginHorizontal: 10,
        borderRadius: SIZES.base,
    },
    otpValue: {
        ...FONTS.mediumText,
        color: COLORS.black,
    },
    body: {
        marginHorizontal: scale(15)
    },
    box: {
        height: SIZES.h1 * 1.6,
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: SIZES.base,
        marginTop: SIZES.h5 * 1.1,
        paddingHorizontal: SIZES.width * 0.03,
        backgroundColor: COLORS.white,
        borderBottomWidth: 0.9,
        borderColor: COLORS.gray300,
        paddingBottom: 5

    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCF4FE',
        paddingVertical: scale(7),
        paddingHorizontal: scale(7),
        borderRadius: 100
    }
});

export default RequestMoney;







