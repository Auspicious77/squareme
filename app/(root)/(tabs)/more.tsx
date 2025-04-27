import AccountCard from '@/components/account/AccountCard';
import CustomHeader from '@/components/global/CustomHeader';
import Header from '@/components/global/Header';
import ActionItems from '@/components/home/actionItems';
import MoreCard from '@/components/more/MoreCard';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { scale } from '@/lib/shared';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';


const More = () => {
    const bottomSheetRef = useRef<any>();
    const openBottomSheet = () => bottomSheetRef?.current?.open();
    const closeBottomSheet = () => bottomSheetRef?.current?.close();

    const quickActions = [
        { id: '1', img: icons.receipt, title: 'Bill Payment', desc: 'Pay all your bills on squareme', onPress: openBottomSheet, color: 'rgba(241, 246, 254, 1)' },
        { id: '5', img: icons.strongbox2, title: 'Sqaureme Pot', desc: 'Lock your funds away and earn interests', onPress: () => { }, color: 'rgba(238, 238, 255, 1)' },
        { id: '6', img: icons.gift, title: 'Gift cards', desc: 'Lock your funds away and earn interests', onPress: () => { }, color: 'rgba(255, 242, 229, 1)' },
        { id: '7', img: icons.card, title: 'Cards', desc: 'Virtual and physical debit cards', onPress: () => { }, color: 'rgba(246, 240, 255, 1)' },
        { id: '8', img: icons.shop, title: 'Market place', desc: 'Find your favourite Fundr vendors for easy payments', onPress: () => { }, color: 'rgba(241, 242, 254, 1)'},
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Header
                back={true}
                title='More' />
            <View style={styles.body}>
                <FlatList
                    data={quickActions}
                    contentContainerStyle={{ paddingBottom: scale(300) }}
                    renderItem={({ item, index }) => <MoreCard item={item} index={index} />}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />

            </View>

            <RBSheet
                ref={bottomSheetRef}
                height={SIZES.height * 0.9}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                    },
                    container: {
                        borderTopLeftRadius: SIZES.h5,
                        borderTopRightRadius: SIZES.h5,
                        paddingHorizontal: SIZES.width * 0.05,
                        backgroundColor: COLORS.backGround
                    },
                }}
            >
                <View style={styles.sheetContainer}>
                    <TouchableOpacity onPress={closeBottomSheet}>
                        <AntDesign name="closecircleo" size={24} color="black" />
                    </TouchableOpacity>

                    {/* body */}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.text1}>Bill Payment</Text>
                        <View style={styles.cardView}>
                            <AccountCard
                                backGroundColor={COLORS.white}
                                canPreview={false}
                                titleSize={18}
                                color={'rgba(236, 243, 254, 1)'}
                                iconName={icons.mobile}
                                title='Reward'
                                message='Pay all your bills on squareme'
                                borderBottom={false}
                                onPress={() => { }}
                                messageSize={15}
                            />

                            <AccountCard
                                backGroundColor={COLORS.white}
                                canPreview={false}
                                titleSize={18}
                                color={'rgba(255, 242, 229, 1)'}
                                iconName={icons.light}
                                title='Purchase electricity units'
                                message='Stay connected by purchasing electricity units'
                                borderBottom={false}
                                tintColor={'rgba(249, 139, 78, 1)'}
                                onPress={() => { }}
                                messageSize={15}
                            />

                            <AccountCard
                                backGroundColor={COLORS.white}
                                canPreview={false}
                                titleSize={18}
                                color={'rgba(245, 235, 254, 1)'}
                                iconName={icons.monitor}
                                title='Subscribe your Cable TV'
                                message='Subscribe now for nonstop entertainment'
                                borderBottom={false}
                                onPress={() => { }}
                                messageSize={15}
                            />
                        </View>


                        <Text style={styles.text1}>Cards</Text>
                        <View style={styles.cardView}>
                            <AccountCard
                                backGroundColor={COLORS.white}
                                canPreview={false}
                                titleSize={18}
                                color={'rgba(246, 235, 254, 1)'}
                                iconName={icons.card}
                                title='Top up your virtual card'
                                message='Avoid failed transactions by topping up your card'
                                borderBottom={false}
                                onPress={() => { }}
                                messageSize={15}
                            />

                            <AccountCard
                                backGroundColor={COLORS.white}
                                canPreview={false}
                                titleSize={18}
                                color={'rgba(236, 243, 254, 1)'}
                                iconName={icons.truckfast}
                                title='Request a delivery address'
                                message='Stay connected by purchasing electricity units'
                                borderBottom={false}
                                tintColor={'rgba(57, 118, 232, 1)'}
                                onPress={() => { }}
                                messageSize={15}
                            />
                        </View>

                        <Text style={styles.text1}>Savings and Investment</Text>
                        <View style={styles.cardView}>
                            <AccountCard
                                backGroundColor={COLORS.white}
                                canPreview={false}
                                titleSize={18}
                                color={'rgba(238, 238, 255, 1)'}
                                iconName={icons.strongbox2}
                                title='Create POT'
                                message='Earn up to 14% interest on locked funds'
                                borderBottom={false}
                                onPress={() => { }}
                                messageSize={15}
                            />

                        </View>


                    </ScrollView>


                </View>

            </RBSheet>



        </SafeAreaView>

    );
}

export default More

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: Platform.OS == 'android'? scale(30): 0

    },
    body: {
        marginHorizontal: scale(15)
    },
    sheetContainer: {
        marginVertical: scale(20)
    },
    cardView: {
        backgroundColor: COLORS.white,
        marginTop: scale(15),
        borderRadius: 12,
        paddingHorizontal: scale(7),
        paddingBottom: 7
        // paddingVertical: scale(6)


    },
    text1: {
        ...FONTS.mediumText,
        fontSize: 18,
        color: COLORS.black,
        marginTop: scale(30)
    }


});
