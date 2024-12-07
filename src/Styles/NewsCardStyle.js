import Colors from '../assets/Colors';
import fonts from '../assets/font';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  scrollView: {
    marginBottom: hp('2%'),
  },
  container1: {
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
    borderRadius: 10,
    width: wp('90%'),
    height: hp('18%'),
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: 12,
    fontWeight: '500',
    marginTop: wp('0.5%'),
    textAlign: 'center',
    color: Colors.green,
  },
  title1: {
    fontFamily: fonts.regular,
    fontSize: 16,
    //    marginTop:hp('2%'),
    fontWeight: '600',
    marginLeft: wp('4%'),
    color: Colors.black,

    maxWidth: wp(60),
  },
  title2: {
    fontFamily: fonts.regular,
    fontSize: 14,
    marginTop: hp('1%'),
    fontWeight: '400',
    marginLeft: wp('4%'),
    color: Colors.gray1,

    maxWidth: wp(60),
  },
  title3: {
    fontFamily: fonts.regular,
    fontSize: 14,
    marginTop: hp('0.5%'),
    fontWeight: '400',
    marginLeft: wp('4%'),
    color: Colors.gray1,

    maxWidth: wp(60),
  },
  image: {
    width: wp('35%'),
    height: hp('15%'),
    marginTop: hp('1.5%'),
    resizeMode: 'contain',
    marginLeft: wp('2%'),
  },
  box1: {
    backgroundColor: Colors.lightgreen,
    borderRadius: 8,
    width: wp('40%'),
    height: hp('2.5%'),
    marginTop: hp('1.5%'),
    marginLeft: wp('3%'),
    marginBottom: hp('1%'),
  },
});
