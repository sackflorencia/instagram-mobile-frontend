import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/originals/haptic-tab';
import { IconSymbol } from '@/components/originals/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#8e8e8e',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="house.fill"
              color={color}
            />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();

            router.push({
              pathname: "/",
              params: {
                refresh: Date.now().toString(),
              },
            });
          },
        })}
      />

      <Tabs.Screen
        name="profile"
        initialParams={{ house: "me" }}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View
              style={[
                styles.avatarContainer,
                focused && styles.activeAvatar
              ]}
            >
              <Image
                source={require('@/assets/houses/gryffindor.png')}
                style={styles.footerAvatar}
              />
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();

            router.push({
              pathname: '/profile',
              params: { house: 'me' }
            });
          },
        })}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  activeAvatar: {
    borderColor: '#000',
    borderWidth: 1.5,
  },
  footerAvatar: {
    width: '100%',
    height: '100%',
  },
});