// import { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import { Chart, registerables } from "chart.js/auto";

// // Register Chart.js components
// Chart.register(...registerables);

// const SemesterPerformanceChart = ({ students, selectedRegisterNumber }) => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   // Define chartOptions here
//   const chartOptions = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Credits",
//         },
//         ticks: {
//           precision: 0, // Ensures y-axis labels are whole numbers
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: "Semester",
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Semester Performance",
//       },
//     },
//     maintainAspectRatio: false,
//   };

//   useEffect(() => {
//     // Filter students data based on selected register number
//     const filteredStudents = students.filter((student) => {
//       return (
//         !selectedRegisterNumber ||
//         student.register_number.toString() === selectedRegisterNumber
//       );
//     });

//     // Group students by semester
//     const groupedStudents = filteredStudents.reduce((groups, student) => {
//       if (!groups[student.semester]) {
//         groups[student.semester] = [];
//       }
//       groups[student.semester].push(student);
//       return groups;
//     }, {});

//     // Prepare data for chart
//     const labels = Object.keys(groupedStudents).sort(
//       (a, b) => parseInt(a) - parseInt(b)
//     );
//     const datasets = labels.map((semester, index) => {
//       const data = groupedStudents[semester].reduce((totalCredits, student) => {
//         return totalCredits + student.credits;
//       }, 0);
//       return {
//         label: `Semester ${semester}`,
//         data: [data],
//         backgroundColor: `rgba(54, 162, 235, 0.${index + 5})`,
//         borderColor: `rgba(54, 162, 235, 1)`,
//         borderWidth: 1,
//         fill: false,
//       };
//     });

//     // Update chartData state
//     setChartData({
//       labels: labels.map((semester) => `Semester ${semester}`),
//       datasets: datasets,
//     });
//   }, [students, selectedRegisterNumber]);

//   return (
//     <div style={{ height: "400px", width: "100%" }}>
//       <h2>Semester Performance </h2>
//       <Line data={chartData} options={chartOptions} />
//     </div>
//   );
// };

// export default SemesterPerformanceChart;
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js/auto";

// Register Chart.js components
Chart.register(...registerables);

const SemesterPerformanceChart = ({ students }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Define chartOptions here
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Credits",
        },
        ticks: {
          precision: 0, // Ensures y-axis labels are whole numbers
        },
      },
      x: {
        title: {
          display: true,
          text: "Semester",
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
        text: "Semester Performance",
      },
    },
    maintainAspectRatio: false,
  };

  useEffect(() => {
    // Group students by register number
    const groupedStudents = students.reduce((groups, student) => {
      if (!groups[student.register_number]) {
        groups[student.register_number] = {};
      }
      if (!groups[student.register_number][student.semester]) {
        groups[student.register_number][student.semester] = 0;
      }
      groups[student.register_number][student.semester] += student.credits;
      return groups;
    }, {});

    // Prepare data for chart
    const labels = Array.from(
      new Set(students.map((student) => `Semester ${student.semester}`))
    );

    const colors = [
      "#00B3E6",
      "#E6B333",
      "#3366E6",
      "#999966",
      "#99FF99",
      "#B34D4D",
    ];

    const datasets = Object.keys(groupedStudents).map(
      (registerNumber, index) => ({
        label: `Register Number ${registerNumber}`,
        data: labels.map(
          (label) =>
            groupedStudents[registerNumber][parseInt(label.split(" ")[1])] || 0
        ),
        fill: false,
        borderColor: colors[index % colors.length],
        backgroundColor: colors[index % colors.length], // Optional: fill color
      })
    );

    // Update chartData state
    setChartData({
      labels: labels,
      datasets: datasets,
    });
  }, [students]);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <h2>Semester Performance</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default SemesterPerformanceChart;
