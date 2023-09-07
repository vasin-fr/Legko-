import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Write task!" style={styles.textInput} />
        <Button title="Add task!"></Button>
      </View>
      <View style={styles.taskContainer}>
        <Text>List of tasks...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    padding: 10,
    // justifyContent: "flex-end",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
  },
  taskContainer: {
    flex: 9,
  },
});
