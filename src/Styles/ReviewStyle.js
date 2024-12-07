import {StyleSheet} from 'react-native';
import Colors from '../assets/Colors';
import fonts from '../assets/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
 
  button1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: wp('4%'),
  },
  
  backIcon: {
    marginTop: hp('1.5%'),
    width: wp('5%'),
    height: hp('4%'),
    marginLeft: wp('5%'),
  },
  box: {
    height: hp('90%'),
    backgroundColor: Colors.white,
    marginTop: hp('2%'),
  },
  readMoreText: {
    fontSize: 15,
    marginLeft: wp('9%'),
    fontFamily: fonts.medium,
    color: Colors.primary,
    marginVertical: wp('2%'),
    fontWeight: '900',
  },
  detaildesc: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: Colors.gray1,
    fontWeight: '500',
    paddingHorizontal: wp('5%'),
    textAlign: 'justify',
    marginLeft: wp('4%'),
    marginTop: hp('1%'),
  },
  nurseryName: {
    fontFamily: fonts.regular,
    padding: 15,
    fontSize: 15,
    fontWeight: '500',
    marginLeft: wp('5%'),
  },
  line: {
    height: hp('0.2'),
    width: wp('90%'),
    backgroundColor: Colors.lightgray,
    marginTop: hp('1%'),
    marginLeft: wp('10%'),
  },
  date: {
    fontSize: 15,
    color: Colors.darkgrey,
    marginTop: hp('1.5%'),
    marginRight: wp('10%'),
  },
  box2: {
    overflow: 'hidden',
    bottom: 180,
    position: 'absolute',
    right: 5,
  },
  addicon: {
    width: wp('25%'),
    height: hp('10%'),
    marginLeft: wp('60%'),
  },
});
