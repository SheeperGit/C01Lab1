import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';
import AddTask from './components/AddTask';

export default function App() {
  const [tasks, setTasks] = useState(["Task1", "Task2", "Task3"]); // Tester Tasks!

  const handleAddTask = (newTitle) => {
    <AddTask onAddTask={handleAddTask} />
    setTasks((prevTasks) => [...prevTasks, newTitle]);
  };
  

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ToDoList tasks={tasks} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
