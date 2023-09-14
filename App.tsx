import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <StartGameScreen></StartGameScreen>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 15,
  },
  taskContainer: {
    flex: 9,
  },
});
