import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LikedSongs() {
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    const fetchLikedSongs = async () => {
      const songs = await AsyncStorage.getItem('likedMusic');
      if (songs !== null) {
        setLikedSongs(JSON.parse(songs));
      }
    };

    fetchLikedSongs();
  }, []);

  const deleteSong = async (id) => {
    const newLikedSongs = likedSongs.filter(song => song.id !== id);
    setLikedSongs(newLikedSongs);
    await AsyncStorage.setItem('likedMusic', JSON.stringify(newLikedSongs));
  };

  return (
    <FlatList 
      data={likedSongs}
      renderItem={({item}) => (
        <View style={{alignItems: 'center'}}>
          <Image
            source={{uri: item.artwork}}
            style={{width: 200, height: 200, marginBottom: 10, marginTop: 20}}
          />
          <Text style={styles.text_title}>Titre : {item.name} ({item.minutes}min et {item.seconds}s)</Text>
          <Text style={styles.text_title}>Artist : {item.artist}</Text>
          <Text style={styles.text_title}>Album : {item.album}</Text>
          <Text style={styles.text_title}>Votre note : {item.rating}/5 </Text>
          <TouchableOpacity onPress={() => deleteSong(item.id)}>
            <Text style={[styles.text_title,{ color: 'red' }]}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}


const styles = StyleSheet.create({

  text_title: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
  },

 
});