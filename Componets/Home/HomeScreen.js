import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
const sliderHome = [
  {url:require('./imag/1.png')},
  {url:require('./imag/2.webp')},
  {url:require('./imag/3.webp')}
]
const horizontalMargin = 20;
const slideWidth = 280;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin *8;
const carouselItem = ({ item, index }) => {
  return <View key={index} style={styles.slide}>
    <Image source={item.url} style={styles.images} />
  </View>;
};
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.slide}>
       <Carousel data={sliderHome}
                 renderItem={carouselItem}
                 layout={'stack'}
                 layoutCardOffset={10}
                 itemWidth={itemWidth}
                 sliderWidth={sliderWidth}
                 useScrollView={true}
       />
     </View>
      <View style={styles.title_block}>
        <Text style={styles.title}>FIND THE BEST</Text>
        <Text style={styles.title}>COFFEE FOR YOU</Text>
      </View>
     <View style={styles.btn_container}>
       <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('about')}>
         <Text style={styles.btn_text}>Proceed</Text>
       </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  slide: {
     width:sliderWidth,
      height:itemWidth
  },
  images:{
    width:'100%',
   height:'100%'
  },
  title_block:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:15
  },
  title:{
    fontWeight:'700',
    fontSize:32,
    color:'#fff'
  },
  btn_container:{
    alignItems:'center',
    justifyContent:"center",
    paddingTop:30
  },
  btn:{
    paddingTop:16,
    paddingBottom:16,
    paddingRight:36,
    paddingLeft:36,
    backgroundColor:"rgba(255, 255, 255, 0.1)"
  },
  btn_text:{
    fontWeight:'500',
    fontSize:18,
    color:'#fff'
  }
});

export default HomeScreen;
