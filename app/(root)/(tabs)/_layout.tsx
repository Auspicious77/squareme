
import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { scale } from '@/lib/shared';
import { Image, Platform } from 'react-native';
import icons from '@/constants/icons';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray400,
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? scale(80) : SIZES.h1 * 1.9,
          backgroundColor: COLORS.white,
        },
        tabBarLabelStyle:{
          ...FONTS.mediumText,
          fontSize: scale(11),
        }
       

      }}

    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
        
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused? icons.home2 : icons.home}
              style={{
                width: focused? scale(22) : scale(20),
                height: focused? scale(22) : scale(20),
                tintColor: COLORS.primary
              }}
              resizeMode="contain"
            />
          )
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: 'Payment',
          tabBarIcon: ({ color, focused }) => (
            <Image
            source={focused? icons.money2 : icons.moneys}
            style={{
              width: focused? scale(22) : scale(20),
              height: focused? scale(22) : scale(20),
              tintColor: COLORS.primary 
            }}
            resizeMode="contain"
          />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, focused }) => (
            <Image
            source={focused? icons.moresquare2 : icons.moresquare}
            style={{
              width: focused? scale(22) : scale(20),
              height: focused? scale(22) : scale(20),
              tintColor: COLORS.primary 
            }}
            resizeMode="contain"
          />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Image
            source={focused? icons.profile1 : icons.profile}
            style={{
              width: focused? scale(22) : scale(20),
                height: focused? scale(22) : scale(20),
              tintColor: COLORS.primary
            }}
            resizeMode="contain"
          />
          ),
        }}
      />


    </Tabs>
  );
}
