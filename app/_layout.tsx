import { Stack } from 'expo-router';
import { TasksProvider } from '../src/context/TasksContext';

// a deep link to /tasks/1 still has the list underneath, so Back works
export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {
  return (
    <TasksProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'My tasks' }} />
      </Stack>
    </TasksProvider>
  );
}
