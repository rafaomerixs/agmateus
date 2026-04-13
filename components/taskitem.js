import React from 'react';
import { Text } from 'react-native';

export default function TaskItem({ task }) {
  return <Text>- {task}</Text>;
}