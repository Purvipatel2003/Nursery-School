import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from '../Styles/ReviewsStyle';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';

import Labels from '../Helper/Labels';
import Reviewpart from '../Component/Reviewpart';

const Reviews = () => {
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
  const ReviewHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.haederText}>{Labels.review}</Text>
        </View>
      </View>
    );
  };
  const Button = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('AddReview')}
        style={styles.box2}>
        <Image source={icons.add_icon} style={styles.addicon} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {ReviewHeader()}
      <Reviewpart data={data} />
      {Button()}
    </View>
  );
};

export default Reviews;
