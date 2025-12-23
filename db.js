import { openDB } from "idb";

export const dbPromise = openDB("habit-db", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("records")) {
      db.createObjectStore("records", { keyPath: "date" });
    }
  }
});

export async function saveRecord(record) {
  const db = await dbPromise;
  await db.put("records", record);
}

export async function getAllRecords() {
  const db = await dbPromise;
  return await db.getAll("records");
}
