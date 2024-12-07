import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/NewsEventStyles';
import Labels from '../Helper/Labels';
import VerticalCard from './VerticalCard';
const NewsEvents = () => {
  const navigation = useNavigation();

  const NewsHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{Labels.news_events}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {NewsHeader()}
      <VerticalCard />
    </View>
  );
};

export default NewsEvents;
