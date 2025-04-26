import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ActivityIndicator, ViewStyle } from 'react-native';

import { scale } from '@/lib/shared';
import { COLORS, FONTS } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';



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
const FormButton: React.FC<ButtonProps> = ({ text, onPress, buttonStyle, isLoading, borderRadius, disabled, secondary, fontSize, height, backGroundColor}) => {
    return (
        <TouchableOpacity
            disabled={isLoading || disabled ? true : false}
            style={{ ...styles.container, ...buttonStyle, borderRadius:  borderRadius || 6, height: height || scale(52), borderWidth: secondary ? 1 : 0, borderColor: secondary? COLORS.primary : 'transparent',  backgroundColor: secondary? 'transparent' : disabled? COLORS.gray_disabled : backGroundColor || '#38225A', opacity: disabled ? 0.4 : isLoading ? 0.6 : 1 }}
            onPress={onPress}>

                    <Text style={{...styles.text, fontSize: fontSize || scale(17),  color: secondary? COLORS.primary : 'white',}}>{text}</Text>
                    <Ionicons name="chevron-down-sharp" size={20} color="white" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(10)

       

    },
    text: {
        ...FONTS.regularText,
       
    },

});

export default FormButton;
