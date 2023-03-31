import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "./Header";
import SliderFavorites from "./SliderFavorites";
import ProductCategories from "./ProductCategories";
import ProductList from "./ProductList";
import { productsData } from "./Products/arr";


const AboutScreen = ({navigation}) => {
  const [filterText, setFilterText] = useState("All");
  const [sliceNum, setSliceNum] = useState(4);
  const productsResult = useMemo(() => {
    if (filterText === "All") {
      return productsData;
    } else {
      return productsData.filter(elem => elem.name === filterText);
    }
  }, [productsData, filterText]);
  const descriptionPage = useCallback((item)=>{
         navigation.navigate('description',item)
  },[navigation]);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header />
      <Text style={styles.title}>Your Favorites</Text>
      <SliderFavorites />
      <ProductCategories filterCategories={setFilterText} defaultSliceNum={setSliceNum}/>
      <ProductList product={productsResult} sliceNum={sliceNum} setSliceNum={setSliceNum} descriptionPage={descriptionPage}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    paddingLeft: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 15,
    lineHeight: 50.2,
    color:'#fff'
  },
});
export default AboutScreen;
