# Web-development---Project

Here is a **clean, professional, complete README.md** for your **Habit Tracker React Project**, elder sister Binisha ❤️.
Copy–paste this directly into a file named **README.md** inside your project folder.

---

# **Habit Tracker – React Application**

A simple and user-friendly web app to track **daily habits**, **mood patterns**, and view progress through interactive **charts**.
Data is stored safely in **IndexedDB**, enabling **offline usage**.

---

## **📌 Features**

* Add, update, and view daily habits
* Mood tracking (daily mood logging)
* Charts for habit progress & mood trends
* Offline support using **IndexedDB (idb library)**
* Clean and responsive UI
* Data remains saved even after refresh or closing browser

---

## **🛠️ Technologies Used**

* **React.js**
* **JavaScript (ES6+)**
* **IndexedDB (idb library)**
* **Chart.js**
* **HTML5 / CSS3**
* **Node.js (via NVM)**
* **Create React App / Vite (depending on your setup)**

---

## **📁 Project Structure**

```
HabitTracker/
│
├── src/
│   ├── App.js
│   ├── charts.js
│   ├── db.js
│   ├── styles.css
│   └── index.js
│
├── package.json
└── README.md
```

---

## **⚙️ Safe Environment Setup (NVM + Node.js)**

### **1. Install NVM (Windows)**

Download from GitHub (latest version):
[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

Install **nvm-setup.exe** → default settings.

### **2. Install Node.js using NVM**

```cmd
nvm install 20.3.1
nvm use 20.3.1
node -v
npm -v
```

---

## **📥 Install Dependencies**

Open your project folder in PowerShell:

```cmd
cd path/to/your/HabitTracker
npm install
```

This installs:

* React
* idb
* Chart.js
* All dependencies in package.json

---

## **▶️ Run the Application**

```cmd
npm start
```

Your app opens at:
**[http://localhost:3000](http://localhost:3000)**

---

## **📦 Build for Production**

```cmd
npm run build
```

To test the build:

```cmd
npm install -g serve
serve -s build
```

---

## **💾 Local Database (IndexedDB)**

### **db.js Example Code**

```javascript
import { openDB } from "idb";

export const dbPromise = openDB("habitTrackerDB", 1, {
  upgrade(db) {
    db.createObjectStore("habits", { keyPath: "id", autoIncrement: true });
    db.createObjectStore("moods", { keyPath: "date" });
  },
});

export async function saveRecord(storeName, data) {
  const db = await dbPromise;
  await db.put(storeName, data);
}

export async function getAllRecords(storeName) {
  const db = await dbPromise;
  return await db.getAll(storeName);
}
```

---

## **📊 Charts Example Code**

```javascript
import { Line, Bar } from "react-chartjs-2";

export function HabitChart({ data }) {
  return (
    <Bar
      data={{
        labels: data.map(d => d.date),
        datasets: [
          { 
            label: "Habits Completed",
            data: data.map(d => d.count)
          }
        ]
      }}
    />
  );
}

export function MoodChart({ moods }) {
  return (
    <Line
      data={{
        labels: moods.map(m => m.date),
        datasets: [
          { 
            label: "Mood Level",
            data: moods.map(m => m.level),
          },
        ],
      }}
    />
  );
}
```

---

## **🎨 styles.css**

```css
body {
  font-family: Arial;
  background: #f7f7f7;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
}

input, button, select {
  padding: 10px;
  margin: 5px;
  width: 100%;
}
```

---

## **🌐 Offline Support**

* All data stored in **IndexedDB**
* Works even without internet
* No backend required
* Safe local environment

---

## **📌 Future Enhancements**

* Notifications & reminders
* User authentication
* Cloud backup
* Weekly summary reports

---

## **📜 License**

This project is for educational and personal use.

---

If you want, I can also:
✅ Generate a **PDF version of this README**
OR
✅ Generate a **GitHub-ready version with badges & images**

Just tell me, elder sister ❤️.

## Output Screenshots

Below are the screenshots showing the application interface and output results.

<img width="834" height="686" alt="{E4921226-D34E-43C5-A2CD-AA16A616735B}" src="https://github.com/user-attachments/assets/135f195c-bdb7-4af0-a4c7-f609e9439899" />

<img width="980" height="914" alt="{CF7EA7CE-FB34-4953-8408-BE54D01AAB64}" src="https://github.com/user-attachments/assets/940acaeb-2c57-4fe0-aefe-bb3379c6d8a2" />
