import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { scale } from '@/lib/shared';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextStyle, ViewStyle, Image, TouchableOpacity, Switch } from 'react-native';


interface InputProps {
    label?: string;
    iconName?: any;
    password?: boolean;
    value?: any;
    onChangeText?: any;
    defaultValue?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    phone?: boolean;
    more?: boolean;
    onPress?: any,
    placeholder?: string;
    code?: string;
    flag?: string;
    multiline?: boolean;
    numberOfLines?: number;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    description?: boolean;
    textAlignVertical?: "auto" | "center" | "top" | "bottom" | undefined
    editable?: boolean;
    theimage?: string;
    textAlign?: string;
    maxLenght?: number;
    isBilling?: boolean;
    isAuth?: boolean;


}

const Input: React.FC<InputProps> = ({
    label,
    iconName,
    password,
    value,
    onChangeText,
    defaultValue,
    phone,
    code,
    onPress,
    flag,
    more,
    multiline,
    numberOfLines,
    placeholder,
    keyboardType = "default",
    description,
    textAlignVertical,
    editable,
    theimage,
    maxLenght,
    isBilling,
    isAuth,
    onFocus = () => { },
    onBlur = () => { }
}) => {
    const [hidePassword, setHidePassword] = useState(password);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={{ marginBottom: scale(14) }}>
            {
                label && <Text style={styles.label}>{label}</Text>
            }

            <View
                style={[
                    styles.inputContainer, { height: description ? scale(100) : scale(47) },
                    {
                        borderColor: isFocused
                            ? COLORS.primary
                            : COLORS.gray300,
                        alignItems: description ? 'flex-start' : 'center',
                        backgroundColor: COLORS.gray300,
                    },

                ]}
            >
                {
                    phone && (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', paddingHorizontal: 2 }}>

                            <TouchableOpacity onPress={onPress} style={{ paddingLeft: 3 }}>
                                {
                                    iconName &&
                                    <Image
                                        source={iconName}
                                        style={{
                                            alignItems: 'center', height: 30, width: 30
                                        }}
                                        resizeMode='contain'
                                    />
                                }

                            </TouchableOpacity>
                            <Text style={{ ...FONTS.mediumText, color: COLORS.black, textAlign: 'center' }}> {code}</Text>


                        </View>
                    )
                }

                <TextInput
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        onBlur()
                        setIsFocused(false)
                    }}
                    secureTextEntry={hidePassword}
                    value={value}
                    style={{ color: COLORS.black, flex: 1, ...FONTS.regularText, fontSize: scale(16), lineHeight: scale(20), marginLeft: 5 }}
                    placeholderTextColor={"#70747E"}
                    onChangeText={onChangeText}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    numberOfLines={numberOfLines}
                    multiline={multiline}
                    textAlignVertical={textAlignVertical}
                    editable={editable}
                    maxLength={maxLenght}
                />

   

                {password && (
                    <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>

                        <Image
                            source={hidePassword ? icons?.eyeopen : icons?.eye_slash}
                            style={{ tintColor: COLORS.gray300, height: 20, width: 20 }}
                        />
                    </TouchableOpacity>

                )}

                {
                    more && (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 2 }}>

                            <View style={{}}>
                                {
                                    theimage &&
                                    <Image
                                        source={{ uri: theimage }}
                                        style={{
                                            alignItems: 'center', height: 24, width: 34, paddingRight: 3
                                        }}
                                        resizeMode='contain'
                                    />
                                }

                            </View>
                            <TouchableOpacity onPress={onPress} style={{ paddingLeft: 4 }}>

                                {
                                    iconName &&
                                    <Image
                                        source={iconName}
                                        style={{
                                            alignItems: 'center', height: 22, width: 22
                                        }}
                                        resizeMode='contain'
                                    />
                                }

                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </View>
    );
};

interface Style {
    label: TextStyle;
    inputContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    label: {
        marginVertical: 7,
        ...FONTS.regularText,
        fontSize: scale(14),
        color: COLORS.primary,
    },
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: SIZES.radius
    },
});

export default Input;
