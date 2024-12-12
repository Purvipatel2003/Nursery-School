import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/EventStyle';
import Labels from '../Helper/Labels';
import NewsCard from '../Component/NewsCard';
const Events = () => {
  const navigation = useNavigation();
  const EventHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{Labels.event}</Text>
        </View>
      </View>
    );
  };

  const data = [
    {
      id: 1,
      image: require('../assets/Images/photos/MaskGroup6.png'),
      title: '24th Jul to 1st Aug 2021',
      title1: 'The Crawley Funfair -',
      title2: ' - by London Carnival',
      title3: 'Monty Hammond & Sons',
      navigationplace: 'EventDetail',
    },
    {
      id: 2,

      title: '24th Jul to 1st Aug 2021',
      title1: '11+ Half-term accelerator course - ',
      title2: 'Courses running in Marlow',
      title3: 'Peasy Learning',
      title4: 'Company Name:',
      navigationplace: 'EventDetail',
    },
    {
      id: 3,
      image: require('../assets/Images/photos/MaskGroup4.png'),
      title: '24th Jul to 1st Aug 2021',
      title1: 'The Crawley Funfair -',
      title2: ' - by London Carnival',
      title3: 'Monty Hammond & Sons',
      navigationplace: 'EventDetail',
    },
    {
      id: 4,
      navigationplace: 'EventDetail',
      title: '24th Jul to 1st Aug 2021',
      title1: '11+ Half-term accelerator course - ',
      title2: 'Courses running in Marlow',
      title3: 'Peasy Learning',
      title4: 'Company Name:',
    },
  ];
  return (
    <View style={styles.container}>
      {EventHeader()}
      <NewsCard data={data} />
    </View>
  );
};

export default Events;
