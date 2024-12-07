import {StyleSheet} from 'react-native';
import Colors from '../assets/Colors';
import fonts from '../assets/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RotateInUpLeft} from 'react-native-reanimated';

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

  carouselItem: {
    marginRight: wp('3%'),
    overflow: 'hidden',

    elevation: 3,
    backgroundColor: Colors.white,
  },
  carouselImage: {
    width: wp('100%'),
    height: hp('35%'),
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  cardContainer1: {
    width: wp('100%'),
    height: hp('18%'),
    backgroundColor: Colors.white,

    marginTop: wp('3%'),
    // marginHorizontal: wp('5%'),

    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nurseryName1: {
    fontSize: 15,
    fontWeight: '900',
    marginTop: hp('0.2%'),
    marginLeft: wp('5%'),
    color: Colors.black,
    fontFamily: fonts.medium,
  },
  nurseryImage1: {
    width: wp('29%'),
    height: hp('7%'),

    // marginLeft: wp('1.4%'),
    borderRadius: 10,
    resizeMode: 'contain',
  },
  address: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: hp('1%'),
    marginLeft: wp('5%'),
    color: Colors.gray1,
    fontFamily: fonts.regular,
    maxWidth: wp('40%'),
  },

  address1: {
    fontSize: 14,
    fontWeight: '400',
    // marginTop:hp('0.2%'),
    marginLeft: wp('4%'),
    color: Colors.gray1,
    fontFamily: fonts.regular,
    maxWidth: wp('40%'),
  },
  cardContent: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: wp('5%'),
  },

  openbutton: {
    backgroundColor: Colors.lightgreen,
    padding: wp('1%'),
    borderRadius: 10,
    width: wp('18%'),
    height: hp('4%'),
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.green,
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  buttonsContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('3%'),
    alignItems: 'center',
    paddingTop: hp('2%'),
    paddingRight: wp('3%'),
  },
  line1: {
    height: hp('3%'),
    width: wp('0.5%'),
    backgroundColor: Colors.gray,
    marginHorizontal: wp('7%'),
  },
  button: {
    width: wp('1%'),
    height: hp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1%'),
    borderRadius: 8,
  },
  phoneButton: {
    // padding: wp('2%'),
    borderRadius: 8,
  },
  mapButton: {
    // padding: wp('2%'),
    borderRadius: 8,
  },
  buttonIcon: {
    width: wp('5%'),
    height: hp('2.5%'),
    alignSelf: 'center',
  },
  cardContainer: {
    width: wp('100%'),
    // height: hp('18%'),
    backgroundColor: Colors.white,

    marginTop: wp('3%'),
    // marginHorizontal: wp('5%'),

    elevation: 3,
  },
  desc: {
    fontFamily: fonts.medium,
    fontSize: 16,
    fontWeight: '900',
    paddingHorizontal: wp('4%'),
    marginTop: hp('2%'),
  },

  detaildesc: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: Colors.gray1,
    fontWeight: '500',
    paddingHorizontal: wp('5%'),
    textAlign: 'justify',

    marginTop: hp('1%'),
  },
  detaildesc1: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: Colors.primary,
    fontWeight: '600',
    marginVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
  },
  detaildesc3: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: Colors.gray1,
    fontWeight: '500',
     marginBottom:hp(3),
    textAlign: 'justify',
    paddingHorizontal: wp('5%'),
  },
  image1: {
    width: wp('5%'),
    height: hp('5%'),
    resizeMode: 'contain',
  },
  wrapper1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: wp('5%'),
    marginTop: hp('1%'),
  },
  wrapper2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp('5%'),
    
    marginTop: hp('1.5%'),
  },
  desc1: {
    fontFamily: fonts.medium,
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: wp('1.5%'),
    marginTop: hp('1%'),
    
    flexDirection:'row',
  },
  desc2: {
    fontFamily: fonts.regular,
    fontSize: 16,
    fontWeight: '900',
    marginBottom: hp('1.8%'),
    paddingHorizontal: wp('1.5%'),
    color: Colors.gray1,

  },
  desc4: {
    fontFamily: fonts.regular,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: hp('1.8%'),
    paddingHorizontal: wp('1.5%'),
    color: Colors.black,
  },
  desc3: {
    fontFamily: fonts.regular,
    fontSize: 16,
    fontWeight: '900',
    paddingHorizontal: wp('5%'),
    marginTop: hp('1%'),
  },
  line: {
    height: hp('0.2'),
    width: wp('90%'),
    backgroundColor: Colors.lightgray,
    marginTop: hp('2%'),
    marginHorizontal: wp('5%'),
  },
  box1: {
    flexDirection: 'row',
    marginLeft: wp('15%'),
  },
  smallImage: {
    height: hp('1.5%'),
    width: wp('1.5%'),
    marginTop: hp('1%'),
    resizeMode: 'contain',
  },
  drop_icon: {
    width: wp('5%'),
    height: hp('5%'),
    resizeMode: 'contain',
    marginEnd: wp('3%'),
    transform: [{rotate: '-90deg'}],
  },
  button1: {
    height: hp('75%'),
    backgroundColor: Colors.white,
    marginTop: hp('1%'),
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
  readMoreText: {
    fontSize: 15,
    marginLeft: wp('5%'),
    fontFamily: fonts.medium,
    color: Colors.primary,
    marginVertical: wp('2%'),
    fontWeight: '900',
  },
  box2: {
    height: hp('10%'),
    backgroundColor: Colors.white,
    //marginVertical: hp('2%'),
    flexDirection: 'row',
    paddingTop: hp('2.75%'),
    justifyContent: 'space-around',
    elevation: 10, // Elevation for Android shadow (you can adjust the value)
    shadowColor: Colors.black, // Shadow color
    shadowOffset: {width: 0, height: -1}, // Horizontal and vertical offset of the shadow
    shadowOpacity: 3, // Opacity of the shadow
    shadowRadius: 6,
    alignItems: 'center',
  },
  button2: {
    width: wp('45%'),
    height: hp('5%'),
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderRadius: 10,
    marginLeft: wp('6%'),
    borderWidth: 1,
  },
  button3: {
    width: wp('45%'),
    height: hp('5%'),
    backgroundColor: Colors.primary,

    borderRadius: 10,
    marginHorizontal: wp('5%'),

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
