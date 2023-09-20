import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(0);

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };
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
          {userNumber ? (
            <GameScreen />
          ) : (
            <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
          )}
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
