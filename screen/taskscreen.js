import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function AddTaskScreen({ route, navigation }) {
  const [task, setTask] = useState('');
  const { setTasks } = route.params;

  const addTask = () => {
    if (task.trim() === '') {
      Alert.alert('Erro', 'Campo obrigatório!');
      return;
    }

    setTasks(prev => [...prev, task]);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        placeholder="Digite a tarefa"
        value={task}
        onChangeText={setTask}
      />

      <Button title="Salvar" onPress={addTask} />
    </View>
  );
}