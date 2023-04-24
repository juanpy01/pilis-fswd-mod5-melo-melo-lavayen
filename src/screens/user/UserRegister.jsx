import React, { useContext, useRef, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './userRegister.styles'
import { Controller, useForm } from 'react-hook-form'
import { UserContext } from '../../user-context/userContext'
import { useNavigation } from '@react-navigation/core'
import { ImageProfile } from '../../components/image-picker/ImagePicker'
import SelectDropdown from 'react-native-select-dropdown'
import { cities } from '../../utils/cities'


export const UserRegister = () => {

  const [image, setImage] = useState(null)//para guardar el estado de la imagen/ abajo los paso como props en su componente
  const [city, setCity] = useState("") //para guardar el estado de la seleccion de la ciudad
  const { currentUser, setCurrentUser } = useContext(UserContext)//guardamos el objeto final de usuarion en el contexto de ususario
  const navigation = useNavigation()
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      name: '',
      lastname: "",
      telephone: null,
      city: "",
    }
  });

  const dropdownRef = useRef({})// hago referencia al reset en el select

  //esta funcion la llamamos en "SelectDropdown", libreria del select como el useForm
  const selectItem = (item) => { //nos va a retornar el item seleccionado del select, funciona como el useForm
    setCity(item)//seteamo el estado de ciudad con el item seleccionado
  };

  const handleRegister = (data) => { //creamos un objeto con todas las key y propiedades q necesito en mi user contex

    const dataUserNew = {
      id: "546435484321",
      email: data.email,
      name: data.name,
      lastname: data.lastname,
      image: image,
      telephone: data.telephone,
      city: city,
    };

    setCurrentUser(dataUserNew) //seteamos el contexto
    navigation.navigate("Home")// una vez seteado el context navegamosa home
  };

  const clear = () => {
    reset() //reseta el formular
    dropdownRef.current.reset() // reseta el select
  }

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Ingrese Email'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
          />
        )}
        name='email'
        rules={{ required: 'El email de usuario es requerido' }}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='name'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name='name'
        rules={{ required: 'Ingrese un nombre' }}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Apellido'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name='lastname'
        rules={{ required: 'EL apellido es requerido' }}
      />
      {errors.lastname && <Text style={styles.errorText}>{errors.lastname.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Telefono'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name='telephone'
        rules={{ required: 'El telefono es obligatorio' }}
      />
      {errors.telephone && <Text style={styles.errorText}>{errors.telephone.message}</Text>}
      <SelectDropdown
        data={cities}
        onSelect={selectItem}
        defaultButtonText='Selecciona una ciudad'
        buttonStyle={{ width: "80%", backgroundColor: "#A5D7E8", borderRadius: 20, marginRight: 35, alignItems: "center" }}
        rowStyle={{ backgroundColor: '#444', borderBottomColor: '#C5C5C5' }}
        rowTextStyle={{ color: "white", textAlign: "center" }}
        ref={dropdownRef}
      />

      <ImageProfile
        image={image}
        setImage={setImage}
      />

      <TouchableOpacity style={styles.buttonReset} onPress={clear}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit(handleRegister)}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  )
};
