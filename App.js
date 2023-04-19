import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainStackScreen } from './src/screens/list-event/MainStackScreen'
import UserProvider from "./src/user-context/userContext"


const EventListStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <EventListStack.Navigator screenOptions={{ headerShown: false }}>
            <EventListStack.Screen name='Main' component={MainStackScreen} />
          </EventListStack.Navigator>
        </NavigationContainer>
        <StatusBar style='auto' />
      </UserProvider>
    </>
  )
}
