import { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

const TaskInput = ({ addTaskHandler }: any) => {
  const [enteredTask, setEnteredTask] = useState<string>("");

  const taskInputHandler = (enteredText: string) => {
    setEnteredTask(enteredText);
  };

  const addOneTaskHandler = () => {
    {
      enteredTask.length ? addTaskHandler(enteredTask) : null;
    }
    setEnteredTask("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Write task!"
        style={styles.textInput}
        onChangeText={taskInputHandler}
        value={enteredTask}
      />
      <Button title="Add task!" onPress={addOneTaskHandler} />
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
  },
});
