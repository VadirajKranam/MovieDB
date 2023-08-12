import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home, {movieObject, tvShowObject} from './Components/Home';
import Movie from './Components/Movie';
import TvShow from './Components/TvShow';
import Search from './Components/SearchMovies';
import InitialHome from './Components/InitialHome';
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
export type RootStackParamList = {
  Home: undefined;
  Movie: {
    MovieDetails: movieObject;
  };
  TvShow: {
    TvShowDetails: tvShowObject;
  };
  InitialHome: undefined;
  SearchMovies: undefined;
  SearchTvShows: undefined;
};
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="InitialHome">
          <Stack.Screen
            name="InitialHome"
            component={InitialHome}
            options={{
              headerShown: false,
              title: 'Welcome',
            }}
          />
          <Stack.Screen
            name="Movie"
            component={Movie}
            options={{
              title: 'Details',
            }}
          />
          <Stack.Screen
            name="TvShow"
            component={TvShow}
            options={{
              title: 'Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});
export default App;
