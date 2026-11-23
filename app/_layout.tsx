import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TasksProvider } from '../src/context/TasksContext';

// a deep link to /tasks/1 still has the list underneath, so Back works
export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TasksProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'My tasks' }} />
          <Stack.Screen
            name="new"
            options={{ title: 'New task', presentation: 'modal', animation: 'slide_from_bottom' }}
          />
        </Stack>
      </TasksProvider>
    </GestureHandlerRootView>
  );
}
