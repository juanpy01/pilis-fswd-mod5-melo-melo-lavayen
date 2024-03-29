import React, { useContext, useState, useEffect } from 'react'
import { getEventList } from '../../api/event.service'
import { SafeAreaView, FlatList, View, Text, Pressable, Image, ActivityIndicator, Alert } from 'react-native'
import { UserContext } from '../../user-context/userContext'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { styles } from '../list-event/ListEventScreen.styles'

export const ListEventScreen = ({ navigation }) => {
  const [eventList, setEventList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const { currentUser } = useContext(UserContext)

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  const filteredEvens = eventList.filter(location => (
    location.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  useEffect(() => {
    getEventList()
      .then(data => {
        setEventList(data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const eventAlert = ({ item }) => {
    Alert.alert('Espera', 'Iniciar Sesión para más detalles.', [
      {
        text: 'Cancel',
        onPress: () => (' '),
        style: 'cancel'
      },
      { text: 'OK', onPress: () => navigation.navigate('Profile', { item }) }
    ])
  }

  const event = ({ item }) => {
    return (
      currentUser
        ? <Pressable onPress={() => navigation.navigate('DetailEvent', { item })}>
          <View style={styles.itemContainer}>
            <Image source={{ uri: `https://drive.google.com/uc?id=${item.images[0]}` }} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.itemInfo}>Más info</Text>
            </View>
          </View>
          </Pressable>
        : <Pressable onPress={() => eventAlert(item)}>
          <View style={styles.itemContainer}>
            <Image source={{ uri: `https://drive.google.com/uc?id=${item.images[0]}` }} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.itemInfo}>Más info</Text>
            </View>
          </View>
          </Pressable>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      {isLoading && (
        <View style={styles.viewLoading}>
          <ActivityIndicator
            size={100}
            animating
            color='#FFF'
            style={styles.loading}
          />
        </View>
      )}
      <FlatList
        data={filteredEvens}
        renderItem={event}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
