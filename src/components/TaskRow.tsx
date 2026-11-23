import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Task } from '../data/tasks';

type TaskRowProps = {
  task: Task;
  onPress: () => void;
};

export default function TaskRow({ task, onPress }: TaskRowProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.textBlock}>
        <Text style={[styles.title, task.done && styles.titleDone]}>{task.title}</Text>
        {task.notes ? <Text style={styles.notes}>{task.notes}</Text> : null}
      </View>
      {task.done ? <Text style={styles.done}>✓ Done</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  cardPressed: {
    backgroundColor: '#dbeafe',
    borderColor: '#1d4ed8',
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  titleDone: {
    color: '#6b7280',
    textDecorationLine: 'line-through',
  },
  notes: {
    marginTop: 4,
    fontSize: 14,
    color: '#4b5563',
  },
  done: {
    marginLeft: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#15803d',
  },
});
