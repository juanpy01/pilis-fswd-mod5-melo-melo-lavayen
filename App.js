import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainStackScreen } from './src/screens/list-event/MainStackScreen'
import UserProvider from './src/user-context/userContext'
import { UserRegister } from './src/screens/user/UserRegister'
import { DetailEventScreen } from './src/screens/detail-event/DetailEventScreen'
import { DetailEventWeb } from './src/screens/detail-event/DetailEventWeb'

const EventListStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <EventListStack.Navigator screenOptions={{ headerShown: false }}>
            <EventListStack.Screen name='Main' component={MainStackScreen} />
            <EventListStack.Screen name='userRegister' component={UserRegister} />
            <EventListStack.Screen name='DetailEvent' component={DetailEventScreen} />
            <EventListStack.Screen name='DetailEventWeb' component={DetailEventWeb} />
          </EventListStack.Navigator>
        </NavigationContainer>
        <StatusBar style='auto' />
      </UserProvider>
    </>
  )
}
