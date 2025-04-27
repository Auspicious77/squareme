import React, { useState } from 'react';
import { Dimensions, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import CustomHeader from '@/components/global/CustomHeader';
import icons from '@/constants/icons';
import ActionItems from '@/components/home/actionItems';
import { COLORS, SCREEN_WIDTH } from '@/constants/theme';
import { scale } from '@/lib/shared';
import TransactionCard from '@/components/home/TransactionCard';
import { MaterialIcons } from '@expo/vector-icons';
import images from '@/constants/images';
import MoreActions from '@/components/home/moreActions';
import styles from '../(main)/(home)/styles';



const { width } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
    const [showAll, setShowAll] = useState(false);


    const quickActions = [
        { id: '1', img: icons.walletadd, title: 'Fund', onPress: () => { } },
        { id: '2', img: icons.walletminus, title: 'Withdraw', onPress: () => { } },
        { id: '3', img: icons.receipt, title: 'Pay Bills', onPress: () => { } },
        { id: '4', img: icons.card, title: 'Cards', onPress: () => { } },
        { id: '5', img: icons.strongbox2, title: 'Squareme \nPot', onPress: () => { } },
        { id: '6', img: icons.airtime, title: 'Airtime', onPress: () => { } },
        { id: '7', img: icons.wifi, title: 'Data', onPress: () => { } },
        { id: '8', img: icons.tv, title: 'Cable TV', onPress: () => { } },
        { id: '9', img: icons.light, title: 'Utility', onPress: () => { } },
    ]

    const data = [
        { id: '1', date: 'August 07, 06:03 AM', type: 'debit', title: 'Withdrawal to bank', amount: 5000, status: 'Successful' },
        { id: '2', date: 'August 07, 06:03 AM', type: 'credit', title: 'You funded your wallet', amount: 12400, status: 'Failed' },

    ];

    const moreActions = [
        { id: '1', img: images.piggybank, title: 'Earn up to 14% interest on your locked funds', onPress: () => { } },
        { id: '2', img: images.piggy, title: 'Speed up your bills payments', onPress: () => { } },
   
    ]

    const displayedActions = showAll ? quickActions : quickActions.slice(0, 5);

    const listHeaderComponent = () => {
        return (
            <View>
                
                 <View style={{...styles.row,}}>
                    <Text style={styles.descText}>Quick Actions</Text>
                    <TouchableOpacity onPress={() => setShowAll(prev => !prev)}>
                        <Text style={{ ...styles.descText, color: COLORS.purple }}>
                            {showAll ? 'See less' : 'See more'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const listFooterComponent = () => {
        return (
            <View>
                 <View style={{ ...styles.row, marginTop: scale(27) }}>
                    <Text style={styles.descText}>Transactions</Text>
                    <TouchableOpacity >
                        <Text style={{ ...styles.descText, color: COLORS.purple }}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.transactionContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={({ item }) => <TransactionCard item={item} />}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{}}
                    />

                    <TouchableOpacity style={styles.seeMore}>
                        <Text style={{ ...styles.descText, fontSize: scale(12), color: COLORS.purple }}>
                            See more
                        </Text>
                        <MaterialIcons name="keyboard-arrow-right" size={18} color="black" />
                    </TouchableOpacity>

                </View>

                <View style={{ ...styles.row, marginTop: scale(30) }}>
                    <Text style={styles.descText}>Suggested actions</Text>
                </View>

                <FlatList
                    data={moreActions}
                    renderItem={({ item, index }) => <MoreActions item={item} index={index} />}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    decelerationRate="fast"
                    pagingEnabled={false}
                />

            </View>
        )
    }

    return (
        <View style={styles.container}>
             <CustomHeader />
            {/* Quick actions */}
            <View style={styles.body}>
                <FlatList
                    data={displayedActions}
                    ListHeaderComponent={listHeaderComponent}
                    contentContainerStyle={{paddingBottom: scale(300)}}
                    renderItem={({ item }) => <ActionItems item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={5}
                    ListFooterComponent={listFooterComponent}
                />
            </View>
        </View>

    )

}

export default HomeScreen;