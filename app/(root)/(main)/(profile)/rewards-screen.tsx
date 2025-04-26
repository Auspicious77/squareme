import Header from '@/components/global/Header';
import { COLORS, FONTS } from '@/constants/theme';
import { scale } from '@/lib/shared';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const RewardsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView  showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Header
      title='My Rewards'
      />

      {/* Greeting */}
      <View style={styles.greetingContainer}>
        <Text style={styles.helloText}>Hello, Gift</Text>
        <Text style={styles.levelText}>
          You are at <Text style={styles.beginnerLevel}>Beginner Level</Text>
        </Text>
        <Text style={styles.pointsText}>Total Points: 200</Text>
      </View>

      {/* Levels */}
      <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={styles.levelsContainer}>
        {/* Beginner Level */}
        <View style={styles.levelCardActive}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>👶</Text>
          </View>
          <Text style={styles.levelTitle}>Beginner {'\n'}Level</Text>
          <View style={styles.benefitsList}>
            <Text style={styles.benefitText}>• 10,000 stars worth</Text>
            <Text style={styles.benefitText}>• NGN 500 airtime reward</Text>
          </View>
        </View>

        {/* Intermediate Level */}
        <View style={styles.levelCardInactive}>
          <View style={styles.iconCircleInactive}>
            <Text style={styles.iconText}>👥</Text>
          </View>
          <Text style={styles.levelTitleInactive}>Intermediate {'\n'}Level</Text>
          <View style={styles.benefitsListInactive}>
            <Text style={styles.benefitTextInactive}>• Lorem ipsum dolor sit consectetur</Text>
            <Text style={styles.benefitTextInactive}>• Dorem ipsum dolor sit amet</Text>
            <Text style={styles.benefitTextInactive}>• Worem ipsum dolor</Text>
          </View>
        </View>
      </ScrollView>
      
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backArrow: {
    fontSize: 20,
    color: '#000',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C1E5F',
  },
  greetingContainer: {
    marginTop: 30,
    marginHorizontal: scale(15)
  },
  helloText: {
    ...FONTS.mediumText,
    fontSize: 23,
    fontWeight: '600',
    color: '#000',
  },
  levelText: {
    ...FONTS.regularText,
    fontSize: 16,
    color: '#8D8D8D',
    marginTop: 8,
  },
  beginnerLevel: {
    ...FONTS.regularText,
    color: '#A962FF',
    fontWeight: '600',
  },
  pointsText: {
    ...FONTS.regularText,
    fontSize: 15,
    color: '#8D8D8D',
    marginTop: 4,
  },
  levelsContainer: {
    marginTop: 30,
    marginHorizontal: scale(15)
  },
  levelCardActive: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 20,
    paddingVertical: 80,
    marginRight: 10,
  },
  levelCardInactive: {
    flex: 1,
    backgroundColor: 'rgba(60, 64, 74, 1)',
    borderRadius: 12,
    padding: 20,
    paddingVertical: 60,
    marginLeft: 10,
    justifyContent: 'center'
  },
  iconCircle: {
    backgroundColor: '#53D7E2',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  iconCircleInactive: {
    backgroundColor: '#53D7E2',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  iconText: {
    ...FONTS.regularText,
    fontSize: 24,
    color: 'red'
  },
  levelTitle: {
    ...FONTS.semiBoldText,
    fontSize: 23,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  levelTitleInactive: {
    ...FONTS.semiBoldText,
    fontSize: 23,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  benefitsList: {
    marginTop: 10,
  },
  benefitText: {
    ...FONTS.regularText,
    fontSize: 13,
    color: '#fff',
    marginBottom: 6,
  },
  benefitsListInactive: {
    marginTop: 10,
  },
  benefitTextInactive: {
    ...FONTS.regularText,
    width: '60%',
    fontSize: 13,
    color: '#eee',
    textAlign: 'left',
    marginBottom: 6,
  },
});

export default RewardsScreen;
