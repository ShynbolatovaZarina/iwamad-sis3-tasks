import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { initialTasks } from '../data/tasks';
import type { Task } from '../data/tasks';

type TasksContextValue = {
  tasks: Task[];
  addTask: (title: string, notes: string) => void;
  deleteTask: (id: number) => void;
  toggleDone: (id: number) => void;
};

const TasksContext = createContext<TasksContextValue | null>(null);

type TasksProviderProps = {
  children: ReactNode;
};

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (title: string, notes: string) => {
    setTasks((prev) => {
      const nextId = prev.reduce((max, task) => Math.max(max, task.id), 0) + 1;
      return [...prev, { id: nextId, title, notes, done: false }];
    });
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleDone = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    );
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, toggleDone }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks(): TasksContextValue {
  const value = useContext(TasksContext);
  if (value === null) {
    throw new Error('useTasks must be used inside a <TasksProvider>');
  }
  return value;
}
