import CustomHeader from '@/components/global/CustomHeader';
import Header from '@/components/global/Header';
import { COLORS } from '@/constants/theme';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Profile = () => {

  return (
    <>
      <Header
    title='Profile'/>
    
    <View style={styles.container}>



    </View>
    </>
  );
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },


});
