import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/VerticalStyle';

const Vertical = ({data}) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.scrollview}>
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.container1}
              onPress={() => navigation.navigate(item.navigationplace)}>
              <View>
                <Image source={item.image} style={styles.image} />
                <View style={styles.box}>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </View>
              <View style={styles.box1}>
                <Text
                  style={styles.title}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.title}{' '}
                </Text>
                <Text
                  style={styles.title1}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.title1}
                </Text>
                <Text
                  style={styles.title2}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.title2}
                </Text>
                <Text
                  style={styles.title2}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.title3}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Vertical;
