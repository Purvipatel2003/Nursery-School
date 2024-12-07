import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/EventDetailStyle';
import Labels from '../Helper/Labels';
import VerticalCard from './VerticalCard';
const EventDetail = () => {
  const navigation = useNavigation();

  const EventHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{Labels.event_detail}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {EventHeader()}
      <VerticalCard />
    </View>
  );
};

export default EventDetail;
