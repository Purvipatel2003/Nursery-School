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
    fontFamily: fonts.regular,
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
  wrapper1: {
    backgroundColor: Colors.white,
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
    marginLeft: wp('35%'),
  },
  name: {
    fontSize: 16,
    
    fontWeight: '500',
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
    color: Colors.black,
    fontFamily: fonts.medium,
  },
  card: {
    width: wp('100%'),
    height: hp('10%'),
    backgroundColor: Colors.white,
  },
  box: {
    marginVertical: hp('2%'),

    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box1: {
    height: hp('10%'),
    backgroundColor: Colors.white,
    //marginVertical: hp('2%'),
    flexDirection: 'row',
    paddingTop: hp('2.75%'),
    justifyContent: 'space-around',
    elevation: 20, // Elevation for Android shadow (you can adjust the value)
    shadowColor: Colors.black, // Shadow color
    shadowOffset: { width: 0, height: -1 }, // Horizontal and vertical offset of the shadow
    shadowOpacity: 3, // Opacity of the shadow
    shadowRadius: 6,
  },
  line: {
    height: hp('0.2%'),
    width: wp('90%'),
    marginTop: hp('3%'),
    marginLeft: wp('5%'),
    backgroundColor: Colors.lightgray,
    // marginVertical: hp('1%'),
  },
  checkbox: {
    width: wp('7.8%'),
    height: hp('3.75%'),
    marginTop: hp('1.5%'),
    marginRight: wp('6%'),
  },
  checkboxdetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: wp('45%'),
    height: hp('5%'),
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderRadius: 10,
    marginHorizontal: wp('4.5%'),
    borderWidth: 1,
  },
  button1: {
    width: wp('45%'),
    height: hp('5%'),
    backgroundColor: Colors.primary,

    borderRadius: 10,
    marginHorizontal: wp('4%'),

    color: Colors.white,
  },
  text: {
    textAlign: 'center',
    color: Colors.primary,
    textShadowColor: Colors.primary,
    fontFamily: fonts.bold,
    marginVertical: hp('1%'),
  },
  text1: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: fonts.bold,
    marginVertical: hp('1%'),
  },
});
