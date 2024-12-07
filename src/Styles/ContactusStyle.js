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
  haederText: {
    marginTop: hp('1.5%'),
    color: Colors.white,
    fontWeight: '500',
    fontSize: 20,
    marginLeft: wp('30%'),
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
  textname: {
    fontSize: 13,
    color: Colors.darkgrey,
    fontFamily: fonts.regular,
    fontWeight: '500',
    marginTop: hp('3%'),
    marginLeft: wp('5%'),
  },
  dropdown: {
    backgroundColor: Colors.white,
    marginTop: hp('1%'),
    borderColor: Colors.white,
    color: Colors.gray1,
    width: wp('90%'),
    elevation: 3,
    borderRadius: 10,
    marginLeft: wp('5%'),
  },
  Search: {
    width: wp('32%'),
    height: hp('5%'),
    borderRadius: 10,
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: hp('1%'),
    backgroundColor: Colors.primary,
  },
  errorText: {
    color: 'red', // Red color for error messages
    fontSize: 12, // Small font size for the error message
    marginTop: 5, // Space between the input field and the error message
    marginLeft: 10, // Optional: margin to align the error message
  },

  searchInput: {
    width: wp('90%'),
    marginTop: hp('1%'),
    marginLeft: wp('5%'),
    borderRadius: 10,
    color: Colors.gray1,
    backgroundColor: Colors.white,
    fontSize: 13,
    fontFamily: fonts.regular,
    elevation: 5, // Elevation for Android shadow (you can adjust the value)
    shadowColor: Colors.black, // Shadow color
    shadowOffset: {width: 0, height: -1}, // Horizontal and vertical offset of the shadow
    shadowOpacity: 3, // Opacity of the shadow
    shadowRadius: 6,
  },
  button3: {
    width: wp('30%'),
    height: hp('5%'),
    backgroundColor: Colors.primary,
    marginTop: hp('3%'),
    borderRadius: 10,
    marginHorizontal: wp('36%'),
  },
  text1: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: fonts.bold,
    marginVertical: hp('1%'),
  },
});
