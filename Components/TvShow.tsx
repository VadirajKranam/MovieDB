import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
type TvShowProps = NativeStackScreenProps<RootStackParamList, 'TvShow'>;
type Completedetail = {
  number_of_episodes: number;
};
const TvShow = ({route}: TvShowProps) => {
  const {TvShowDetails} = route.params;
  const [completeDetail, setCompleteDetail] = useState({number_of_episodes: 0});
  useEffect(() => {
    const data = fetch(
      `https://api.themoviedb.org/3/tv/${TvShowDetails.id}?api_key=ab8559030a49bc9f9bceed8f63483db2`,
    ).then(d => {
      d.json().then(d2 => {
        setCompleteDetail(d2);
        //console.log(d2)
      });
    });
    //console.log(completeDetail)
  }, []);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#000000'}}>
      <View style={{flex: 1, backgroundColor: '#000000'}}>
        <Image
          source={{
            uri: 'https://image.tmdb.org/t/p/w500' + TvShowDetails.poster_path,
          }}
          resizeMode="stretch"
          height={400}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {TvShowDetails.original_name}
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
            <Text style={{fontSize: 17}}>{TvShowDetails.overview}</Text>
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
            <Text>Release date : {TvShowDetails.first_air_date}</Text>
          </View>
          <View>
            <Text>Rating: {TvShowDetails.vote_average}/10</Text>
          </View>
          <View>
            <Text>No of episodes : {completeDetail.number_of_episodes}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TvShow;
