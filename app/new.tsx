import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import type { TextInputInstance } from 'react-native';
import { useTasks } from '../src/context/TasksContext';

export default function NewTaskScreen() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const notesRef = useRef<TextInputInstance>(null);

  function handleSave() {
    if (title.trim() === '') {
      setError('Please enter a title for the task.');
      return;
    }
    addTask(title.trim(), notes.trim());
    router.back();
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={[styles.input, error !== '' && styles.inputError]}
          value={title}
          onChangeText={(text) => {
            setTitle(text);
            setError('');
          }}
          placeholder="What do you need to do?"
          returnKeyType="next"
          onSubmitEditing={() => notesRef.current?.focus()}
          submitBehavior="submit"
          autoFocus
        />
        {error !== '' ? <Text style={styles.error}>{error}</Text> : null}

        <Text style={styles.label}>Notes</Text>
        <TextInput
          ref={notesRef}
          style={styles.input}
          value={notes}
          onChangeText={setNotes}
          placeholder="Optional details"
          returnKeyType="done"
          onSubmitEditing={handleSave}
        />

        <Pressable
          onPress={handleSave}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Save task</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  label: {
    marginTop: 12,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    minHeight: 44,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#b91c1c',
  },
  error: {
    marginTop: 6,
    fontSize: 14,
    color: '#b91c1c',
  },
  button: {
    minHeight: 44,
    marginTop: 24,
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
