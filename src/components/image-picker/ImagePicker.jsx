import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Button, Image, Text, View } from 'react-native'
import { styles } from './ImagePicker.styles'

// https://docs.expo.dev/versions/latest/sdk/imagepicker/

export const ImageProfile = ({ image, setImage }) => {
  const pickImage = async () => {
    const getImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!getImage.canceled) {
      await setImage(getImage.assets[0].uri)
    };
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccionar imagen de perfil:</Text>
      <Button title='Cargar' onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />}
    </View>
  )
}
