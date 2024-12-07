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
  header: {
    backgroundColor: Colors.primary1,
    width: wp('100%'),
    height: Platform.OS === 'ios' ? hp('10%') : hp('7%'),

    color: Colors.white,
  },
  wrapper: {
    flexDirection: 'row',
  },
  button1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: wp('4%'),
  },
  haederText: {
    marginTop: hp('1.5%'),
    color: Colors.white,
    fontWeight: '500',
    fontSize: 20,
    marginLeft: wp('30%'),
  },
  backIcon: {
    marginTop: hp('1.5%'),
    width: wp('5%'),
    height: hp('4%'),
    marginLeft: wp('5%'),
  },
 
  date: {
    fontSize: 15,
    color: Colors.darkgrey,
    marginTop: hp('1.5%'),
    marginRight: wp('10%'),
  },
  box2:{
   overflow:'hidden',
   bottom:180,
   position:'absolute',
   right:5,
  },
  addicon: {
    width: wp('25%'),
    height: hp('10%'),
    marginLeft: wp('60%'),
  },
});
