import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import { router } from 'expo-router';
import Header from '@/components/global/Header';
import { COLORS, FONTS } from '@/constants/theme';
import { scale } from '@/lib/shared';

const BadgesScreen = () => {


  const badges = [
    { label: 'Beginner', icon: require('@/assets/icons/beginner.png'), color: '#00CFFF' },
    { label: 'Intermediate', icon: require('@/assets/icons/intermediate.png'), color: '#00CFFF' },
    { label: 'Expert', icon: require('@/assets/icons/expert.png'), color: '#FFA500' },
    { label: 'Master', icon: require('@/assets/icons/master.png'), color: '#A685E2' },
    { label: 'Legend', icon: require('@/assets/icons/legend.png'), color: '#E287C4' },
    // { label: 'Ghost', icon: require('@/assets/icons/legend.png'), color: '#6B6B6B' },
  ];

 
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title='Badges'/>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Trophy */}
        <View style={styles.trophyContainer}>
          <Image
            source={require('@/assets/icons/trophy.png')}
            style={styles.trophyImage}
            resizeMode="contain"
          />
          <Text style={styles.rewardStarsText}>REWARD STARS</Text>
          <Text style={styles.starsCount}>150</Text>
          <View style={styles.rankTag}>
            <Text style={styles.rankText}>MASTER</Text>
          </View>
        </View>

        {/* Progress */}
        <View style={styles.progressContainer}>
          <Text style={styles.levelText}>Beginner Level</Text>
          <View style={styles.progressInfo}>
            <Text style={styles.progressStars}>100/250 ⭐</Text>
            <Text style={styles.progressGoal}>450 stars to Intermediate</Text>
          </View>
          <ProgressBar progress={100/250}  color={'#40B869'} style={styles.progressBar} />
        </View>

        {/* My Rewards */}
        <TouchableOpacity style={styles.rewardsContainer}>
          <View style={styles.rewardsInfo}>
            <Image
               source={require('@/assets/icons/trophy.png')}
              style={styles.rewardIcon}
              resizeMode="contain"
            />
            <View style={styles.rewardTexts}>
              <Text style={styles.rewardTitle}>My Rewards</Text>
              <Text style={styles.rewardSubtitle}>You have 1 reward(s) to redeem</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        {/* Note */}
        <View style={styles.noteContainer}>
          <Ionicons name="information-circle-outline" size={16} color="#A685E2" />
          <Text style={styles.noteText}>
            Your rewards will expire on 31st December, 2024.
          </Text>
        </View>

        {/* Explore Badges */}
        <Text style={styles.exploreTitle}>Explore Badges</Text>
        <View style={styles.badgesWrapper}>
          {badges.map((item, index) => (
            <View
              key={index}
              style={styles.badgeCard}
            >
              <Image source={item.icon} style={styles.img}/>
              <Text style={[styles.badgeLabel, { color: item.color }]}>
                {item.label}
              </Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </View>
  );
};


export default BadgesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS == 'android'? scale(30): 0
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#2D0052',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  trophyContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  trophyImage: {
    width: 100,
    height: 100,
  },
  rewardStarsText: {
    ...FONTS.regularText,
    color: '#999999',
    fontSize: 12,
    marginTop: 8,
  },
  starsCount: {
    ...FONTS.semiBoldText,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2D0052',
    marginTop: 4,
  },
  rankTag: {
    marginTop: 8,
    backgroundColor: '#DFF6FF',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  rankText: {
    ...FONTS.regularText,
    color: '#00CFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  progressContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  levelText: {
    ...FONTS.regularText,
    fontSize: 15,
    color: '#2D0052',
    fontWeight: '600',
    marginBottom: 8,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressStars: {
    ...FONTS.regularText,
    fontSize: 13,
    color: '#2D0052',
  },
  progressGoal: {
    ...FONTS.regularText,
    fontSize: 13,
    color: '#999999',
  },
  progressBar: {
    height: 6,
    borderRadius: 8,
    marginTop: 8,
  },
  rewardsContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rewardsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewardIcon: {
    width: 30,
    height: 30,
  },
  rewardTexts: {
    
    marginLeft: 12,
  },
  rewardTitle: {
    ...FONTS.mediumText,
    fontSize: 15,
    color: '#2D0052',
    fontWeight: 'bold',
  },
  rewardSubtitle: {
    ...FONTS.regularText,
    color: '#999999',
    fontSize: 13,
    marginTop: 4,
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  noteText: {
    ...FONTS.regularText,
    fontSize: 13,
    color: '#2D0052',
    marginLeft: 8,
  },
  exploreTitle: {
    ...FONTS.mediumText,
    fontSize: 18,
    fontWeight: '600',
    color: '#2D0052',
    marginBottom: 16,
  },
  badgesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  badgeCard: {
    // backgroundColor: '#111A2E',
    width: 70,
    height: 70,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  badgeLabel: {
    ...FONTS.regularText,
    marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
  },
  img:{
    height: 56,
    width: 56,
    resizeMode: 'contain'
  }
});


