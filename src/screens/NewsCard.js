import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from '../Styles/NewsCardStyle';
import {useNavigation} from '@react-navigation/native';
const NewsCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.container1}
                onPress={() => navigation.navigate(item.navigationplace)}>
                {item.image && (
                  <View>
                    <Image source={item.image} style={styles.image} />
                  </View>
                )}
                <View>
                  <View style={styles.box1}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  {item.title1 && (
                    <Text
                      style={styles.title1}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.title1}
                    </Text>
                  )}
                  {item.title2 && (
                    <Text
                      style={styles.title1}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.title2}
                    </Text>
                  )}
                  {item.title4 && (
                    <Text
                      style={styles.title2}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.title4}
                    </Text>
                  )}
                  {item.title3 && (
                    <Text
                      style={styles.title3}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.title3}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsCard;
