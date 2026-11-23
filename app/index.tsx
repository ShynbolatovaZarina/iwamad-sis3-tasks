import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import TaskRow from '../src/components/TaskRow';
import { useTasks } from '../src/context/TasksContext';

export default function TaskListScreen() {
  const { tasks, deleteTask, toggleDone } = useTasks();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => router.push('/new')}
        style={({ pressed }) => [styles.addButton, pressed && styles.addButtonPressed]}
      >
        <Text style={styles.addButtonText}>+ New task</Text>
      </Pressable>
      <Text style={styles.hint}>
        Swipe a task left to delete it. Long-press a task to mark it done.
      </Text>
      <FlatList
        data={tasks}
        keyExtractor={(task) => String(task.id)}
        renderItem={({ item }) => (
          <TaskRow
            task={item}
            onPress={() => router.push(`/tasks/${item.id}`)}
            onToggleDone={() => toggleDone(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
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
  addButton: {
    minHeight: 44,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#1d4ed8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonPressed: {
    backgroundColor: '#1e3a8a',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  hint: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 12,
  },
  empty: {
    marginTop: 24,
    fontSize: 16,
    textAlign: 'center',
    color: '#4b5563',
  },
});
