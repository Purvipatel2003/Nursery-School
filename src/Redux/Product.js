import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart, removefromcart} from '../Store/Actions';
import {useDispatch, useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Product = props => {
  const [isAdded, setIsAdded] = useState(false);
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };
  const handleRemoveCart = item => {
    dispatch(removefromcart(item.name));
  };
  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>

      {isAdded ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRemoveCart(item)}>
          <Text>REMOVE</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToCart(item)}>
          <Text>ADD</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: wp(42),
    height: hp(30),
    marginTop: hp(2),
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: wp(2),
  },
  image: {
    width: wp(36),
    height: hp(20),
    borderRadius: 5,
    marginTop: hp(-3),
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'lightblue',
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    margin:wp(3.2),
    fontSize: 18,
    width: wp(30),
    height: hp(4),
    padding: 5,
  },
  name: {
    fontSize: 20,
    textAlign:'center',
    marginTop:hp(-2),
    fontWeight: '600',
  },
  price: {
    textAlign:'center',
    fontSize: 16,
    fontWeight:'400',
  },
});
