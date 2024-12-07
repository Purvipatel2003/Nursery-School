import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/NewStyle';
import NewsCard from './NewsCard';

const News = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      image: require('../assets/Images/photos/MaskGroup6.png'),
      title: '24th Jul to 1st Aug 2021',
      title1: 'The Crawley Funfair -',
      title2: ' - by London Carnival',
      title3: 'Monty Hammond & Sons',
      navigationplace: 'NewsEvents',
    },
    {
      id: 2,

      title: '24th Jul to 1st Aug 2021',
      title1: '11+ Half-term accelerator course - ',
      title2: 'Courses running in Marlow',
      title3: 'Peasy Learning',
      title4: 'Company Name:',
      navigationplace: 'NewsEvents',
    },
    {
      id: 3,
      image: require('../assets/Images/photos/MaskGroup4.png'),
      title: '24th Jul to 1st Aug 2021',
      title1: 'The Crawley Funfair -',
      title2: ' - by London Carnival',
      title3: 'Monty Hammond & Sons',
      navigationplace: 'NewsEvents',
    },
    {
      id: 4,

      title: '24th Jul to 1st Aug 2021',
      title1: '11+ Half-term accelerator course - ',
      title2: 'Courses running in Marlow',
      title3: 'Peasy Learning',
      title4: 'Company Name:',
      navigationplace: 'NewsEvents',
    },
  ];
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
      <NewsCard data={data} />
    </View>
  );
};

export default News;
