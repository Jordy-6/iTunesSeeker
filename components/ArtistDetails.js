import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function MusicDetails(props) {

    const item = props.item;

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: item.artworkUrl100}}
            />
            <Text>{item.artistName}</Text>
            <Text>{item.primaryGenreName}</Text>
            <Text>{item.collectionName}</Text>
            <Button
                title="Go back"
                onPress={() => props.navigation.goBack()}
            />
        </View>
    );  
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