import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MusicDetails(props) {

  const item = props.item;
  const minutes = Math.floor(item.trackTimeMillis / 60000);
  const seconds = ((item.trackTimeMillis % 60000) / 1000).toFixed(0);
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleLike = async () => {
    const likedMusic = JSON.parse(await AsyncStorage.getItem('likedMusic')) || [];
    const song = {
      id: item.trackId,
      name: item.trackName,
      artist: item.artistName,
      artwork: item.artworkUrl100,
      minutes: minutes,
      seconds: seconds,
      rating: rating,
      collectionName: item.collectionName,
      genre: item.primaryGenreName,
      album : item.collectionName
    };
    
    if (liked) {
      const index = likedMusic.findIndex((song) => song.id === item.trackId);
      likedMusic.splice(index, 1);
    }
    else {
      likedMusic.push(song);
    }
    await AsyncStorage.setItem('likedMusic', JSON.stringify(likedMusic));

    setLiked(!liked);
    }
  
  

  const ratingCompleted = (rating) => {
    setRating(rating);
  }

    return (
    <View style={styles.container}>
      <Image  
        style={styles.image}
        source={{uri: item.artworkUrl100}}
      />
      <View style={styles.favoris}>
        <Text style={[styles.text_title, {textAlign : 'center', width : '90%', paddingLeft: 40 }]}>{item.trackName}</Text>
        <TouchableOpacity onPress={toggleLike}>
          <Icon name={liked ? 'heart' : 'heart-o'} size={30} color="red" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.text_description}>{item.artistName}</Text>
      <Text style={styles.text_description}>Album : {item.collectionName}</Text>
      <Text style={styles.text_description}>Genre : {item.primaryGenreName}</Text>
      <Text style={styles.text_description}>{minutes} minutes {seconds} seconds</Text>
      <Rating
        showRating
        onFinishRating={ratingCompleted}
        style={{ paddingVertical: 10 }}
      />
      
      <TouchableOpacity onPress={() => props.navigation.navigate('Favoris')}>
        <Text style={{marginTop: 50, fontSize: 20, color: 'pink', fontWeight: 'bold'}}>Mes favoris</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'top',
    backgroundColor: 'white',
    height: '100%',
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 50,
  },
  text_title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
  },

  text_description: {
    fontSize: 15,
    marginTop: 5,
  },

  favoris: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  }
});