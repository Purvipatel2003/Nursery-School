import {Platform, StyleSheet} from 'react-native';
import fonts from '../assets/font.js';
import Colors from '../assets/Colors.js';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    flex: 1,
    fontFamily: fonts.regular,
  },
  header: {
    backgroundColor: Colors.primary1,
    width: wp('100%'),
    height:Platform.OS==='ios'?hp('10%'):hp('7%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '500',
    marginTop: hp('1.5%'),
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
    backgroundColor: Colors.white,
    opacity: 1.9,
    borderRadius: 10,
    paddingHorizontal: wp('4%'),
    height: 50,
    width: wp('90%'),
    marginLeft: wp('5%'),
    elevation: 3,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: wp('3%'),
  },
  searchInput: {
    flex: 1,
    color: Colors.darkgrey,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: fonts.regular,
  },
  dropdown: {
    backgroundColor: Colors.white,
    marginTop: hp('2%'),
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
  wrapper: {
    marginTop: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  group_icon: {
    width:wp('32%'),
    height:hp('25%'),
    marginTop:hp('2%'),
    resizeMode:'contain',
  },
});
