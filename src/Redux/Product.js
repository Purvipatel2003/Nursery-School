import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart, removefromcart} from '../Store/Actions';
import {useDispatch, useSelector} from 'react-redux';
import icons from '../Helper/icons';
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
          style={styles.removeButton}
          onPress={() => handleRemoveCart(item)}>
          {/* <Icon name="minus" size={20} color="white" /> */}

          <Text style={styles.removebuttonText}>REMOVE</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddToCart(item)}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
   
     borderColor:'lightblue',
    borderWidth:1,
    width: wp(42),
    height: hp(40),
    marginTop: hp(2),
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: wp(2),
    //elevation:3,
    alignItems: 'center',
  },
  image: {
    width: wp(36),
    height: hp(20),
    borderRadius: 10,
    resizeMode: 'cover',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    marginTop: 10,
    borderRadius: 20,
    width: wp(30),
    height: hp(5),
    padding: 10,
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff69b4',
    marginTop: 10,
    borderRadius: 20,
    width: wp(30),
    height: hp(5),
    padding: 10,
  },
  buttonText: {
    color: '#ff69b4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  removebuttonText: {
    color: 'lightblue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: hp(1),
    fontWeight: '700',
    color: '#343a40',
  },
  price: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#6c757d',
    marginTop: hp(0.5),
  },
});
