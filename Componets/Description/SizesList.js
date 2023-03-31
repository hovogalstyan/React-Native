import React, { useCallback, useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from "react-native";

const size = ["S", "M", "L"];
const SizesList = () => {
  const [activeSize, setActiveSize] = useState(0);
  const editeIndexActive = useCallback((index)=>{
    setActiveSize(index)
  },[activeSize,size])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Size</Text>
      <View style={styles.size_btn_block}>
        {
          size.map((item, index) => (
            <TouchableOpacity key={index} onPress={()=> editeIndexActive(index)} style={index === activeSize ? styles.active_btn : styles.btn}>
              <Text style={index === activeSize ? styles.active_text : styles.text}>{item}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  size_btn_block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  btn: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 48,
    paddingRight: 48,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 8,
  },
  active_btn: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 48,
    paddingRight: 48,
    borderWidth: 1,
    borderColor: "#D17842",
    borderRadius: 8,
  },
  text:{
    fontSize:18,
    color:"#fff"
  },
  active_text:{
    fontWeight:'800',
    fontSize:18,
    color:"#D17842"
  }
});
export default SizesList;
