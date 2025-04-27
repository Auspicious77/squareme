import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, Switch, Platform } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme'; 
import icons from '../../constants/theme'
import { scale } from '@/lib/shared';
import { MaterialIcons } from '@expo/vector-icons';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface VerificationHomeHeaderProps {
    title?: string;
    message?: string;
    backGroundColor?: any;
    color?: any;
    iconName?: any;
    canPreview?: boolean;
    tintColor?: any;
    messageSize?: any;
    titleSize?: any;
    borderBottom?: boolean;
    onPress?: any;
    canSwitch?: boolean;
    isEnabled?: boolean;
    toggleSwitch?: any;
    titleStyle?: TextStyle
}

const AccountCard: React.FC<VerificationHomeHeaderProps> = ({ title, message, toggleSwitch,  backGroundColor, canPreview, canSwitch, color, messageSize, isEnabled, titleSize, tintColor, iconName, borderBottom, onPress, titleStyle }) => {

    return (
        <>
            <TouchableOpacity 
            onPress={onPress}
            disabled={canSwitch}
            style={{ ...styles.container, backgroundColor: backGroundColor }}>
                {
                    iconName &&
                    <View style={{ ...styles.addContainer, backgroundColor: color }}>

                    <Image
                        source={iconName}
                        resizeMode='contain'
                        style={{ ...styles.add, tintColor: tintColor&&tintColor}}
                    />
                </View>

                }
           
                <View
                    style={{...styles.header,}}>
                    <Text style={{ ...styles.text,  fontSize: titleSize || scale(14), color: COLORS.black, ...titleStyle }}>{title}</Text>
                    {
                        message &&
                        <Text style={{ ...styles.message, fontSize: messageSize || scale(12), marginTop: scale(3), color: COLORS.black, }}>{message}</Text>
                    }


                </View>

                {
                    canPreview &&
                    <TouchableOpacity style={{ width: '8%' }}>
                      <MaterialIcons name="arrow-forward-ios" size={17} color="gray" />
                    </TouchableOpacity>
                }

                {
                    canSwitch && 
                    <View style={{
                        ...styles.switch,
                        width: Platform.OS == 'android'? scale(44) : scale(30),
                        backgroundColor: Platform.OS == 'android' && isEnabled ? COLORS.primary :  COLORS.gray500,
                    }}>
                    <Switch
                    
                    style={{ width: '100%', height: scale(15), maxHeight: scale(15)  }}
                    value={isEnabled}
                    onValueChange={toggleSwitch}
                    thumbColor={isEnabled ? COLORS.white : COLORS.white}
                    trackColor={{ false: Platform.OS == 'android'? COLORS.gray500 : COLORS.black, true:COLORS.primary }} // Customize track color
                /> 
                </View>
                }

            </TouchableOpacity>

            {
                borderBottom &&
                <View style={{ ...styles.line, marginTop: scale(7) }} />

            }

        </>

    );
};

const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: scale(8),
        paddingVertical: scale(5),
        marginTop: scale(10),



    },
    addContainer: {
        borderRadius: scale(8),
        height: scale(36),
        width: scale(36),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: scale(5)
    },
    add: {
        height: scale(20),
        width: scale(20),

    },
    text: {
        ...FONTS.mediumText,


    },
    message: {
        ...FONTS.regularText,
        color: COLORS.black,
        opacity: 0.7
    },
    header: {
        width: '82%',
       

    },
    body: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row'
    },
    switch: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(20),
        height: Platform.OS == 'android'? scale(24): scale(10),
  
     
        flexDirection: 'row',
        transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
        // paddingHorizontal: scale(2)


    },
    back: {
        height: scale(13),
        width: scale(13),
        resizeMode: 'contain',
        tintColor: COLORS.black
    },
    line: {
        height: 1,
        width: '90%',
        backgroundColor: '#EAEAEA',
        marginLeft: scale(24)

    }
});

export default AccountCard;
