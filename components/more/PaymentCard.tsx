
import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View, ImageStyle } from 'react-native';
import { scale } from '@/lib/shared';
import { COLORS, FONTS, SIZES } from '@/constants/theme';

interface PaymentCardProps {
  
        title: string;
        desc: string;
        backGroundColor?: any;
        iconName?: any
        tintColor?: any;
        onPress?: () => void;
        borderWidth?: boolean

}

const PaymentCard: React.FC<PaymentCardProps> = ({ title, desc, backGroundColor, iconName, tintColor, borderWidth, onPress }) => {
    return (
        <>
        <TouchableOpacity onPress={onPress} style={{...styles.container, paddingBottom: 5,}}>
            <View style={{backgroundColor: backGroundColor, paddingVertical: scale(8), paddingHorizontal: scale(8), alignItems: 'center', justifyContent: 'center', borderRadius: 15}}>
            <Image
                source={iconName}
                style={{...styles.image, tintColor: tintColor}}
                resizeMode="contain"
            />

            </View>
           
            <View style={{marginLeft: scale(20), width: '75%'}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </TouchableOpacity>

        {
            borderWidth &&
            <View style={{width: '90%', height: 1, backgroundColor: COLORS.gray300, alignSelf: 'center'}}/>
        }
        </>
       

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
        height: scale(33),
        width: scale(33),
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

export default PaymentCard;
