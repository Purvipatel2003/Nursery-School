import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../assets/Colors';
const NewsData = () => {
  const [article, setArticle] = useState([]);
  const fallbackImage = `https://via.placeholder.com/200x300.png?text=No+Image`;
  const getImageSource = img => {
    if (typeof img === 'string') {
      return {uri: img};
    }
    return img;
  };
  const getNews = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=763e25fd0a9a4f3096e2514c493e458f',
        {
          params: {
            category: 'technology',
          },
        },
      )
      .then(response => {
        setArticle(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };
  useEffect(() => {
    getNews();
  }, []);
  const renderItem = ({item}) => (
    <View style={styles.wrapper}>
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </Text>
      <Text style={styles.title1}>
        {'-'}
        {item.author}
      </Text>
      <Image
        source={getImageSource(item.urlToImage || fallbackImage)}
        style={styles.image}
        resizeMode="cover"
        onError={e =>
          console.log(
            'Error loading image, fallback used:',
            e.nativeEvent.error,
          )
        }
      />
      <Text style={styles.title1}>{item.publishedAt}</Text>
      <Text style={styles.description} numberOfLines={4} ellipsizeMode="tail">
        {item.description ||
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Technology News</Text>
      <FlatList
        data={article}
        renderItem={renderItem}
        keyExtractor={item => item.url}
      />
    </View>
  );
};

export default NewsData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: hp(2),
    fontWeight: 'bold',
    marginBottom: 16,
  },
  wrapper: {
    marginTop: hp(2),
    marginLeft: wp(5),
    width: wp(90),
    height: hp(50),
    borderRadius: 10,
    elevation: 3,
    backgroundColor: Colors.white,
  },

  title: {
    fontSize: 18,
    marginTop: hp(2),
    marginHorizontal: wp(5),
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  title1: {
    fontSize: 16,
    marginTop: hp(1),
    marginLeft: wp(5),
  },
  image: {
    width: wp(80),
    height: hp(20),
    marginTop: hp(3),
    marginLeft: wp(3),
  },
  description: {
    fontSize: 14,
    color: '#333',
    textAlign: 'justify',
    marginTop: hp(1),
    marginHorizontal: wp(5),
  },
});
