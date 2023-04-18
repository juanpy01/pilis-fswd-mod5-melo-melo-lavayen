import React, { useState, useEffect } from 'react'
import { getEventList } from '../../api/event.service'
import { SafeAreaView, FlatList, View, Text, Pressable, Image } from 'react-native'
import { styles } from '../list-event/ListEventScreen.styles'

export const ListEventScreen = () => {
  const [eventList, setEventList] = useState([])

  useEffect(() => {
    getEventList()
      .then(data => {
        setEventList(data)
      })
      .catch(err => console.log(err))
  }, [])

  const event = ({ item }) => (
    <Pressable onPress={() => console.warn(item.title)}>
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
      <FlatList
        data={eventList}
        renderItem={event}
        keyExtractor={item => item.id}
        style={styles.itemList}
        horizontal
      />
    </SafeAreaView>

  )
}
