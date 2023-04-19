import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './UserScreen.styles'
import { UserContext } from '../../user-context/userContext';


export const UserScreen = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext)

  const logOut = () => {
    setCurrentUser(null)
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          // source={require('../../../assets/images/avatar.png')}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{`${currentUser.name} ${currentUser.lastname}`}</Text>
          <Text style={styles.profileLocation}>Jujuy, Argentina</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={logOut}>
          <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          tellus eu nisi tincidunt ultrices. Morbi id dictum ipsum. Nunc nec
          lacus massa. Integer eget elit non elit sodales maximus.
        </Text>
        <Text style={styles.sectionTitle}>Interests</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          tellus eu nisi tincidunt ultrices. Morbi id dictum ipsum. Nunc nec
          lacus massa. Integer eget elit non elit sodales maximus.
        </Text>
      </View>

    </ScrollView>
  );
};
