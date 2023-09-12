import { View, Text, StyleSheet, Button, Pressable } from "react-native";

const TaskItem = ({
  text,
  deleteTaskHandler,
  id,
}: {
  text: String;
  deleteTaskHandler: any;
  id: String;
}) => {
  return (
    <Pressable onPress={() => deleteTaskHandler(id)}>
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
    padding: 7,
    backgroundColor: "#5e0acc",
    borderRadius: 5,
  },
  taskText: {
    color: "#fff",
    fontSize: 17,
  },
});
