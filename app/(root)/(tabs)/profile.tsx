import AccountCard from '@/components/account/AccountCard';
import CustomHeader from '@/components/global/CustomHeader';
import Header from '@/components/global/Header';
import ActionItems from '@/components/home/actionItems';
import MoreCard from '@/components/more/MoreCard';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { COLORS, FONTS } from '@/constants/theme';
import { scale } from '@/lib/shared';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';


const Profile = () => {

  const quickActions = [
    { id: '1', img: icons.walletadd, title: 'Bill Payment', desc: 'Pay all your bills on squareme', onPress: () => { } },
    { id: '5', img: icons.strongbox2, title: 'Sqaureme Pot', desc: 'Lock your funds away and earn interests', onPress: () => { } },
    { id: '6', img: icons.airtime, title: 'Gift cards', desc: 'Lock your funds away and earn interests', onPress: () => { } },
    { id: '7', img: icons.wifi, title: 'Cards', desc: 'Virtual and physical debit cards', onPress: () => { } },
    { id: '8', img: icons.tv, title: 'Market place', desc: 'Find your favourite Fundr vendors for easy payments', onPress: () => { } },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Header
        back={true}
        title='Profile' />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        <View style={styles.row}>
          <View style={styles.row2}>
            <Image source={images.man} style={styles.image} />

            <View style={{ marginLeft: scale(20) }}>
              <Text style={styles.text1}>David Oloye</Text>
              <Text style={styles.text2}>+23480888976</Text>
            </View>
          </View>



          <TouchableOpacity style={styles.row2}>
            <View style={styles.view2}>
              <Text style={{ ...styles.text2, color: COLORS.green }}>TIER 2</Text>
            </View>

            <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />


          </TouchableOpacity>

        </View>
        <View style={{ ...styles.line }} />


        <View>
          <AccountCard
            backGroundColor={COLORS.white}
            canPreview={true}
            iconName={icons.bank}
            title='Bank Account'
            borderBottom={false}
            tintColor={COLORS.purple}
            onPress={() => { }}
            titleStyle={{...FONTS.regularText}}
          />

          <AccountCard
            backGroundColor={COLORS.white}
            canPreview={true}
            iconName={icons.money}
            title='Account Management'
            borderBottom={false}
            tintColor={COLORS.purple}
            onPress={() => { }}
            titleStyle={{...FONTS.regularText}}
          />

          <AccountCard
            backGroundColor={COLORS.white}
            canPreview={true}
            iconName={icons.documenttext}
            title='Account Statement'
            borderBottom={false}
            tintColor={COLORS.purple}
            titleStyle={{...FONTS.regularText}}
            onPress={() => { }}
          />

          <AccountCard
            backGroundColor={COLORS.white}
            canPreview={true}
            iconName={icons.discountshape}
            title='Reward'
            borderBottom={false}
            titleStyle={{...FONTS.regularText}}
            tintColor={COLORS.purple}
            onPress={() => router.navigate('/(root)/(main)/(profile)/rewards-screen')}
            
          />

          <AccountCard
            backGroundColor={COLORS.white}
            canPreview={true}
            iconName={icons.medalstar}
            title='Badges'
            borderBottom={false}
            tintColor={COLORS.purple}
            titleStyle={{...FONTS.regularText}}
            onPress={() => router.navigate('/(root)/(main)/(profile)/badge-screen')}
          />

          <AccountCard
            backGroundColor={COLORS.white}
            canPreview={true}
            iconName={icons.shieldtick}
            title='Security'
            borderBottom={false}
            tintColor={COLORS.purple}
            titleStyle={{...FONTS.regularText}}
            onPress={() => { }}
          />

          <AccountCard
            backGroundColor={COLORS.white}
            canPreview={true}
            iconName={icons.messagequestion}
            title='Help & Support'
            borderBottom={false}
            tintColor={COLORS.purple}
            titleStyle={{...FONTS.regularText}}
            onPress={() => { }}
          />
        </View>

        <TouchableOpacity
        onPress={()=> router.replace('/(auth)/sign-in')}
         style={{ ...styles.row, alignSelf: 'center', marginTop: scale(90) }}>
          <MaterialIcons name="logout" size={24} color={COLORS.red} />
          <Text style={{ ...styles.text1, fontSize: scale(16), marginLeft: scale(7), color: COLORS.red }}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>

  );
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  body: {
    marginHorizontal: scale(15)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  image: {
    resizeMode: 'contain',
    height: 50,
    width: 50
  },
  text1: {
    ...FONTS.mediumText,
    fontSize: 19,
    color: COLORS.black,
    lineHeight: 30
  },
  text2: {
    ...FONTS.regularText,
    fontSize: 16,
    color: COLORS.black
  },
  view2: {
    backgroundColor: COLORS.gray300,
    borderRadius: 12,
    paddingVertical: scale(5),
    paddingHorizontal: scale(10),
    marginRight: scale(10)
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#EAEAEA',
    alignSelf: 'center',
    marginTop: scale(11)


  }


});
