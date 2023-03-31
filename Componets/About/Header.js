import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user_logo}>
        <Image source={require('./icons/user.jpg')} style={styles.users}/>
      </View>
      <View style={styles.right_icons}>
        <TouchableOpacity>
          <Image source={require('./icons/search.png')} style={{marginRight:24}}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./icons/Vector_1.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    paddingRight:24,
    paddingTop:20,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center'
  },
  user_logo:{
    width:50,
    height:50,
    borderRadius:50,
    backgroundColor:'#fff',
    overflow:'hidden'
  },
  users:{
    width:'100%',
    height:'100%'
  },
  right_icons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
});
export default Header;
