import { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Modal,
  Image,
  Pressable,
} from "react-native";

const TaskInput = ({
  addTaskHandler,
  modalIsVisibleChange,
  visible,
}: {
  addTaskHandler: (enteredTask: string) => void;
  visible: boolean;
  modalIsVisibleChange: () => void;
}) => {
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
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Pressable
          onPress={() => {
            setEnteredTask("I'm reaaly good");
          }}
        >
          <Image
            source={require("../assets/images/goal-icon.png")}
            style={styles.goalIcon}
          />
        </Pressable>
        <TextInput
          placeholder="Write task!"
          placeholderTextColor="#808080"
          style={styles.textInput}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Canel"
              onPress={modalIsVisibleChange}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add task!"
              onPress={addOneTaskHandler}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#311b6b",
  },
  textInput: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    color: "#120438",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  goalIcon: {
    height: 100,
    width: 100,
    marginBottom: 15,
  },
});
