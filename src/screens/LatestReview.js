import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../Styles/LatestReviewStyle';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import {Rating} from 'react-native-ratings';
import Reviewpart from './Reviewpart';
const LatestReview = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      name: 'Willard E Campbell',
      reviews: 4,

      date: '2 months',
    },
    {
      id: 2,
      name: 'James D Pond',
      reviews: 3,

      date: '2 months',
    },
    {
      id: 3,
      name: 'Lina D Coleman',
      reviews: 1,

      date: '2 months',
    },
    {
      id: 4,
      name: 'James D Pond',
      reviews: 3,

      date: '2 months',
    },
    {
      id: 5,
      name: 'James D Pond',
      reviews: 3,

      date: '2 months',
    },
  ];
  const LatestReviewHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.haederText}>{Labels.latest_review}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {LatestReviewHeader()}
      <Reviewpart data={data} />
    </View>
  );
};

export default LatestReview;
