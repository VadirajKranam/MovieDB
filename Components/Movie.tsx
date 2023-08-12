import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
type MovieProps = NativeStackScreenProps<RootStackParamList, 'Movie'>;
type Completedetail = {
  overview: string;
};
const Movie = ({route}: MovieProps) => {
  const {MovieDetails} = route.params;
  const [completeDetail, setCompleteDetail] = useState<Completedetail>({
    overview: '',
  });
  useEffect(() => {
    const data = fetch(
      `https://api.themoviedb.org/3/movie/${MovieDetails.id}?api_key=ab8559030a49bc9f9bceed8f63483db2`,
    ).then(d => {
      d.json().then(d2 => {
        setCompleteDetail(d2);
      });
    });
  }, []);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#000000'}}>
      <View style={{flex: 1, backgroundColor: '#000000'}}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + MovieDetails.poster_path,
          }}
          resizeMode="stretch"
          height={400}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {MovieDetails.original_title}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#3944F7',
            height: 40,
            borderRadius: 10,
            margin: 3,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>Overview</Text>
          </View>
        </View>
        <View
          style={{
            margin: 10,
            padding: 10,
            backgroundColor: '#120E43',
            borderRadius: 10,
          }}>
          <View>
            <Text style={{fontSize: 17}}>{completeDetail.overview}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text>Release date : {MovieDetails.release_date}</Text>
          </View>
          <View>
            <Text>Rating: {MovieDetails.vote_average}/10</Text>
          </View>
          <View></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Movie;
