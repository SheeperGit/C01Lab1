import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTask({ onAddTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleAddTask() {
      const trimmedTitle = newTaskTitle.trim();
      if (trimmedTitle === "") {
        return;
      }

      onAddTask(trimmedTitle);
      setNewTaskTitle("");
  }

  return (
      <View style={styles.addTodoForm}>
          <TextInput
              style={styles.input}
              placeholder="New task title"
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
          />
          <Button onPress={handleAddTask} title="Add" />
      </View>
  )
}

const styles = StyleSheet.create({
  addTodoForm: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
