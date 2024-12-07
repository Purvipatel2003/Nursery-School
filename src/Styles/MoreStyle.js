import Colors from '../assets/Colors';
import fonts from '../assets/font';
import {StyleSheet} from 'react-native';
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
    justifyContent: 'center',
  },

  headerText: {
    marginTop: hp('1.5%'),
    color: Colors.white,
    fontWeight: '500',
    fontSize: 20,
    fontFamily: fonts.regular,
  },
  wrapper2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp('5%'),
    marginRight:wp(2),
    marginTop: hp('1.5%'),
  },

  buttonName: {
    fontFamily: fonts.medium,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '500',
    flex: 1,
    // marginRight:wp('50%'),
    paddingHorizontal: wp('1.5%'),
    marginTop: hp('1%'),
  },
  button1: {
    height: hp('43%'),
    backgroundColor: Colors.white,
    marginTop: hp('2%'),
  },
  button2: {
    height: hp('60%'),
    backgroundColor: Colors.white,
    marginTop: hp('2%'),
  },
  drop_icon: {
    width: wp('5%'),
    height: hp('5%'),
    resizeMode: 'contain',
    marginEnd: wp('3%'),
    transform: [{rotate: '-90deg'}],
  },
  line: {
    height: hp('0.2'),
    width: wp('90%'),
    backgroundColor: Colors.lightgray,
    marginTop: hp('2%'),
    marginHorizontal: wp('5%'),
  },
  button3: {
    height: hp('20%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: wp('10%'),
    height: hp('8%'),
    resizeMode: 'contain',
    marginTop: hp('6%'),
    marginHorizontal: wp('1.5%'),
   
  },
  bottomtext: {
    textAlign: 'center',
    color: Colors.darkgrey,
    fontFamily: fonts.regular,
    fontSize: 10,
    fontWeight: '400',
    marginTop:('-12%'),
  },
  bottomtext1: {
    textAlign: 'center',
    color: Colors.darkgrey,
    fontFamily: fonts.regular,
    fontSize: 10,
    fontWeight: '400',
    marginTop:('2%'),
  },
 
});
