import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import ArtistDetails from '../components/ArtistDetails';
import MusicDetails from '../components/MusicDetails'

export default function DetailedScreen({route}) {
  
  const { item, filter } = route.params;
  const navigation = useNavigation();

  if (filter === 'musicTrack') {
    return (
      <MusicDetails item={item} navigation={navigation} />
    );
  } else {
    return (
      <ArtistDetails item={item} navigation={navigation} />
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'top',
      marginTop: 50,
    },
    image: {
      width: 100,
      height: 100,
    },
});