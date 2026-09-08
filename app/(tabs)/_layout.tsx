import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/originals/haptic-tab';
import { IconSymbol } from '@/components/originals/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter(); // Hook para navegar manualmente

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#8e8e8e',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        initialParams={{ house: "me" }}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.avatarContainer, focused && styles.activeAvatar]}>
              <Image 
                source={require('@/assets/houses/gryffindor.png')} 
                style={styles.footerAvatar} 
              />
            </View>
          ),
        }}
        // Interceptamos cuando el usuario toca la pestaña de perfil
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Evitamos la navegación predeterminada para controlarla nosotros
            e.preventDefault();
            
            // Forzamos navegar a la pantalla de perfil mandándole el parámetro 'me'
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