import CustomHeader from '@/components/global/CustomHeader';
import Header from '@/components/global/Header';
import ActionItems from '@/components/home/actionItems';
import MoreCard from '@/components/more/MoreCard';
import icons from '@/constants/icons';
import { COLORS } from '@/constants/theme';
import { scale } from '@/lib/shared';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';


const More = () => {

    const quickActions = [
        { id: '1', img: icons.walletadd, title: 'Bill Payment', desc: 'Pay all your bills on squareme', onPress: () => { } },
        { id: '5', img: icons.strongbox2, title: 'Sqaureme Pot', desc: 'Lock your funds away and earn interests', onPress: () => { } },
        { id: '6', img: icons.airtime, title: 'Gift cards', desc: 'Lock your funds away and earn interests', onPress: () => { } },
        { id: '7', img: icons.wifi, title: 'Cards', desc: 'Virtual and physical debit cards', onPress: () => { } },
        { id: '8', img: icons.tv, title: 'Market place', desc: 'Find your favourite Fundr vendors for easy payments', onPress: () => { } },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Header
                back={true}
                title='More' />
                <View style={styles.body}>
                <FlatList
                    data={quickActions}
                    contentContainerStyle={{paddingBottom: scale(300)}}
                    renderItem={({ item, index }) => <MoreCard item={item} index={index} />}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />

                </View>



        </SafeAreaView>

    );
}

export default More

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    body: {
        marginHorizontal: scale(15)
    }


});
