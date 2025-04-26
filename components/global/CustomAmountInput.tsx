// components/global/CustomAmountInput.tsx

import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { COLORS, FONTS } from '@/constants/theme';
import { scale } from '@/lib/shared';

interface CustomAmountInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const CustomAmountInput: React.FC<CustomAmountInputProps> = ({ value, onChangeText, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...props}
        value={value}
        onChangeText={onChangeText}
        placeholder="₦ 0.00"
        placeholderTextColor={COLORS.lightWhite}
        selectionColor={COLORS.gray}
        keyboardType="numeric"
        style={[styles.input, props.style]}
      />
    </View>
  );
};

export default CustomAmountInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: '97%',
    // borderBottomWidth: 2,
    // borderBottomColor: COLORS.gray,
  },
  input: {
    ...FONTS.mediumText,
    color: COLORS.white,
    fontSize: scale(30),
    lineHeight: 40,
  },
});
