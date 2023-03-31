import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button, Alert } from "react-native";

const DescriptionText = ({ text }) => {
  const [showLess, setShowLess] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>
          {showLess ? text.substring(0 , 79) : text}
          <Text style={styles.show} onPress={()=>setShowLess(!showLess)}>{showLess ? 'Read more' : 'Less more'}</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
  texts:{
    color:'rgba(255, 255, 255, 0.25)',
    fontSize:16
  },
  show:{
    fontSize:18,
    fontWeight:'800',
    color:'#D17842',
  }
});
export default DescriptionText;
