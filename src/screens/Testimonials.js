import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/TestimonialStyle';
import Labels from '../Helper/Labels';

const Testimonials = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      title: 'Willard E Campbell',
      title1: 'Marketing Manager',
      dec: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
    },
    {
      id: 2,
      title: 'James D Pond',
      title1: 'General Manager',
      dec: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
    },
    {
      id: 3,
      title: 'Charles K Noll',
      title1: 'Marketing Manager',
      dec: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
    },
    {
      id: 4,
      title: 'Jeanette D Payne',
      title1: 'General Manager',
      dec: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
    },
    {
      id: 5,
      title: 'Willard E Campbell',
      title1: 'Marketing Manager',
      dec: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
    },
  ];
  const TestimonialHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{Labels.testimonials}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {TestimonialHeader()}
      <ScrollView style={styles.scrollview}>
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.container1}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.title1}>{item.title1}</Text>
                <Text style={styles.desc} numberOfLines={3} ellipsizeMode="tail">{item.dec}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Testimonials;
