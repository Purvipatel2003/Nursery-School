import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../assets/Colors';
const Signup = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
        <Text style={styles.splashButtonText}>Splash Screen</Text>
      </TouchableOpacity>
      <Text>SIGNUP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashButtonText: {
    fontSize: wp(3.8),
    color: Colors.blue,
  },
});
export default Signup;
