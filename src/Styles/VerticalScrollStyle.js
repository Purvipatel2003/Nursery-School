import {StyleSheet} from 'react-native';
import Colors from '../assets/Colors';
import fonts from '../assets/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  featuredSection: {
    marginTop: hp(2),
    paddingHorizontal: wp(2),
  },

  statusText: {
    fontSize: 14,
    // fontWeight: 'bold',
    fontFamily: fonts.regular,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    marginLeft: wp(5),
    fontFamily: fonts.regular,
  },
  viewAllText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '500',
    marginRight: wp(2),
    fontFamily: fonts.regular,
  },
  
  box: {
    marginRight: wp(3),
  },
  cardContainer1: {
    width: wp(88),
    height: hp(15),
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginVertical: wp(3),
    marginHorizontal: wp(5),
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  nurseryImage1: {
    width: wp(30),
    height: hp(8),
    marginTop: hp(-1.8),
    borderRadius: 10,
    resizeMode: 'contain',
    // marginBottom: hp('1%'),
  },
  cardContent: {
    flex: 1,
  },
  card: {
    paddingHorizontal: wp(4),
  },
  nurseryName1: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: hp(1.5),
    color: Colors.black,
    maxWidth:wp(50),
    fontFamily: fonts.medium,
  },
  
  status: {
    fontSize: 14,
    // paddingVertical: hp('0.5%'),
    paddingHorizontal: wp(3),
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginVertical: hp(1),
  },
  
  line1: {
    height: hp(3),
    marginBottom: hp(1),

    width: wp(0.5),
    backgroundColor: Colors.lightgray,
  },

  buttonsContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    alignItems: 'center',
    paddingTop: hp(3),
    marginRight: wp(3),
  },
  button: {
    width: wp(1),
    height: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
    borderRadius: 8,
  },

  buttonIcon: {
    width: wp(4),
    height: hp(2),
    // alignSelf: 'center',
    alignItems: 'center',
  },
  statusButton1: {
    paddingVertical: hp(0.5),
    alignItems: 'center',
    borderRadius: 10,
    maxWidth: wp(20),
    marginVertical: hp(1.5),
    marginLeft: wp(5),
    marginTop: hp(1.5),
  },
});
