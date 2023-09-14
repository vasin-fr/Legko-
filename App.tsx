import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [allTasks, setAllTasks] = useState<{ text: string; id: string }[]>([]);

  const addTaskHandler = (enteredTask: any) => {
    setAllTasks((prevTasks) => [
      ...prevTasks,
      { text: enteredTask, id: Math.random().toString() },
    ]);
    modalIsVisibleChange();
  };

  const deleteTaskHandler = (id: string) => {
    setAllTasks((prevTasks) => prevTasks.filter((el) => el.id !== id));
  };

  const modalIsVisibleChange = () => {
    setModalIsVisible((prev) => !prev);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={{ marginBottom: 12 }}>
          <Button
            title="My new TARGET"
            color="#a065ec"
            onPress={modalIsVisibleChange}
          />
        </View>
        <TaskInput
          addTaskHandler={addTaskHandler}
          visible={modalIsVisible}
          modalIsVisibleChange={modalIsVisibleChange}
        />

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
