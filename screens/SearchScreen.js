import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import SearchView from '../components/SearchView';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen({navigation}) {

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("musicArtist"); 
  const nav = useNavigation();
  

  const updateSearch = (search) => {
    setSearch(search);
  };  

  useEffect(() => {
    const  fetchUsers = async () => {
      try {
          // Récupération asynchrone de la liste des utilisateurs
          const response = await fetch(
            `https://itunes.apple.com/search?term=${encodeURIComponent(search)}&media=music&entity=${encodeURIComponent(filter)}&limit=50`
          ); 
          if (response.status !== 200) {
            const text = await response.text();
            console.log('Unexpected response:', text);
            return;
          }
          const results = await response.json();  
          setResults(results.results);

          // Mise à jour du state
      }
      catch (err) {
          console.error(err); 
      }
     }
     fetchUsers();
  }, [search, filter]);



  return (

    <View style={{ backgroundColor: 'white', height:'100%'}}>

      <TouchableOpacity onPress={() => nav.navigate('Favoris')}>
        <Icon name="heart" size={35} color="red" style={styles.container}/>
      </TouchableOpacity>

      <SearchView 
        search={search} 
        updateSearch={updateSearch} 
        filter={filter} 
        setFilter={setFilter} 
        results={results}  
      />
    </View>

    
  );

  
}   

styles = StyleSheet.create({
  container: {
    width: 45,
    display: 'flex',
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginTop: 10,
  }
});