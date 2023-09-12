import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [allTasks, setAllTasks] = useState<{ text: string; id: string }[]>([]);

  const addTaskHandler = (enteredTask: any) => {
    setAllTasks((prevTasks) => [
      ...prevTasks,
      { text: enteredTask, id: Math.random().toString() },
    ]);
  };

  const deleteTaskHandler = (id: string) => {
    setAllTasks((prevTasks) => prevTasks.filter((el) => el.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <TaskInput addTaskHandler={addTaskHandler} />
      <View style={styles.taskContainer}>
        <FlatList
          data={allTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              text={item.text}
              deleteTaskHandler={deleteTaskHandler}
              id={item.id}
            />
          )}
        />
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
  taskContainer: {
    flex: 9,
  },
});
