import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image, FlatList, Text, StyleSheet } from 'react-native';


export default function ArtistResults(props) {
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
                            <Text>{item.artistName}</Text>
                            <Text>{item.trackName}</Text>
                            <Text>{item.collectionName}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.artistId}
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
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'top',
        marginTop: 10,
    },
});