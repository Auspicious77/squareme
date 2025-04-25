import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ActivityIndicator, ViewStyle } from 'react-native';

import { scale } from '@/lib/shared';
import { COLORS, FONTS } from '@/constants/theme';



interface ButtonProps {
    text: string;
    onPress?: any;
    isLoading?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    modal?: boolean;
    height?: any;
    fontSize?: any;
    borderRadius?: any;
    backGroundColor?: any;
    buttonStyle?: ViewStyle
}
const Button: React.FC<ButtonProps> = ({ text, onPress, buttonStyle, isLoading, borderRadius, disabled, secondary, fontSize, height, backGroundColor}) => {
    return (
        <TouchableOpacity
            disabled={isLoading || disabled ? true : false}
            style={{ ...styles.container, ...buttonStyle, borderRadius:  borderRadius || 8, height: height || scale(47), borderWidth: secondary ? 1 : 0, borderColor: secondary? COLORS.primary : 'transparent',  backgroundColor: secondary? 'transparent' : disabled? COLORS.gray_disabled : backGroundColor || COLORS.primary, opacity: disabled ? 0.4 : isLoading ? 0.6 : 1 }}
            onPress={onPress}>
            {
                isLoading ? <ActivityIndicator color={COLORS.white} size={23} /> :
                    <Text style={{...styles.text, fontSize: fontSize || scale(17),  color: secondary? COLORS.primary : 'white',}}>{text}</Text>
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       

    },
    text: {
        ...FONTS.regularText,
       
    },

});

export default Button;
