import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES, SCREEN_HEIGHT } from '@/constants/theme';
import icons from '@/constants/icons';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { scale } from '@/lib/shared';

type CriteriaProps = {
  label:string
};

const BVNCriteria: React.FC = ({ }) => {
  const renderCriteria = (label: string) => (
    <View style={{...styles.row, alignItems: 'flex-start'}}>
       <Entypo name="dot-single" size={20} color="black" />
      <Text style={styles.label}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.passwordCheck}>
        <View style={{...styles.row}}>
             <MaterialCommunityIcons name="shield-check-outline" size={24} color={COLORS.purple} />
             <Text style={{...styles.title, marginLeft: scale(4)}}>Why we need your BVN?</Text>

        </View>

      {renderCriteria('We request for your BVN to verify your identity and confirm that the account you provided is yours. ')}
      {renderCriteria('Only access to your full name, phone number and date of birth is granted.')}
      {renderCriteria('Your BVN does not grant access to bank accounts or transaction details. ')}
      {renderCriteria('Rest assured, your data is securely managed by us.')}
    </View>
  );
};

export default BVNCriteria;

const styles = StyleSheet.create({
  passwordCheck: {
    height: SCREEN_HEIGHT * 0.23,
    backgroundColor: COLORS.tertiary1,
    borderRadius: SIZES.base,
    marginTop: SIZES.base,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.base,
    marginBottom: SIZES.padding,
  },
  title: {
    ...FONTS.mediumText,
    color: COLORS.purple,
    fontSize: scale(16)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.base,
  },
  icon: {
    height: 17,
    width: 17,
  },
  label: {
    ...FONTS.regularText,
    color: COLORS.primary,
    marginLeft: SIZES.base,
    fontSize: scale(12),
    width: '93%'
  },
});
