import React from "react";
import { View, StyleSheet, Image, Dimensions, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
const image_1 = require("./images/1.png");
const image_2 = require("./images/2.jpg");
const image_3 = require("./images/3.webp");
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);
const aboutFavorites = [
  { url: image_1, name: "Cappucino", types: "With Chocolate", price: 1200 },
  { url: image_2, name: "Mocha", types: "With Chocolate", price: 1300 },
  { url: image_3, name: "Espresso", types: "With Chocolate", price: 1800 },
];

const carouselItem = ({ item, index }) => {
  return <View key={index} style={styles.item}>
    <Image source={item.url} style={styles.images} />
    <Text style={styles.name}>{item.name}</Text>
    <Text>{item.types}</Text>
    <View style={styles.bottom_block}>
      <Text style={styles.price}>P {item.price}</Text>
      <TouchableOpacity style={styles.btn}>
        <Image source={require("./icons/add.png")} />
      </TouchableOpacity>
    </View>
  </View>;
};
const SliderFavorites = () => {
  return (
    <View style={styles.container}>
      <Carousel data={aboutFavorites}
                renderItem={carouselItem}
                layout={"default"}
                itemWidth={ITEM_WIDTH}
                sliderWidth={SLIDER_WIDTH}
                useScrollView={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: ITEM_WIDTH,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 6.63,
    transform: [{ translateX: -65 }],
    paddingBottom: 10,
  },
  name: {
    fontSize: 19.59,
    lineHeight: 32.82,
    fontWeight: "500",
    color:'#fff'
  },
  images: {
    width: "100%",
    height: 225,
  },
  bottom_block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "700",
    fontSize: 19.59,
    lineHeight: 32.82,
    color: "#D17842",
  },
  btn: {
    width: 48,
    height: 48,
    backgroundColor: "#D17842",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SliderFavorites;
