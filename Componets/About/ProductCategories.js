import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const categories = ["All", "Mocha", "Latte", "Cappucino", "Espresso"];
const ProductCategories = ({ filterCategories, defaultSliceNum }) => {
  const [activeCategories, setActiveCategories] = useState(0);
  const getValueCategories = ({ item, index }) => {
    setActiveCategories(index);
    filterCategories(item);
    defaultSliceNum(4);
  };
  return (
    <View style={styles.categories_block}>
      <Text style={styles.title}>Popular Now</Text>
      <View style={styles.text_container}>
        {
          categories.map((item, index) => (
            <TouchableOpacity key={index} style={index === activeCategories ? styles.activeBtn : styles.btn}
                              onPress={() => getValueCategories({ item, index })}>
              <Text key={index} style={index === activeCategories ? styles.active_text : styles.text}>{item}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  categories_block: {
    marginTop: 24,
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 40.2,
    color: "#fff",
  },
  text_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 19,
    paddingRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.25)",
  },
  activeBtn: {
    borderWidth: 1,
    paddingRight: 17,
    paddingLeft: 17,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 3,
  },
  active_text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});
export default ProductCategories;
