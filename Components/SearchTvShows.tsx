import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {movieObject, tvShowObject} from './Home';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
type SearchTvShowsProps = NativeStackScreenProps<
  RootStackParamList,
  'SearchTvShows'
>;
const SearchTvShows = ({navigation}: SearchTvShowsProps) => {
  const [results, setResult] = useState<tvShowObject[]>([]);
  const getShows = (text: string) => {
    const data = fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=ab8559030a49bc9f9bceed8f63483db2&query=${text}`,
    ).then(data => {
      data.json().then(data2 => {
        setResult(data2.results);
      });
    });
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#000000'}}>
      <TextInput
        placeholder="Search Tv Shows"
        style={styles.input}
        onChangeText={text => {
          getShows(text);
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          {results.length != 0 &&
            results.map((show: tvShowObject, idx: number) => {
              return (
                <Pressable
                  key={idx}
                  onPress={() => {
                    navigation.navigate('TvShow', {
                      TvShowDetails: show,
                    });
                  }}>
                  <View style={styles.movieContainer}>
                    <Image
                      source={{
                        uri:
                          'https://image.tmdb.org/t/p/w500' + show.poster_path,
                      }}
                      style={styles.moviePoster}
                    />
                    <View style={styles.detailsContainer}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#758283',
                          fontSize: 20,
                        }}>
                        {show.original_name}
                      </Text>
                      <Text style={{margin: 10}}>
                        Language:{show.original_language}
                      </Text>
                      <Text style={{margin: 10}}>
                        Rating:{show.vote_average}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ffffff',
    borderWidth: 1.5,
    margin: 4,
    borderRadius: 5,
    padding: 4,
    color: '#ffffff',
  },
  container: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  movieContainer: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'stretch',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 10,
    width: 370,
    margin: 10,
    padding: 10,
  },
  moviePoster: {
    height: 240,
    width: 180,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
});
export default SearchTvShows;
