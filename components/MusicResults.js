import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image, FlatList, Text, StyleSheet } from 'react-native';
import React from 'react';


export default function MusicResults(props) {
    const results = props.results;
    const filter = props.filter;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList
                data={results}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Details', {item: item, filter: filter})}
                    >
                        <View style={styles.item}>
                            <Image
                                style={styles.image}
                                source={{uri: item.artworkUrl100}}
                            />
                            <Text style={styles.text_title}>{item.artistName}</Text>
                            <Text style={styles.text_description}>{item.trackName}</Text>
                            
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.trackId}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
    image: {
        width: 120,
        height: 120,
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'top',
        marginTop: 20,
    },
    text_title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 10,
    },

    text_description: {
        fontSize: 12,
        marginTop: 5,
    },
});