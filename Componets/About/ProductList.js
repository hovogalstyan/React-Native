import React, { useCallback, useEffect, useState } from "react";
import { Image, TouchableOpacity, View, StyleSheet, Text } from "react-native";


const ProductList = ({ product, sliceNum, setSliceNum, descriptionPage }) => {

  const moreProduct = useCallback(() => {
    if (product.length >= sliceNum) {
      setSliceNum(sliceNum + 4);
    }
  }, [sliceNum, product]);
  const sliceProduct = product.slice(0, sliceNum);
  return (
    <View style={styles.container}>

      {
        sliceProduct.map((item, index) => (
          <TouchableOpacity key={index} style={styles.images_container} onPress={() => descriptionPage(item)}>
            <Image source={item.url} style={styles.images} />
          </TouchableOpacity>
        ))
      }
      {
        product.length > sliceNum ?
          <View style={styles.more_block}>
            <TouchableOpacity onPress={moreProduct}>
              <Text style={styles.more}>More</Text>
            </TouchableOpacity>
          </View>
          : null
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 32,
    paddingRight: 24,
  },
  images_container: {
    width: 170,
  },
  images: {
    width: "100%",
    height: 180,
    marginBottom: 20,
  },
  more_block: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 25,
  },
  more: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 25,
    paddingLeft: 25,
    color: "red",
  },
});

export default ProductList;
