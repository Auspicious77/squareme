
import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { scale } from '@/lib/shared';
import { COLORS, FONTS, SIZES } from '@/constants/theme';

interface MoreCardProps {
    item: {
        title: string;
        desc: string;
        img: any;
        color?: any;
        onPress?: () => void;
    };
    index: number
}

const MoreCard: React.FC<MoreCardProps> = ({ item, index }) => {
    return (
    
        <TouchableOpacity onPress={item.onPress} style={{...styles.container, borderBottomWidth: index == 4 ? 0 : 0.8, paddingBottom: 10, borderBottomColor: COLORS.gray}}>
            <View style={{backgroundColor: item.color, paddingVertical: scale(6), borderRadius: 10, paddingHorizontal: scale(6)}}>
            <Image
                source={item.img}
                style={styles.image}
                resizeMode="contain"
            />

            </View>
          
            <View style={{marginLeft: scale(20), width: '75%'}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
            </View>
        </TouchableOpacity>
       

    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: scale(4),
        borderRadius: SIZES.base,
        marginHorizontal: scale(4),
        marginTop: scale(7),
        flexDirection: 'row',
        marginVertical: scale(10)

    },
    image: {
        height: scale(28),
        width: scale(28),
        marginBottom: 4,
    },
    title: {
        ...FONTS.mediumText,
        color: COLORS.black,
        fontSize: 19,
        textAlign: 'left',

    },
    desc: {
        ...FONTS.regularText,
        color: COLORS.black,
        fontSize: 15,
        textAlign: 'left',
        marginTop: scale(5)
    },
});

export default MoreCard;
