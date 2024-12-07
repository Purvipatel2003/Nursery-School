import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useMemo} from 'react';
import icons from '../Helper/icons';
import {useNavigation} from '@react-navigation/native';
import styles from '../Styles/PhotoGalleryStyle';
import MasonryList from '@react-native-seoul/masonry-list';
import Labels from '../Helper/Labels';
const Photogallery = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 'id123',
      imgURL:
        'https://s3-alpha-sig.figma.com/img/1624/6de7/93fa1b3504980613ba74bf6c19d09448?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdB1lEbn3zbpsM2bqXUruTHQoQSpxRRsSibuzBH5V2SSFhznsCMtpnYLEvAlNw565uB~0I-sgU4P7DSEKV1pVNvuhqFQcHBsVbXHEClBAUQcgeHaJCOBU744lihxgCs7b8JmTAvTSwj2CYBOCNj7wazem6hToeCDmOilJb2bMws0t6ZOvmc9I28PUOL610yTS2Klg3MilTbzBJnD6s7Zep3egnlxyLH3VfWODIYYlZsHtEXXtOgnQmPq0N1oAdER~sl~Ayp2ayRd-P5j6ou3L45heF7ao4x278nIiWgFZSnoSDk5HySQXO4qHqTgnSAPLnzcQ8Ghjgk62807QHKe1Q__',
    },
    {
      id: 'id124',
      imgURL:
        'https://s3-alpha-sig.figma.com/img/7d4c/edde/df3cd88bd124b2efc8d26b8dae11454e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwSG4GGb0t4rzsoq4tKvPP3N~XK-fboSfqxpNOi11nRCoJO0G7GGEwQdALKxFDm0d5Lb2ul2ke6ryoXzb3PpsDMcZWb-Mr-OCKlAhZkQf5SigKqWtNNPZcb5d24F5TnLV5djqfMb3RVKYM8aikpeWXi~KaFQvEjv4k1ixzrORX842WJtimZE0DA-fB9HZUHpvo0eN~xpsK8SxSD9um4bvNefJ6phV-44CEuTQSs3XEbD5dR~sfLinUWM4SJkdwfWIJL-uZVzy0yDGgqitjJf7ARGKL33ONt7k8dybTvtiUswBnhpvtoOPAQvMMKlxWjwMH6wg1rrWRm7L3WQY5zQgw__',
    },
    {
      id: 'id125',
      imgURL:
        'https://s3-alpha-sig.figma.com/img/9a01/9ce8/f9a2014fdaf3d8bcdbc35ba2a1de638f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KuYaG10jGcPFfefPBZfULn-YFWFUsOYFMkzkP~5CX~MSIreOfV8nFEYs6Swz74iLpdyXMtJz1Gy1pg1psmHk--lN0spiFvQR6yFisXb2dOksj1Trs3Odr0i03oBfJY30c5qxZt1YQ72PKw-v2odzGZoWYYs4QxM3qJ0yKIeZcEQfhMf0neVT0NixE40I6sNsJrd~5KEdZZKW66CPUEtt8QqYYuYzEwfcdRyTj~9opWeBk64AY2N8SiWJ-wSdj7boUASYLMKgt8dZ74qFve4jSDHlOkg2Dk2dqufQHgnitUHj~JiubVkA73U7ZJTlJpZ954hFAvMzFcp41e~hMFqRyA__',
    },
    {
      id: 'id126',
      imgURL:
        'https://s3-alpha-sig.figma.com/img/e29d/497c/3798f86a9ed035cf283045456b3ca517?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QaigTEobnxWtHWPI03o6eB2krgEEWu~fbtGu61S9EaunAOAqc2-PoNtYaDb68SvQSw-E1JKNux4oJfFpN2zSTKwRhWtlGiCqXeSFe-bSmmkVYtArhut1xVI4awm6uB2arnEAj8Bv-NII7~l1Le8oWwCWLeSC2FemXJOjXG7pujN7-KVeoT2s~YeHl~sA600WCrt~dAkg1w9Jot3LZz7kTDnwJCa6d7BB99Vg42TRUbpol5o4aXVa-flCJFMoE0ZFYUvoyw~N7zr4q-f~BhxAFv6TLPKqb1tv8D5oJFoJRXjZmfSixuyiksK95GDjDKPKqArasbNQdxmRBd4jSjFeNg__',
    },
    {
      id: 'id127',
      imgURL:
        'https://s3-alpha-sig.figma.com/img/a512/095c/4feb4d29f7eee627f3bd4965aa4ceea5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G8oS3iyk4dm-Y6stsCGwKGftC7B3H9V1iYGhGCFBlPmGhu5uha8on4IicpSkazRfLiRfSkWQFylma3YBVZ4bol69KVSd8l1SiEP5xdlOxHTbOTkj634qcz6aep0z1~8cw8tjh9MSxWw3LPTkCgwzTpvLGWs7i8ynsLrYnSHDPxuNhX1gZA~ObmgpdJC7t22XzafqOWXM1~l3afSe02HSXeQFZ5sxAdIETW9FmeCQFYCUFZBvZ~c~EF5-sq5zs64iq9OLDKdiZSjyJGNb3JCv50pQf-0lsCrZDLcAUNdJmG5rSuu2uQOAcSFQ1A1-b3~SScdYWf-XEmp4Im0GtV8cBQ__',
    },
    {
      id: 'id128',
      imgURL:
        'https://s3-alpha-sig.figma.com/img/06e2/38d4/858d4a9d55cbdcf2b258fc77f8dd97f6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ik4Yzx6dDASrpVVHgk5lWiRWLZvsRJZVSmahLeCFLcW2-mOWOueddY~ySrWLoJaX~6r~Kj4O4YYCwZH1Amtio6lGWaBQURlcd1ZscLl1FznLXqp-CnPDWSWSISfSOVxFqxlU2PxXOsbVqs3KQxAw5ARidIszonBbOM-i3EauTbE9Q0Ekt5KNhFjbvi5um-eY6pRUF0oMpd8RCPma6QqiPXkKjH~9MdJLJiX8ubfvRo2mnEznbheT91CvKKoOd1FS8mSZmh7uMdT4hg~n9wh~TQMhAcH6GfMpxYNO~OZE7kFwDSYFeVSKvPTUTTg2OxqyucaxktXRwXytQMlJqD47QA__',
    },
    {
      id: 'id129',
      imgURL:
        'https://s3-alpha-sig.figma.com/img/e29d/497c/3798f86a9ed035cf283045456b3ca517?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QaigTEobnxWtHWPI03o6eB2krgEEWu~fbtGu61S9EaunAOAqc2-PoNtYaDb68SvQSw-E1JKNux4oJfFpN2zSTKwRhWtlGiCqXeSFe-bSmmkVYtArhut1xVI4awm6uB2arnEAj8Bv-NII7~l1Le8oWwCWLeSC2FemXJOjXG7pujN7-KVeoT2s~YeHl~sA600WCrt~dAkg1w9Jot3LZz7kTDnwJCa6d7BB99Vg42TRUbpol5o4aXVa-flCJFMoE0ZFYUvoyw~N7zr4q-f~BhxAFv6TLPKqb1tv8D5oJFoJRXjZmfSixuyiksK95GDjDKPKqArasbNQdxmRBd4jSjFeNg__',
    },
    {
      id: 'id130',
      imgURL:
        'https://s3-alpha-sig.figma.com/img/a512/095c/4feb4d29f7eee627f3bd4965aa4ceea5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G8oS3iyk4dm-Y6stsCGwKGftC7B3H9V1iYGhGCFBlPmGhu5uha8on4IicpSkazRfLiRfSkWQFylma3YBVZ4bol69KVSd8l1SiEP5xdlOxHTbOTkj634qcz6aep0z1~8cw8tjh9MSxWw3LPTkCgwzTpvLGWs7i8ynsLrYnSHDPxuNhX1gZA~ObmgpdJC7t22XzafqOWXM1~l3afSe02HSXeQFZ5sxAdIETW9FmeCQFYCUFZBvZ~c~EF5-sq5zs64iq9OLDKdiZSjyJGNb3JCv50pQf-0lsCrZDLcAUNdJmG5rSuu2uQOAcSFQ1A1-b3~SScdYWf-XEmp4Im0GtV8cBQ__',
    },
    {
      id: 'id131',
      imgURL:
        'https://s3-alpha-sig.figma.com/img/9a01/9ce8/f9a2014fdaf3d8bcdbc35ba2a1de638f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KuYaG10jGcPFfefPBZfULn-YFWFUsOYFMkzkP~5CX~MSIreOfV8nFEYs6Swz74iLpdyXMtJz1Gy1pg1psmHk--lN0spiFvQR6yFisXb2dOksj1Trs3Odr0i03oBfJY30c5qxZt1YQ72PKw-v2odzGZoWYYs4QxM3qJ0yKIeZcEQfhMf0neVT0NixE40I6sNsJrd~5KEdZZKW66CPUEtt8QqYYuYzEwfcdRyTj~9opWeBk64AY2N8SiWJ-wSdj7boUASYLMKgt8dZ74qFve4jSDHlOkg2Dk2dqufQHgnitUHj~JiubVkA73U7ZJTlJpZ954hFAvMzFcp41e~hMFqRyA__',
    },
    {
      id: 'id132',
      imgURL:
        'https://s3-alpha-sig.figma.com/img/a512/095c/4feb4d29f7eee627f3bd4965aa4ceea5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G8oS3iyk4dm-Y6stsCGwKGftC7B3H9V1iYGhGCFBlPmGhu5uha8on4IicpSkazRfLiRfSkWQFylma3YBVZ4bol69KVSd8l1SiEP5xdlOxHTbOTkj634qcz6aep0z1~8cw8tjh9MSxWw3LPTkCgwzTpvLGWs7i8ynsLrYnSHDPxuNhX1gZA~ObmgpdJC7t22XzafqOWXM1~l3afSe02HSXeQFZ5sxAdIETW9FmeCQFYCUFZBvZ~c~EF5-sq5zs64iq9OLDKdiZSjyJGNb3JCv50pQf-0lsCrZDLcAUNdJmG5rSuu2uQOAcSFQ1A1-b3~SScdYWf-XEmp4Im0GtV8cBQ__',
    },
   
  ];

  const FurnitureCard = ({item, style}) => {
    const randomBool = useMemo(() => Math.random() < 0.5, []);

    return (
      <View key={item.id} style={[{marginTop: 12, flex: 1}, style]}>
        <Image
          source={{uri: item.imgURL}}
          style={{
            height: randomBool ? 163 : 140,
            alignSelf: 'stretch',
            borderRadius: 10,
          }}
          resizeMode="cover"
        />
      </View>
    );
  };

  const renderItem = ({item, i}) => {
    return (
      <FurnitureCard item={item} style={{marginLeft: i % 2 === 0 ? 0 : 12}} />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.search_icon_back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{Labels.photo_gallery}</Text>
        </View>
      </View>
      <MasonryList
        keyExtractor={item => item.id}
        ListHeaderComponent={<View />}
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignSelf: 'stretch',
        }}
        onEndReached={() => console.log('onEndReached')}
        numColumns={2}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Photogallery;
