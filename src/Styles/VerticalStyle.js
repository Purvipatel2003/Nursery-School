import Colors from '../assets/Colors';
import fonts from '../assets/font';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
    container1: {
        marginTop: hp('2%'),
       marginLeft: wp('5%'),
       borderRadius: 10,
       width: wp('90%'),
       height: hp('15%'),
       flexDirection:'row',
       backgroundColor: Colors.white,
     },
     title: {
       fontFamily: fonts.regular,
       fontSize: 12,
       maxWidth:wp(50),
       fontWeight: '500',
       marginLeft: wp('4%'),
       marginTop:hp('2%'),
       color:Colors.darkgrey
     },
     title1: {
       fontFamily: fonts.regular,
       fontSize: 14,
       marginTop:hp('2%'),
       fontWeight: '500',
       marginLeft: wp('4%'),
       color: Colors.black,
       maxWidth:wp(50),
     },
     title2: {
       fontFamily: fonts.regular,
       fontSize: 14,
       maxWidth:wp(50),
       fontWeight: '500',
       marginLeft: wp('4%'),
       color: Colors.black,
     },
     image:{
       width:wp('40%'),
       height:hp('15%'),
       resizeMode:'contain',
       marginLeft:wp('-5%'),
     },
     scrollview:{
       marginBottom:hp('2%'),
     },
     box:{
       width:wp('15%'),
       marginLeft:wp('2%'),
       marginTop:hp('1.5%'),
       position:'absolute',
       height:hp('3%'),
       borderRadius:8,
       backgroundColor:Colors.white,
     },
     date:{
       textAlign:'center',
     },
     box1:{
      maxWidth:wp(50),
     }
})