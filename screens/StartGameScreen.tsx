import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButtons title="First" />
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: "#72063c",
    alignItems: "center",
    borderRadius: 8,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },
  numberInput: {
    width: 50,
    justifyContent: "center",
    height: 50,
    fontSize: 32,
    color: "#ddb52f",
    marginVertical: 20,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    textAlign: "center",
  },
});
