import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "./components/Slider";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Slider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
