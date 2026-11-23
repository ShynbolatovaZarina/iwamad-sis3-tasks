import { router } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TaskRow from '../src/components/TaskRow';
import { useTasks } from '../src/context/TasksContext';

export default function TaskListScreen() {
  const { tasks } = useTasks();

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(task) => String(task.id)}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TaskRow task={item} onPress={() => router.push(`/tasks/${item.id}`)} />
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet. Add your first task!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  row: {
    marginBottom: 12,
  },
  empty: {
    marginTop: 24,
    fontSize: 16,
    textAlign: 'center',
    color: '#4b5563',
  },
});
