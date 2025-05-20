import Dexie from 'dexie'

// 1. Initialize the database
const db = new Dexie('MiniTaskLoggerDB')

// 2. Define a version and schema: one table "tasks" with auto-increment id, text, and createdAt
db.version(1).stores({
  tasks: '++id, text, createdAt',
})

/**
 * Add a new task to IndexedDB.
 * @param {string} text – the task description
 * @returns {Promise<number>} the generated record ID
 */
export async function addTask(text) {
  return await db.tasks.add({
    text,
    createdAt: Date.now(),
  })
}

/**
 * Fetch all tasks, sorted newest first.
 * @returns {Promise<Array<{id:number,text:string,createdAt:number}>>}
 */
export async function fetchTasks() {
  return await db.tasks.orderBy('createdAt').reverse().toArray()
}

export default db
