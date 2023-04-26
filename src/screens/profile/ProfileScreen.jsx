import React, { useContext } from 'react'
import { UserContext } from '../../user-context/userContext'
import { LoginScreen } from '../login/LoginScreen'
import { UserScreen } from '../user/UserScreen'

export const ProfileScreen = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      {
        currentUser
          ? <UserScreen />
          : <LoginScreen />
      }
    </>
  )
}
