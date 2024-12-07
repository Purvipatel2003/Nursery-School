import Colors from '../assets/Colors';
import fonts from '../assets/font';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    fontFamily: fonts.medium,
  },
  header: {
    backgroundColor: Colors.primary1,
    width: wp(100),
    height: Platform.OS === 'ios' ? hp(10) : hp(7),

    color: Colors.white,
  },
  wrapper: {
    flexDirection: 'row',
  },
  backIcon: {
    marginTop: hp(1.5),
    width: wp(5),
    height: hp(4),
    marginLeft: wp(5),
  },

  headerText: {
    marginTop: hp(1.5),
    color: Colors.white,
    fontWeight: '500',
    fontSize: RFValue(20),
    fontFamily: fonts.regular,
    marginLeft: wp(28),
  },
  container1: {
    marginTop: hp(2),
    marginHorizontal: wp(5),
    borderRadius: 10,
    width: wp(90),
    height: hp(18),
    backgroundColor: Colors.white,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: wp(4),
    marginTop:hp(2),
  },
  title1: {
    fontFamily: fonts.regular,
    fontSize: 12,
    fontWeight: '500',
    marginTop:hp(0.5),
    marginLeft: wp(4),
    color: Colors.darkgrey,
  },
  desc: {
    fontFamily: fonts.regular,
    fontSize: 14,
    fontWeight: '500',
    marginTop:hp(1.5),
    marginHorizontal: wp(4),
    textAlign:'justify',
    color: Colors.gray1,
  },
  scrollview:{
    marginBottom:hp(2),
  }
});
