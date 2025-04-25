import React from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import CustomHeader from '@/components/global/CustomHeader';
import icons from '@/constants/icons';
import ActionItems from '@/components/home/actionItems';
import { COLORS } from '@/constants/theme';


const HomeScreen: React.FC = () => {
    const quickActions = [
        { id: '1', img: icons.airtime, title: 'Fund', onPress: () => { } },
        { id: '2', img: icons.bus, title: 'Withdraw', onPress: () => { } },
        { id: '3', img: icons.airtime, title: 'Pay Bills', onPress: () => { } },
        { id: '4', img: icons.airtime, title: 'Cards', onPress: () => { } },
        { id: '5', img: icons.airtime, title: 'Sqaureme Pot', onPress: () => { } },
        { id: '6', img: icons.bus, title: 'Withdraw', onPress: () => { } },
        { id: '7', img: icons.airtime, title: 'Pay Bills', onPress: () => { } },
        { id: '8', img: icons.airtime, title: 'Cards', onPress: () => { } },
        { id: '9', img: icons.airtime, title: 'Sqaureme', onPress: () => { } },
    ]
    return (

        <View style={styles.container}>

            <CustomHeader/>

            {/* Quick actions */}
            <View style={styles.body}>
                <View style={styles.row}>
                    <Text style={styles.descText}>Quick Actions</Text>
                    <TouchableOpacity>
                        <Text style={{ ...styles.descText, color: COLORS.purple }}>See more</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={quickActions}
                    renderItem={({ item }) => <ActionItems item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={5}

                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>

    )

}

export default HomeScreen;