import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  ScrollView, SafeAreaView, Button,
} from "react-native";
import DescriptionText from "./DescriptionText";
import SizesList from "./SizesList";

const DescriptionScreen = ({ route, navigation }) => {
  const item = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.images}>
          <ImageBackground source={item.url} style={styles.img}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
              <Image source={require("./icon/back.png")} />
            </TouchableOpacity>
            <View style={styles.content}>
              <View style={styles.title_block}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.icon_block}>
                  <Image source={require("./icon/1.png")} style={styles.icon} />
                  <Text style={{ color: "#fff" }}>4.6</Text>
                  <Text style={{ color: "rgba(255, 255, 255, 0.5)" }}>(1,250)</Text>
                </View>
              </View>
              <Text style={styles.types}>{item.types}</Text>
              <View style={styles.price_block}>
                <Text style={styles.price}>P {item.price}</Text>
                <TouchableOpacity style={styles.cart_btn}>
                  <Text style={{ color: "#fff", fontSize: 18 }}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <DescriptionText text={item.description} />
        <SizesList />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>Buy now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: "#1E1E1E",
  },
  images: {
    height: 430,
  },
  img: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  back: {
    width: 48,
    height: 48,
    position: "absolute",
    left: 16,
    top: 16,
    backgroundColor: "#0C0F14",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  content: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  title_block: {
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
  },
  icon_block: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  types: {
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: "500",
    fontSize: 15,
  },
  price_block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: "#D17842",
    fontSize: 24,
    fontWeight: "700",
  },
  cart_btn: {
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    borderRadius: 8,
    backgroundColor: "#D17842",
  },
  btn: {
    width: "100%",
    height: 56,
    backgroundColor: "#D17842",
    alignItems: "center",
    justifyContent: "center",
    marginTop:40,
  },
  btn_text: {
    fontSize: 20,
    fontWeight: "700",
    color:'#fff'
  },
});
export default DescriptionScreen;
