import React, { useState, useEffect } from 'react'
import { getEventList } from '../../api/event.service'
import { SafeAreaView, FlatList, View, Text, Pressable, Image } from 'react-native'
import { SearchBar } from '../../components/search-bar/SearchBar'
import { styles } from '../list-event/ListEventScreen.styles'

export const ListEventScreen = ({ navigation }) => {
  const [eventList, setEventList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

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
      })
      .catch(err => console.log(err))
  }, [])

  const event = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('DetailEvent')}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: `https://drive.google.com/uc?id=${item.images[0]}` }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Pressable>
  )

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredEvens}
        renderItem={event}
        keyExtractor={item => item.id}
        style={styles.itemList}
        horizontal
      />
    </SafeAreaView>

  )
}
