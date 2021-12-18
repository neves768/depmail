
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.appLogo} />
        <Text style={{color:"white"}}>SmartMail</Text>
        <FontAwesome5 name="paper-plane" size={24} color="white"/>
    </View>
    );
}

const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      backgroundColor: "#4d6465",
      height: 50,
      alignItems: "center",
      justifyContent: "space-between",
      padding: 10
    },  
    appLogo: {
      width: 32,
      height: 32
    },
});