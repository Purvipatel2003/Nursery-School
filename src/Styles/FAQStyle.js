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
  headerText: {
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
  headerText1:{
   fontFamily:fonts.regular,
   fontSize:15,
   color:Colors.black,
   marginTop:hp('1%'),
 
  },
  line: {
    height: hp('0.2'),
    width: wp('90%'),
    backgroundColor: Colors.lightgray,
    marginTop: hp('1%'),
    // marginLeft: wp('2%'),
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
  container1:{
    padding: 10,
    backgroundColor: Colors.white,
    marginTop:hp('2%'),
    width:wp('90%'),
    marginHorizontal:wp('5%'),
   borderRadius:10,
  },
  contentText:{
    fontSize:14,
    color:Colors.gray1,
    textAlign:'justify',
    marginTop:hp('2%'),
    fontFamily:fonts.regular,

  },
  wrapper1:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  drop_down_icon:{
    width: wp('4%'),
    height: hp('3%'),
    resizeMode: 'contain',
    marginEnd: wp('3%'),
    marginTop:hp('1%'),
  },

});
