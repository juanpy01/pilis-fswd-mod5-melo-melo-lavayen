import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../home/HomeScreen'
import { ListEventScreen } from './ListEventScreen'
import { ProfileScreen } from '../profile/ProfileScreen'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SPACING } from '../../utils/theme'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Home: 'home',
  Profile: 'person',
  Search: 'search'
}

const screenOptions = ({ route }) => {
  const IconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={IconName} size={size} color={color} />
    ),
    tabBarActiveTinColor: COLORS.primary,
    tabBarInactiveTinColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}

export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Home' options={{ title: 'Inicio' }} component={HomeScreen} />
      <Tab.Screen name='Search' options={{ title: 'Explorar' }} component={ListEventScreen} />
      <Tab.Screen name='Profile' options={{ title: 'Perfil' }} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})
