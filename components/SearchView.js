import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements'; 
import { Picker } from '@react-native-picker/picker'; 
import MusicResults from './MusicResults';
import ArtistResults from './ArtistResults';


export default function SearchView(props) {

    const search = props.search;
    const filter = props.filter;
    const results = props.results;
    const updateSearch = props.updateSearch;
    const setFilter = props.setFilter;
    
    return ( 
    <View >
        <SearchBar 
        placeholder="Rechercher un artiste ou un titre"
        onChangeText={updateSearch}
        value={search}
        />
        <Picker 
        selectedValue={filter}
        onValueChange={(itemValue) => setFilter(itemValue)}
        mode='dropdown'
        style={{ height: 150}}
        >
        <Picker.Item label="Artiste" value="musicArtist" />
        <Picker.Item label="Titre" value="musicTrack" />
        </Picker>
        {filter === 'musicTrack' ? (
            <MusicResults 
                results={results} 
                filter={filter}
            />
        ) : ( 
            <ArtistResults 
                results={results}
                filter={filter} 
            />
        )}
    </View> 
    );

}

