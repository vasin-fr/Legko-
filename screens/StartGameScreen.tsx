import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";
import { useState } from "react";

const StartGameScreen = ({
  pickedNumberHandler,
}: {
  pickedNumberHandler: (chosedNumber: number) => void;
}) => {
  const [enteredValue, setEnteredValue] = useState<string>("");

  const resetEnteredValue = (): void => {
    setEnteredValue("");
  };

  const confirmNumber = () => {
    const chosedNumber = parseInt(enteredValue);
    isNaN(chosedNumber) || chosedNumber <= 0 || chosedNumber > 99
      ? Alert.alert(
          "Invalid number!",
          "Need to write number between 1 and 99",
          [{ text: "Okay", style: "destructive", onPress: resetEnteredValue }]
        )
      : pickedNumberHandler(chosedNumber);

    return;
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEnteredValue}
        value={enteredValue}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButtons
            title="Reset"
            onPress={() => {
              setEnteredValue("");
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButtons title="Start" onPress={confirmNumber} />
        </View>
      </View>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: "#4e0329",
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
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
