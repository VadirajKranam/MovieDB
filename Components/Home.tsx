import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type movieObject = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type tvShowObject = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

const Home = ({navigation}: HomeProps) => {
  const [popularMovieList, setPopularMovieList] = useState<movieObject[]>([]);
  const [topRatedMovieList, setTopRatedMovieList] = useState<movieObject[]>([]);
  const [popularTvShows, setPopularTvShows] = useState<tvShowObject[]>([]);
  const [topRatedTVShows, setTopRatedTVShows] = useState<tvShowObject[]>([]);
  async function getPopulaerMovies() {
    const data = fetch(
      'https://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc,with_cast=true&api_key=ab8559030a49bc9f9bceed8f63483db2',
    ).then(data => {
      data.json().then(data2 => {
        setPopularMovieList(data2.results);
      });
    });
  }
  async function getTopRatedMovies() {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=ab8559030a49bc9f9bceed8f63483db2',
    ).then(data => {
      data.json().then(data2 => {
        setTopRatedMovieList(data2.results);
      });
    });
  }
  async function getPopularTvShows() {
    fetch(
      'https://api.themoviedb.org/3/tv/popular?api_key=ab8559030a49bc9f9bceed8f63483db2',
    ).then(data => {
      data.json().then(data2 => {
        setPopularTvShows(data2.results);
      });
    });
  }
  async function getTopRatedTvShows() {
    fetch(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=ab8559030a49bc9f9bceed8f63483db2',
    ).then(data => {
      data.json().then(data2 => {
        setTopRatedTVShows(data2.results);
      });
    });
  }
  useEffect(() => {
    getPopulaerMovies().then(() => {
      console.log('success');
    });
    getTopRatedMovies().then(() => {
      console.log('success 2');
    });
    getPopularTvShows().then(() => {
      console.log('success 3');
    });
    getTopRatedTvShows().then(() => {
      console.log('success 4');
    });
  }, []);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#000000'}}>
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 23}}>
          Popular Movies
        </Text>
        <ScrollView horizontal>
          {popularMovieList.length != 0 &&
            popularMovieList.map((movie: movieObject, idx: number) => {
              return (
                <Pressable
                  key={idx}
                  onPress={() => {
                    // console.log(movie)
                    navigation.navigate('Movie', {
                      MovieDetails: movie,
                    });
                  }}>
                  <View style={styles.movieContainer}>
                    <Image
                      source={{
                        uri:
                          'https://image.tmdb.org/t/p/w500' + movie.poster_path,
                      }}
                      style={styles.moviePoster}
                    />
                    <Text style={{fontWeight: 'bold', color: '#B4161B'}}>
                      {movie.title}
                    </Text>
                    <Text>Language:{movie.original_language}</Text>
                    <Text>Rating:{movie.vote_average}</Text>
                  </View>
                </Pressable>
              );
            })}
        </ScrollView>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 23}}>
          Top rated Movies
        </Text>
        <ScrollView horizontal>
          {topRatedMovieList.length != 0 &&
            topRatedMovieList.map((movie: movieObject, idx: number) => {
              return (
                <Pressable
                  key={idx}
                  onPress={() => {
                    navigation.navigate('Movie', {
                      MovieDetails: movie,
                    });
                  }}>
                  <View style={styles.movieContainer}>
                    <Image
                      source={{
                        uri:
                          'https://image.tmdb.org/t/p/w500' + movie.poster_path,
                      }}
                      style={styles.moviePoster}
                    />
                    <Text style={{fontWeight: 'bold', color: '#B4161B'}}>
                      {movie.title}
                    </Text>
                    <Text>Language:{movie.original_language}</Text>
                    <Text>Rating:{movie.vote_average}</Text>
                  </View>
                </Pressable>
              );
            })}
        </ScrollView>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 23}}>
          Popular TV shows
        </Text>
        <ScrollView horizontal>
          {popularTvShows.length != 0 &&
            popularTvShows.map((show: tvShowObject, idx: number) => {
              return (
                <Pressable
                  key={idx}
                  onPress={() => {
                    navigation.navigate('TvShow', {
                      TvShowDetails: show,
                    });
                  }}>
                  <View key={idx} style={styles.movieContainer}>
                    <Image
                      source={{
                        uri:
                          'https://image.tmdb.org/t/p/w500' + show.poster_path,
                      }}
                      style={styles.moviePoster}
                    />
                    <Text style={{fontWeight: 'bold', color: '#B4161B'}}>
                      {show.name}
                    </Text>
                    <Text>Language:{show.original_language}</Text>
                    <Text>Rating:{show.vote_average}</Text>
                  </View>
                </Pressable>
              );
            })}
        </ScrollView>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 23}}>
          Top rated TV shows
        </Text>
        <ScrollView horizontal>
          {topRatedTVShows.length != 0 &&
            topRatedTVShows.map((show: tvShowObject, idx: number) => {
              return (
                <Pressable
                  key={idx}
                  onPress={() => {
                    navigation.navigate('TvShow', {
                      TvShowDetails: show,
                    });
                  }}>
                  <View key={idx} style={styles.movieContainer}>
                    <Image
                      source={{
                        uri:
                          'https://image.tmdb.org/t/p/w500' + show.poster_path,
                      }}
                      style={styles.moviePoster}
                    />
                    <Text style={{fontWeight: 'bold', color: '#B4161B'}}>
                      {show.name}
                    </Text>
                    <Text>Language:{show.original_language}</Text>
                    <Text>Rating:{show.vote_average}</Text>
                  </View>
                </Pressable>
              );
            })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  movieContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    // width: 230,
    margin: 10,
    padding: 10,
  },
  moviePoster: {
    height: 240,
    width: 180,
    borderRadius: 10,
  },
});
