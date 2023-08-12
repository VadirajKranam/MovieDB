import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigatorProps,
  NativeStackScreenProps,
} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../App';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Movie from './Movie';
import TvShow from './TvShow';
import SearchMovies from './SearchMovies';
import SearchTvShows from './SearchTvShows';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
const Tab = createBottomTabNavigator<RootStackParamList>();
// const Stack = createNativeStackNavigator<RootStackParamList>();
// type InitialHomeProps = NativeStackScreenProps<RootStackParamList, 'InitialHome'>;
const InitialHome = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Welcome',
          tabBarIcon: ({}) => <Icon name="home" size={30} color="#900" />,
        }}
      />
      <Tab.Screen
        name="SearchMovies"
        component={SearchMovies}
        options={{
          title: 'SearchMovies',
          tabBarIcon: ({}) => <Icon name="movie" size={30} color="#900" />,
        }}
      />
      <Tab.Screen
        name="SearchTvShows"
        component={SearchTvShows}
        options={{
          title: 'Search Tv Shows',
          tabBarIcon: ({}) => <Icon2 name="tv" size={26} color="#900" />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
export default InitialHome;
