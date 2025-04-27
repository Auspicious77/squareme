import CustomHeader from '@/components/global/CustomHeader';
import Header from '@/components/global/Header';
import ActionItems from '@/components/home/actionItems';
import TransactionCard from '@/components/home/TransactionCard';
import MoreCard from '@/components/more/MoreCard';
import PaymentCard from '@/components/more/PaymentCard';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { COLORS, FONTS, SCREEN_WIDTH } from '@/constants/theme';
import { scale } from '@/lib/shared';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, StatusBar, Platform } from 'react-native';


const Payment = () => {

  const data = [
    { id: '1', date: '0095649856 GIFT OLUWAS......', type: 'debit', title: 'Withdrawal to bank', amount: 5000, status: 'Successful' },
  ];
  return (
    <SafeAreaView style={styles.container}>

      <Header
        back={true}
        title='Payment' />
        
      <View style={styles.body}>
        <PaymentCard
          iconName={icons.arrowright}
          backGroundColor={'#F1F5FD'}
          title='Send Money'
          desc='Send money to anyone instantly'
          borderWidth
          onPress={()=> router.navigate('/send-money')}
        />

        <PaymentCard
          iconName={icons.arrowleft}
          backGroundColor={'#F2FAEB'}
          title='Request Money'
          desc='Request money from your friends and family'
          onPress={()=> router.navigate('/request-money')}

        />

        <Text style={{ ...styles.descText, fontSize: scale(14), marginVertical: scale(14) }}>
          Recent transactions
        </Text>


        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <TransactionCard item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{}}
        />



        <TouchableOpacity style={styles.seeMore}>
          <Text style={{ ...styles.descText, fontSize: scale(12) }}>
            See more
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={18} color="black" />
        </TouchableOpacity>

        <View style={{ alignSelf: 'center', marginTop: scale(55) }}>
          <Image
            source={images.banner}
            style={styles.img}
            resizeMode='contain' />
        </View>

      </View>



    </SafeAreaView>

  );
}

export default Payment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS == 'android'? scale(30): 0
  },
  body: {
    marginHorizontal: scale(15)
  },
  seeMore: {

    marginTop: scale(10),
    backgroundColor: COLORS.gray300,
    paddingVertical: scale(5),
    paddingHorizontal: scale(5),
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'


  },
  descText: {
    ...FONTS.regularText,
    fontSize: scale(13),
    lineHeight: 20,
    color: COLORS.black,
    opacity: 0.8
  },
  img: {
    width: SCREEN_WIDTH*0.9,
    height: 170
  }


});
