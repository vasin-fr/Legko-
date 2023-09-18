import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <LinearGradient
        style={styles.appContainer}
        colors={["#4e0329", "#ddb52f"]}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.backgroundImg}
          imageStyle={styles.styleImg}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
  },
  styleImg: {
    opacity: 0.15,
  },
});
