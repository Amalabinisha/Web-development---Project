import React, { useState, useEffect } from "react";
import { saveRecord, getAllRecords } from "./db";
import { HabitChart, MoodChart } from "./charts";
import "./styles.css";

function App() {
  const [date, setDate] = useState("");
  const [habitDone, setHabitDone] = useState(false);
  const [mood, setMood] = useState("Neutral");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    const data = await getAllRecords();
    setRecords(data.sort((a, b) => new Date(a.date) - new Date(b.date)));
  };

  const saveData = async () => {
    if (!date) {
      alert("Please select a date.");
      return;
    }

    const record = {
      date,
      habitDone,
      mood
    };

    await saveRecord(record);
    await loadRecords();
    alert("Saved!");
  };

  const generateInsight = () => {
    if (!records.length) return "Not enough data yet.";

    const happy = records.filter(
      r => r.mood === "Happy" && r.habitDone
    ).length;

    const stress = records.filter(
      r => r.mood === "Stressed" && !r.habitDone
    ).length;

    if (happy > stress) {
      return "You complete habits more on Happy days! Keep boosting your mood.";
    } else {
      return "Stress reduces your habit completion. Try relaxing activities.";
    }
  };

  const streak = (() => {
    let count = 0;
    [...records].reverse().forEach(r => {
      if (r.habitDone) count++;
    });
    return count;
  })();

  return (
    <div className="container">
      <h1>📅 Smart Habit Tracker (PWA + AI Insights)</h1>

      <h3>🔥 Current Streak: {streak} days</h3>

      <div className="input-section">
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <label>
          Habit Completed?
          <input
            type="checkbox"
            checked={habitDone}
            onChange={() => setHabitDone(!habitDone)}
          />
        </label>

        <select value={mood} onChange={e => setMood(e.target.value)}>
          <option>Happy</option>
          <option>Neutral</option>
          <option>Stressed</option>
          <option>Tired</option>
        </select>

        <button onClick={saveData}>Save Entry</button>
      </div>

      <h2>📈 Habit Completion Trend</h2>
      <HabitChart records={records} />

      <h2>😊 Mood Distribution</h2>
      <MoodChart records={records} />

      <h2>🤖 AI Insight</h2>
      <p className="insight">{generateInsight()}</p>
    </div>
  );
}

export default App;
