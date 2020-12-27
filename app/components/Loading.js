import React from "react";
import { ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {Overlay} from 'react-native-elements'


const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#00a680',
    borderWidth: 2,
    borderRadius: 10
  },
  view:{
   // flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#00a680",
    marginTop: 10
  }
})
const Loading = ({isVisible, text})=>{



  return(
    <Overlay isVisible={isVisible} style={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00a680"/>
        { text && <Text style={styles.text}>{text}</Text> }
      </View>
    </Overlay>
  )
}

export default Loading