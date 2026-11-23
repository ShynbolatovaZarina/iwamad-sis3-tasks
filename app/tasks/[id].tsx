import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTasks } from '../../src/context/TasksContext';

export default function TaskScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { tasks } = useTasks();
  const task = tasks.find((item) => item.id === Number(id));

  if (!task) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Task not found' }} />
        <Text style={styles.title}>Task not found</Text>
        <Text style={styles.line}>No task with id {id}.</Text>
        <Pressable
          onPress={() => router.replace('/')}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Back to my tasks</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: task.title }} />
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.line}>{task.notes ? task.notes : 'No notes'}</Text>
      <Text style={styles.line}>Status: {task.done ? 'Done' : 'Open'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 12,
  },
  line: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    minHeight: 44,
    marginTop: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#1d4ed8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    backgroundColor: '#1e3a8a',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
