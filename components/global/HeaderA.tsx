import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { scale } from '@/lib/shared';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


interface VerificationHeaderProps {
  title?: string;

}

const HeaderA: React.FC<VerificationHeaderProps> = ({ title, }) => {


  return (
    <View style={{ ...styles.container, backgroundColor: 'transparent' }}>
      {
          <TouchableOpacity style={{ width: '10%' }} onPress={() => router.back()}>
            <MaterialCommunityIcons name="keyboard-backspace" size={24} color="white" />
          </TouchableOpacity>

      }

     

      <View style={{ width: '90%' }}>
        {
            title &&
            <Text style={styles.text}>{title}</Text>
        }
   
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
    paddingTop: SIZES.base,
    width: '100%'
  },
  text: {
    ...FONTS.mediumText,
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.white,
    marginRight: SIZES.base
  },
});

export default HeaderA;
