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
    width: wp(100),
    height: hp(15),

    color: Colors.white,
  },
  wrapper: {
    flexDirection: 'row',
  },
  haederText: {
    marginTop: hp(3),
    color: Colors.white,
    fontWeight: '500',
    fontSize: 20,
    marginLeft: wp(30),
  },
  backIcon: {
    marginTop: hp(3),
    width: wp(5),
    height: hp(4),
    marginLeft: wp(5),
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1),
    backgroundColor: Colors.primary,
    opacity: 1.9,
    borderRadius: 10,
    width: wp(75),
    height: hp(5),
    elevation: 3,
    marginLeft: wp(6),
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginLeft: wp(4),
  },
  searchInput: {
    flex: 1,
    color: Colors.white,
    fontSize: 12,
    fontFamily: fonts.regular,
  },
  box: {
    flexDirection: 'row',
  },
  featuredSection: {
    marginTop: hp(1),
  },
  filter_icon: {
    width: wp(10),
    height: hp(5),
    borderRadius: 10,
    marginLeft: wp(2),
    marginTop: hp(1),
  },
  cardContainer1: {
    width: wp(90),
    height: hp(18),
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginVertical: wp(2),
    marginHorizontal: wp(5),

    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nurseryName1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: hp(0.2),
    marginLeft: wp(5),
    color: Colors.black,
    fontFamily: fonts.regular,
  },
  nurseryImage1: {
    width: wp(30),
    height: hp(8),
    marginTop: hp(-1),
    marginLeft: wp(5),
    borderRadius: 10,
    resizeMode: 'contain',
    // marginBottom: hp('1%'),
  },
  address: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: hp(1),
    marginLeft: wp(5),
    color: Colors.gray1,
    flexShrink: 1,
    overflow: 'hidden',
    fontFamily: fonts.regular,
    maxWidth:wp(40),
  },
  address1: {
    fontSize: 14,
    fontWeight: '400',
    // marginTop:hp('0.2%'),
    marginLeft: wp(4),
    color: Colors.gray1,
    maxWidth:wp(40),
    fontFamily: fonts.regular,
  },
  cardContent: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: wp(5),
  },

  statusButton1: {
    paddingVertical: hp(0.5),
    alignItems: 'center',
    borderRadius: 10,
    width: wp(15),
    marginVertical: hp(1.5),
    marginLeft: wp(5),
    marginTop: hp(1),
  },
  emailButton: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    borderRadius: 10,
    paddingVertical: hp(1),
    textAlign: 'center',
    width: wp(25),

    fontFamily: fonts.regular,
  },
  button: {
    marginTop: hp(2.5),
  },
});
