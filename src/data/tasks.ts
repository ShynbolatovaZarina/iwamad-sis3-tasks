export type Task = { id: number; title: string; notes: string; done: boolean }

export const initialTasks: Task[] = [
  { id: 1, title: 'Finish the Accounting 2 certificate', notes: 'Due Wednesday, 9 December, 12:00 PM', done: false },
  { id: 2, title: 'Adding interactive elements to UI/UX final project', notes: 'Necessary files in Teams Assignment', done: false },
  { id: 3, title: 'Enterprise Architecture Assignment 6', notes: 'Send it from outlook to "kibo.kz.contact.01@gmail.com"', done: false },
  { id: 4, title: 'Practice essay for SIS2 Critical Thinking', notes: 'No AI usage allowed', done: true },
]
