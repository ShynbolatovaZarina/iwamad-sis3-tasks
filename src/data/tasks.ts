export type Task = { id: number; title: string; notes: string; done: boolean }

export const initialTasks: Task[] = [
  { id: 1, title: 'Finish the SIS 3 task manager', notes: 'Due Sunday, 29 November, 23:59', done: false },
  { id: 2, title: 'Send the Week 12 pull request', notes: 'Pages and Chat links in the description', done: false },
  { id: 3, title: 'Revise for the UI/UX lecture', notes: 'Visual design elements, slides 1-20', done: false },
  { id: 4, title: 'Buy groceries', notes: 'Milk, bread, apples', done: true },
]
