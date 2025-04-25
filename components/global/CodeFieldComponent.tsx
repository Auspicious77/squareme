import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { scale } from '@/lib/shared';
import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';




interface CodeFielddProps {
  value: string;
  error?: boolean;
  onChange: (value: string) => void;
  success?: boolean;
  boxNumber?: number
}

const CodeFieldComponent: React.FC<CodeFielddProps> = ({ value, boxNumber, error, onChange, success }) => {
  const CELL_COUNT = boxNumber || 6;
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChange, 
  });

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={onChange}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[
              styles.cellContainer,
              {
                borderColor:
                  error && !isFocused
                    ? COLORS.red
                    : success && !isFocused
                    ? COLORS.primary
                    : isFocused || symbol
                    ? COLORS.primary
                    : COLORS.gray300,
              },
            ]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text style={styles.cell}>
              {symbol || (isFocused ? <Cursor /> : null)}
          
            </Text>
          </View>
        )}
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    inputLayout: {
        marginVertical: 5,
      },
      root: {
        paddingHorizontal: SIZES.width * 0.05,
        marginBottom: SIZES.h2,
        // marginHorizontal: 10,
       },
      title: { },
      codeFieldRoot: {  },
      cell: {
     
        ...FONTS.mediumText,
        fontSize: scale(20),
        textAlign: 'center',
        color: 'black',
      },
      focusCell: {
        borderColor: COLORS.primary,
        // borderWidth: 1,
      },
      cellContainer: {
        width: 61,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray300,
    
      },
    
})



export default CodeFieldComponent;


