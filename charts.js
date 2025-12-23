import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const HabitChart = ({ records }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!records.length) return;

    const ctx = canvasRef.current.getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: records.map(r => r.date),
        datasets: [
          {
            label: "Habit Completed (1 = Yes)",
            data: records.map(r => (r.habitDone ? 1 : 0)),
            borderColor: "blue",
            borderWidth: 2,
            fill: false
          }
        ]
      }
    });
  }, [records]);

  return <canvas ref={canvasRef} />;
};

export const MoodChart = ({ records }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!records.length) return;

    const moodCount = records.reduce((acc, r) => {
      acc[r.mood] = (acc[r.mood] || 0) + 1;
      return acc;
    }, {});

    const ctx = canvasRef.current.getContext("2d");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: Object.keys(moodCount),
        datasets: [
          {
            data: Object.values(moodCount)
          }
        ]
      }
    });
  }, [records]);

  return <canvas ref={canvasRef} />;
};
