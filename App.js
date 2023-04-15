import { StatusBar } from 'expo-status-bar'
import { HomeScreen } from './src/screens/home/HomeScreen'
import { View } from 'react-native'

export default function App () {
  return (
    <View>
      <HomeScreen />
      <StatusBar style='auto' />
    </View>
  )
}
