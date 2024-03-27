import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js/auto";

// Register Chart.js components
Chart.register(...registerables);

const SemesterPerformanceChart = ({
  students,
  selectedRegisterNumber,
  selectedSemester,
}) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const chartOptions = {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Semester",
        },
      },
      x: {
        title: {
          display: true,
          text: "Credits",
        },
        ticks: {
          precision: 0,
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
        text: "Semester Performance (Credits Comparison)",
      },
    },
    maintainAspectRatio: false,
  };

  useEffect(() => {
    // Group students by register number, considering selectedRegisterNumber
    const filteredStudents = students.filter(
      (student) =>
        !selectedRegisterNumber ||
        student.register_number === selectedRegisterNumber
    );
    const groupedStudents = filteredStudents.reduce((groups, student) => {
      if (!groups[student.semester]) {
        groups[student.semester] = { credits: 0 };
      }
      groups[student.semester].credits += student.credits;
      return groups;
    }, {});

    // Prepare data for chart
    const labels = Object.keys(groupedStudents).sort();

    const datasets = labels.map((semester) => ({
      label: `Semester ${semester}`,
      data: [groupedStudents[semester].credits],
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }));

    // Update chartData state
    setChartData({
      labels: labels,
      datasets: datasets,
    });
  }, [students, selectedRegisterNumber, selectedSemester]);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <h2
        style={{
          color: "aliceblue",
        }}
      >
        Semester Performance (Comparison)
      </h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default SemesterPerformanceChart;
