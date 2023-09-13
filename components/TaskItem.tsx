import { View, Text, StyleSheet, Pressable } from "react-native";

const TaskItem = ({
  text,
  deleteTaskHandler,
  id,
}: {
  text: string;
  deleteTaskHandler: (id: string) => void;
  id: string;
}) => {
  return (
    <Pressable
      android_ripple={{ color: "red" }}
      onPress={() => deleteTaskHandler(id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    fontSize: 15,
    marginBottom: 7,
    backgroundColor: "#5e0acc",
    borderRadius: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
  taskText: {
    padding: 7,
    color: "#fff",
    fontSize: 17,
  },
});
