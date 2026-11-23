import { Pressable, StyleSheet, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Animated, { FadeIn, FadeOut, LinearTransition, ZoomIn } from 'react-native-reanimated';
import type { Task } from '../data/tasks';

type TaskRowProps = {
  task: Task;
  onPress: () => void;
  onToggleDone: () => void;
  onDelete: () => void;
};

export default function TaskRow({ task, onPress, onToggleDone, onDelete }: TaskRowProps) {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      layout={LinearTransition}
      style={styles.row}
    >
      <Swipeable
        friction={2}
        rightThreshold={60}
        renderRightActions={() => (
          <Pressable
            onPress={onDelete}
            style={({ pressed }) => [styles.action, pressed && styles.actionPressed]}
          >
            <Text style={styles.actionText}>Delete</Text>
          </Pressable>
        )}
      >
        <Pressable
          onPress={onPress}
          onLongPress={onToggleDone}
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        >
          <View style={styles.textBlock}>
            <Text style={[styles.title, task.done && styles.titleDone]}>{task.title}</Text>
            {task.notes ? <Text style={styles.notes}>{task.notes}</Text> : null}
          </View>
          {task.done ? (
            <Animated.Text entering={ZoomIn} style={styles.done}>
              ✓ Done
            </Animated.Text>
          ) : null}
        </Pressable>
      </Swipeable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 12,
  },
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
  action: {
    minHeight: 44,
    minWidth: 96,
    marginLeft: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#b91c1c',
  },
  actionPressed: {
    backgroundColor: '#7f1d1d',
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
