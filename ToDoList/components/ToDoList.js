import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AddTask from "./AddTask";

export default function ToDoList({ taskTitles }) {
    const initialList = taskTitles.map((title) => ({
            title: title,
            id: uuidv4(),
        }));
    const [toDos, setToDos] = useState(initialList);

    function addToDo(newTitle) {
        setToDos([...toDos, { title: newTitle, id: uuidv4() }]);
    }

    function removeToDo(id) {
        setToDos(toDos.filter((todo) => todo.id !== id));
    }

    return (
        <View style={styles.todoListContainer}>
            {toDos.map((todo) => (
                <View key={todo.id} style={styles.todoItem}>
                    <Text>{todo.title}</Text>
                    <Button 
                        onPress={() => removeToDo(todo.id)}
                        title="Delete" 
                    />
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
}

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
