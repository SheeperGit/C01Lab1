import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ToDoList = ({ tasks, onAddTask }) => {
  const [toDos, setToDos] = useState(
    tasks.map((title, index) => ({ id: index.toString(), title }))
  );

  const addToDo = (newTitle) => {
    setToDos((prevToDos) => [
      ...prevToDos,
      { id: (prevToDos.length + 1).toString(), title: newTitle },
    ]);
  };

  const removeToDo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      {toDos.map((toDo) => (
        <View key={toDo.id} style={styles.taskContainer}>
          <Text style={styles.taskItem}>{toDo.title}</Text>
          <Button
            title="Remove"
            onPress={() => removeToDo(toDo.id)}
            color="#ff3d3d"
          />
        </View>
      ))}
      <Button title="Add Task" onPress={() => onAddTask("New Task")} /> 
    </View>
  );
};

ToDoList.defaultProps = {
  tasks: [],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskItem: {
    flex: 1,
    fontSize: 16,
  },
});

export default ToDoList;
