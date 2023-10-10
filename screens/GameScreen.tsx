import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title text="Opponent's Guess" />
      <View>
        <Text>Higher or lower?</Text>
      </View>
      {/* <Text style={{ fontSize: 50, color: "white" }}>Hello</Text> */}
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
