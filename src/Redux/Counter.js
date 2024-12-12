import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addition, subtraction} from '../Store/Actions';
import Headerforcart from './Headerforcart';
import {useNavigation} from '@react-navigation/native';
import Product from './Product';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../assets/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Counter = props => {
  const navigation = useNavigation();
  const data = useSelector(state => state.mainReducer);
  const {counter} = data;
  const dispatch = useDispatch();
  const Products = [
    {
      name: 'BlackCurrent ',
      price: '$20',
      image: require('../assets/Images/photos/IceCream1.jpg'),
    },
    {
      name: 'Blue Berry',
      price: '$28',
      image: require('../assets/Images/photos/IceCream2.jpg'),
    },
    {
      name: 'StrawBerry',
      price: '$20',
      image: require('../assets/Images/photos/IceCream3.jpg'),
    },
    {
      name: 'Chocolate',
      price: '$25',
      image: require('../assets/Images/photos/IceCream4.jpg'),
    },
    {
      name: 'Delight',
      price: '$30',
      image: require('../assets/Images/photos/IceCream5.jpg'),
    },
    {
      name: 'Special',
      price: '$35',
      image: require('../assets/Images/photos/IceCream6.jpg'),
    },
  ];
  const button = () => {
    return (
      <View style={styles.wrapper1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('userList')}
          style={styles.button}>
          <Text>Go to User List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsData')}
          style={styles.button}>
          <Text>Go to News</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const counterpart = () => {
    return (
      <>
        <Button title="INCREMENT" onPress={() => dispatch(addition())} />
        <Text style={styles.text}>{counter}</Text>
        <Button title="DECREMENT" onPress={() => dispatch(subtraction())} />
      </>
    );
  };
  const renderItem = ({item}) => (
    <View style={styles.productWrapper}>
      <Product item={item} />
    </View>
  );
  return (
    <>
      <View style={styles.container}>{counterpart()}</View>
      <Headerforcart />
      <ScrollView style={styles.scrollview}>
        <View>
          <FlatList
            data={Products}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.wrapper}
          />
        </View>
        {button()}
      </ScrollView>
    </>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  wrapper1: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 10,
  },
  wrapper: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: 'lightblue',
    marginTop: hp(2),
    marginLeft: wp(5),
    borderRadius: 10,
    alignItems: 'center',
    fontSize: 18,
    width: wp(30),
    height: hp(4),
    padding: 5,
  },
  scrollview: {
    marginBottom: hp(2),
    backgroundColor: Colors.gray,
    flex: 1,
  },
});
