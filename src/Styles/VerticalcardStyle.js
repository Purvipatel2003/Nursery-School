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
    fontFamily: fonts.medium,
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
  headerText: {
    marginTop: hp('1.5%'),
    color: Colors.white,
    fontWeight: '500',
    fontSize: 20,
    fontFamily: fonts.regular,
    marginLeft: wp('22%'),
  },
  wrapper1: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginTop: hp('2%'),
  },
  image: {
    width: wp('35%'),
    height: hp('20%'),
    resizeMode: 'contain',
    borderRadius: 10,
    marginLeft: wp('5%'),
  },
  text: {
    color: Colors.black,
    fontFamily: fonts.bold,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: wp('5%'),
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: 12,
    fontWeight: '500',
    marginTop: wp('0.5%'),
    textAlign: 'center',
    color: Colors.green,
  },
  box1: {
    backgroundColor: Colors.lightgreen,
    borderRadius: 8,
    width: wp('40%'),
    height: hp('2.5%'),
    marginTop: hp('2.8%'),
    marginLeft: wp('3%'),
    marginBottom: hp('1%'),
  },
  cardContainer: {
    width: wp('100%'),

    backgroundColor: Colors.white,

    marginTop: wp('1%'),
  },
  desc: {
    fontFamily: fonts.medium,
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },

  detaildesc: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: Colors.gray1,
    fontWeight: '400',
    paddingHorizontal: wp('5%'),
    textAlign: 'justify',

    marginTop: hp('1%'),
  },
  readMoreText: {
    fontSize: 15,
    marginLeft: wp('5%'),
    fontFamily: fonts.medium,
    color: Colors.primary,
    marginVertical: wp('2%'),
    fontWeight: '900',
  },
  contact_icon: {
    marginLeft: wp('5%'),
    width: wp('5%'),
    height: wp('5%'),
    resizeMode: 'contain',
  },
  box: {
    marginTop: hp('1%'),
    width: wp('100%'),
    height: hp('38%'),
    backgroundColor: Colors.white,
  },
  title1: {
    fontSize: 14,
    fontFamily: fonts.medium,
    fontWeight: '500',
    marginLeft: wp('3%'),
  },
  title2: {
    fontSize: 14,
    fontFamily: fonts.medium,
    fontWeight: '500',
    marginLeft: wp('5%'),
    marginTop: hp('1.5%'),
  },
  line: {
    height: hp('0.2'),
    width: wp('90%'),
    backgroundColor: Colors.lightgray,
    marginTop: hp('2%'),
    marginHorizontal: wp('5%'),
  },
  scrollView: {
    marginBottom: hp('2%'),
  },
});
