import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import icons from '../Helper/icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Headerforcart = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItem] = useState(0);
  useEffect(() => {
    setCartItem(cartData.length);
  }, [cartData]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ice Cream Center</Text>
      {/* <Text style={styles.cart}> {cartItems}</Text> */}
      <View style={styles.cartContainer}>
        <Image source={icons.cart_icon} style={styles.cartIcon} />
        {cartItems > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartItems}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:hp(2),
    paddingHorizontal: wp(5),
  },
  header: {
    fontSize: 20,
    color: 'red',
    margin:hp(1.5),
    marginLeft: wp(25),
  },
  cartContainer: {
    position: 'relative',
  },
  cartIcon: {
    width: wp(8),
    height: hp(4),
    resizeMode: 'contain',
  },
  badge: {
    position: 'absolute',
    right: -wp(2),
    top: -hp(1),
    backgroundColor: 'red',
    borderRadius: wp(4),
    width: wp(4),
    height: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
export default Headerforcart;
