import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { scale } from '@/lib/shared';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


interface VerificationHeaderProps {
  title?: string;
  guild?: boolean;
  category?: boolean;
  nothing?: string;
  Wallet?: boolean

}

const Header: React.FC<VerificationHeaderProps> = ({ title, guild, category, nothing, Wallet }) => {


  return (
    <View style={{...styles.container, backgroundColor: 'transparent'}}>
      <TouchableOpacity style={{width: '10%'}} onPress={() => router.back()}>
      {
    <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
      }
       
      </TouchableOpacity>

      <View style={{ width: '90%' }}>
        <Text style={styles.text}>{title}</Text>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    paddingVertical: SIZES.padding,
    width: '100%'
  },
  text: {
    ...FONTS.mediumText,
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.gray500,
    marginRight: SIZES.base
  },
});

export default Header;
