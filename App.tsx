import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

import GameScreen from "./screens/GameScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
        colors={[Colors.primary700, Colors.accent500]}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.backgroundImg}
          imageStyle={styles.styleImg}
        >
          <SafeAreaView style={styles.appContainer}>
            {userNumber ? (
              <GameScreen />
            ) : (
              <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
            )}
          </SafeAreaView>
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
