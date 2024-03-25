import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GradeChart = ({
  students,
  selectedRegisterNumber,
  selectedSubjectCode,
}) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Filter students data based on both selected register number and subject code
    const filteredStudents = students.filter((student) => {
      return (
        (!selectedRegisterNumber ||
          student.register_number.toString() === selectedRegisterNumber) &&
        (!selectedSubjectCode || student.course_code === selectedSubjectCode)
      );
    });

    // Count grades for the filtered students
    const gradeCounts = filteredStudents.reduce((counts, student) => {
      counts[student.grade] = (counts[student.grade] || 0) + 1;
      return counts;
    }, {});

    // Update chartData state
    setChartData({
      labels: Object.keys(gradeCounts),
      datasets: [
        {
          label: "Grade Distribution",
          data: Object.values(gradeCounts),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });

    // Update chartOptions state
    setChartOptions({
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0, // Ensures y-axis labels are whole numbers
          },
        },
        x: {
          title: {
            display: true,
            text: "Grades",
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Grade Distribution by selected Student",
        },
      },
      maintainAspectRatio: false,
    });
  }, [students, selectedRegisterNumber, selectedSubjectCode]); // Add selectedSubjectCode to the dependency array

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <h2
        style={{
          color: "aliceblue",
        }}
      >
        Grade Distribution
      </h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default GradeChart;
