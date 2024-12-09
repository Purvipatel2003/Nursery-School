import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import icons from '../Helper/icons';
import styles from '../Styles/MoreStyle';
import {useNavigation} from '@react-navigation/native';
import {nursery} from './HomeScreen';
import {Nannies} from './HomeScreen';

import {schools} from './HomeScreen';

import {Tutors} from './HomeScreen';
import Labels from '../Helper/Labels';

const More = () => {
  const data1 = [
    {id: 1, name1: Labels.nursery, navigationplace: nursery},
    {
      id: 2,
      name1: Labels.school,
      navigationplace: schools,
    },
    {id: 3, name1: Labels.nannies, navigationplace: Nannies},
    {
      id: 4,
      name1: Labels.tutors,
      navigationplace: Tutors,
    },
    {
      id: 5,
      name1: Labels.e_learning_school,
     
    },
  ];
  const data2 = [
    {id: 1, name1: Labels.testimonials, navigationplace: 'Testimonials'},
    {
      id: 2,

      name1: Labels.blogs,
      navigationplace: 'Blogs',
    },
    {id: 3, name1: Labels.parent_guide, navigationplace: 'ParentsGuide'},
    {
      id: 4,

      name1: Labels.recent_event,
      navigationplace: 'Event',
    },
    {
      id: 5,

      name1: Labels.latest_review,
      navigationplace: 'LatestReview',
    },
    {
      id: 6,

      name1: Labels.contact_us,
      navigationplace: 'contact',
    },
    {
      id: 7,

      name1: Labels.about_us,
      navigationplace: 'AboutUs',
    },
  ];
  const MoreHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <Text style={styles.headerText}>{Labels.more}</Text>
        </View>
      </View>
    );
  };
  const CopyRight = () => {
    return (
      <>
        <View style={styles.button3}>
          <Image source={icons.fb_icon} style={styles.icon} />
          <Image source={icons.twitter_icon} style={styles.icon} />
          <Image source={icons.linkdin_icon} style={styles.icon} />
          <Image source={icons.insta_icon} style={styles.icon} />
        </View>

        <Text style={styles.bottomtext}>
          Copyright@2021 nurseriesandschools
        </Text>
        <Text style={styles.bottomtext1}>Version 1.0</Text>
      </>
    );
  };
  const FirstFlatList = () => {
    return (
      <View style={styles.button1}>
        <FlatList
          data={data1}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Nursery', {state: item.navigationplace})
              }>
              <View style={styles.wrapper2}>
                <Text style={styles.buttonName}>{item.name1}</Text>
                <Image source={icons.drop_down_icon} style={styles.drop_icon} />
              </View>
              <View style={styles.line}></View>
            </TouchableOpacity>
          )}
          // horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  const SecondFlatList = () => {
    return (
      <View style={styles.button2}>
        <FlatList
          data={data2}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.navigationplace)}>
              <View style={styles.wrapper2}>
                <Text style={styles.buttonName}>{item.name1}</Text>
                <Image source={icons.drop_down_icon} style={styles.drop_icon} />
              </View>
              <View style={styles.line}></View>
            </TouchableOpacity>
          )}
          // horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {MoreHeader()}
      <ScrollView>
        {FirstFlatList()}
        {SecondFlatList()}
        {CopyRight()}
      </ScrollView>
    </View>
  );
};

export default More;
