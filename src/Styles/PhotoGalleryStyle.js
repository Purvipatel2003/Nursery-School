import {StyleSheet} from 'react-native';
import Colors from '../assets/Colors';
import fonts from '../assets/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  headerText: {
    marginTop: hp('1.5%'),
    color: Colors.white,
    fontWeight: '500',
    fontSize: 20,
    marginLeft: wp('28%'),
  },
  header: {
    backgroundColor: Colors.primary1,
    width: wp('100%'),
    height: Platform.OS === 'ios' ? hp('10%') : hp('7%'),

    color: Colors.white,
  },
  wrapper: {
    flexDirection: 'row',
  },
  backIcon: {
    marginTop: hp('1.5%'),
    width: wp('5%'),
    height: hp('4%'),
    marginLeft: wp('5%'),
  },
  container1: {
    padding: 10,
  },
  item: {
   
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    borderRadius: 10,
    height: hp('100%'),
    borderRadius: 8,
  },
});
