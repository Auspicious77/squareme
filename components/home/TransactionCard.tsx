import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constants/theme'; // Corrected import path
import icons from '../../constants/icons'
import { formattedAmountWithNaira, scale } from '@/lib/shared';

// import images from '../constants/images'; // This import seems to be missing or unnecessary


interface TransactionCardProp {
  item?: any;
}

const TransactionCard: React.FC<TransactionCardProp> = ({ item }) => {
  const navigation = useNavigation();


  return (
    <>
      <TouchableOpacity 
      style={{ ...styles.container, backgroundColor: COLORS.white }}>
        <Image
          source={icons.airtime}
          style={styles.type} />

        <View
          style={styles.header}>

          <Text style={{ ...styles.text, color: COLORS.black, fontSize: scale(13) }}>{item.title}</Text>
          <Text style={{ ...styles.text1, marginTop: scale(1), color: COLORS.black, }}>{item?.date}</Text>
        </View>


        <View style={styles.addContainer}>
          <Text style={{ ...styles.amount, color:COLORS.primary }}>{formattedAmountWithNaira(item.amount)}</Text>
          <Text style={{ ...styles.text1, marginTop: scale(1), color:item?.status === "Failed"? COLORS.red : COLORS.green, }}>{item?.status}</Text>

        </View>




      </TouchableOpacity>

    </>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.base,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: scale(8),
    paddingVertical: scale(7),
  
  },
  addContainer: {
    width: '30%',

  },

  add: {
    height: scale(20),
    width: scale(20)
  },
  text: {
    ...FONTS.regularText,
    marginRight: SIZES.base,
  },
  text1: {
    ...FONTS.regularText,
    marginRight: SIZES.base,
    fontSize: scale(11),
    opacity: 0.7
  },
  amount: {
    ...FONTS.regularText,
    marginRight: SIZES.base,
    fontSize: scale(12),
    opacity: 0.9
  },
  header: {
    width: '60%',
    alignSelf: 'center',
    marginLeft: scale(13)
  },
  body: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row'
  },
  type: {
    resizeMode: 'contain',
    height: scale(30),
    width: scale(30)
  },

});

export default TransactionCard;
