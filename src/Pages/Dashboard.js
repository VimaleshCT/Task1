// import { useState } from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import Record from "../Data/Records.json";
// import SelectStudent from "../Componenets/SelectStudent";

// const Dashboard = () => {
//   const [studentData] = useState(Record);
//   const [selectedRegisterNumber, setSelectedRegisterNumber] = useState("");
//   const [selectedSemester, setSelectedSemester] = useState("");
//   const [selectedSubjectCode, setSelectedSubjectCode] = useState("");

//   const handleSelectChange = (event) => {
//     setSelectedRegisterNumber(event.target.value);
//     setSelectedSubjectCode("");
//     setSelectedSemester("");
//   };

//   const handleSemesterChange = (event) => {
//     setSelectedSemester(event.target.value);
//     setSelectedSubjectCode("");
//   };

//   const handleSubjectCodeChange = (event) => {
//     setSelectedSubjectCode(event.target.value);
//   };

//   const getSemesterChartData = () => {
//     const semesterData = studentData.reduce((acc, student) => {
//       const semester = student.semester;
//       acc[semester] = acc[semester] ? acc[semester] + 1 : 1;
//       return acc;
//     }, {});

//     return {
//       labels: Object.keys(semesterData),
//       datasets: [
//         {
//           label: "Number of Students",
//           data: Object.values(semesterData),
//           backgroundColor: "rgba(54, 162, 235, 0.5)",
//           borderColor: "rgba(54, 162, 235, 1)",
//           borderWidth: 1,
//         },
//       ],
//     };
//   };

//   const getSubjectChartData = () => {
//     const subjectData = studentData.reduce((acc, student) => {
//       const subjectCode = student.course_code;
//       acc[subjectCode] = acc[subjectCode] ? acc[subjectCode] + 1 : 1;
//       return acc;
//     }, {});

//     return {
//       labels: Object.keys(subjectData),
//       datasets: [
//         {
//           label: "Number of Students",
//           data: Object.values(subjectData),
//           backgroundColor: "rgba(255, 99, 132, 0.5)",
//           borderColor: "rgba(255, 99, 132, 1)",
//           borderWidth: 1,
//         },
//       ],
//     };
//   };

//   const getGradeChartData = () => {
//     const gradeData = studentData.reduce((acc, student) => {
//       const grade = student.grade;
//       acc[grade] = acc[grade] ? acc[grade] + 1 : 1;
//       return acc;
//     }, {});

//     return {
//       labels: Object.keys(gradeData),
//       datasets: [
//         {
//           label: "Number of Students",
//           data: Object.values(gradeData),
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.5)",
//             "rgba(54, 162, 235, 0.5)",
//             "rgba(255, 206, 86, 0.5)",
//             "rgba(75, 192, 192, 0.5)",
//             "rgba(153, 102, 255, 0.5)",
//           ],
//           borderColor: [
//             "rgba(255, 99, 132, 1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//             "rgba(75, 192, 192, 1)",
//             "rgba(153, 102, 255, 1)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     };
//   };

//   const semesterChartData = getSemesterChartData();
//   const subjectChartData = getSubjectChartData();
//   const gradeChartData = getGradeChartData();

//   return (
//     <div>
//       <h1>Student Dashboard</h1>
//       <SelectStudent
//         students={studentData}
//         selectedRegisterNumber={selectedRegisterNumber}
//         handleSelectChange={handleSelectChange}
//         selectedSubjectCode={selectedSubjectCode}
//         handleSubjectCodeChange={handleSubjectCodeChange}
//         selectedSemester={selectedSemester}
//         handleSemesterChange={handleSemesterChange}
//       />
//       {selectedSemester ? (
//         <>
//           <h2>Subject-wise Comparison for Semester {selectedSemester}</h2>
//           <Bar data={subjectChartData} />
//         </>
//       ) : (
//         <>
//           <h2>Semester-wise Comparison</h2>
//           <Bar data={semesterChartData} />
//         </>
//       )}
//       <h2>Grade-wise Comparison</h2>
//       <Pie data={gradeChartData} />
//     </div>
//   );
// };

// export default Dashboard;
// Home.js
// import React, { useState } from "react";
// import { BsBook, BsGraphUpArrow, BsNewspaper } from "react-icons/bs";
// import Record from "../Data/Records.json";
// import { BarChart, Bar, ResponsiveContainer } from "recharts";
// import SelectStudent from "../Componenets/SelectStudent";
// import StudentList from "../Componenets/StudentList";
// import GradeChart from "../Componenets/GradeChart";
// import SemesterPerformanceChart from "../Componenets/SemesterPerformance";
// import Header from "../Componenets/Header/Header";
// import Sidebar from "../Componenets/Sidebar/Sidebar";
// import "./Dashboard.css";

// const Home = () => {
//   const [studentData] = useState(Record);
//   const [selectedRegisterNumber, setSelectedRegisterNumber] = useState("");
//   const [selectedSubjectCode, setSelectedSubjectCode] = useState("");
//   const [selectedSemester, setSelectedSemester] = useState("");
//   const [opensidebarToggle, setOpenSidebarToggle] = useState(false);

//   const handleSelectChange = (event) => {
//     setSelectedRegisterNumber(event.target.value);
//     setSelectedSubjectCode("");
//     setSelectedSemester("");
//   };

//   const handleSemesterChange = (event) => {
//     setSelectedSemester(event.target.value);
//     setSelectedSubjectCode("");
//   };

//   const handleSubjectCodeChange = (event) => {
//     setSelectedSubjectCode(event.target.value);
//   };

//   const openSidebar = () => {
//     setOpenSidebarToggle(!opensidebarToggle);
//   };

//   return (
//     <div className="main-container">
//       <div className="main-title">
//         <h3>DASHBOARD</h3>
//       </div>
//       <div className="grid-container">
//         <Header openSidebar={openSidebar} />
//         <Sidebar
//           openSidebarToggle={opensidebarToggle}
//           openSidebar={openSidebar}
//         />
//       </div>
//       <div className="main-cards">
//         <div className="card">
//           <div className="card-inner">
//             <h3>Semester</h3>
//             <BsBook className="card-icon" />
//           </div>
//           <h1>{selectedSemester}</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>Student</h3>
//             <BsGraphUpArrow className="card-icon" />
//           </div>
//           <h1>{selectedRegisterNumber}</h1>
//         </div>
//         <div className="card">
//           <div className="card-inner">
//             <h3>Subject</h3>
//             <BsNewspaper className="card-icon" />
//           </div>
//           <h1>{selectedSubjectCode}</h1>
//         </div>
//       </div>
//       <div className="compare">
//         <div className="">
//           {selectedSemester && (
//             <div className="charts">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart width={150} height={40} data={Record}>
//                   <Bar dataKey="Credits" fill="#8884d8" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           )}
//           <h1>Student Dashboard</h1>
//           <SelectStudent
//             students={studentData}
//             selectedRegisterNumber={selectedRegisterNumber}
//             handleSelectChange={handleSelectChange}
//             selectedSubjectCode={selectedSubjectCode}
//             handleSubjectCodeChange={handleSubjectCodeChange}
//             selectedSemester={selectedSemester}
//             handleSemesterChange={handleSemesterChange}
//           />
//           <StudentList students={studentData} />
//           <GradeChart
//             students={studentData}
//             selectedRegisterNumber={selectedRegisterNumber}
//             selectedSubjectCode={selectedSubjectCode}
//           />
//           <SemesterPerformanceChart
//             students={studentData}
//             selectedRegisterNumber={selectedRegisterNumber}
//             selectedSemester={selectedSemester}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// Home.js
import React, { useState } from "react";
import { BsBook, BsGraphUpArrow, BsNewspaper } from "react-icons/bs";
import Record from "../Data/Records.json";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import SelectStudent from "../Componenets/SelectStudent";
import StudentList from "../Componenets/StudentList";
import GradeChart from "../Componenets/GradeChart";
import SemesterPerformanceChart from "../Componenets/SemesterPerformance";
import Header from "../Componenets/Header/Header";
import Sidebar from "../Componenets/Sidebar/Sidebar";
import { PieChart, Pie, Tooltip } from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [studentData] = useState(Record);
  const [selectedRegisterNumber, setSelectedRegisterNumber] = useState("");
  const [selectedSubjectCode, setSelectedSubjectCode] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [opensidebarToggle, setOpenSidebarToggle] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedRegisterNumber(event.target.value);
    setSelectedSubjectCode("");
    setSelectedSemester("");
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
    setSelectedSubjectCode("");
  };

  const handleSubjectCodeChange = (event) => {
    setSelectedSubjectCode(event.target.value);
  };

  const openSidebar = () => {
    setOpenSidebarToggle(!opensidebarToggle);
  };

  const getGradeChartData = () => {
    const gradeColors = {
      A: "#8884d8", // blue
      B: "#82ca9d", // green
      C: "#ffc658", // yellow
      O: "#ff7f50", // coral
    };

    const gradeData = Record.reduce((acc, student) => {
      const grade = student.grade;
      acc[grade] = acc[grade] ? acc[grade] + 1 : 1;
      return acc;
    }, {});

    return Object.keys(gradeData).map((grade) => ({
      name: grade,
      value: gradeData[grade],
      fill: gradeColors[grade] || "#000000", // default to black if color not found
    }));
  };

  const gradeChartData = getGradeChartData();

  return (
    <div className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="grid-container">
        <Header openSidebar={openSidebar} />
        <Sidebar
          openSidebarToggle={opensidebarToggle}
          openSidebar={openSidebar}
        />
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Semester</h3>
            <BsBook className="card-icon" />
          </div>
          <h1>{selectedSemester}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Student</h3>
            <BsGraphUpArrow className="card-icon" />
          </div>
          <h1>{selectedRegisterNumber}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Subject</h3>
            <BsNewspaper className="card-icon" />
          </div>
          <h1>{selectedSubjectCode}</h1>
        </div>
      </div>
      <div className="compare">
        <div className="">
          {selectedSemester && (
            <div className="charts">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={Record}>
                  <Bar dataKey="Credits" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          <h1>Student Dashboard</h1>
          <SelectStudent
            students={studentData}
            selectedRegisterNumber={selectedRegisterNumber}
            handleSelectChange={handleSelectChange}
            selectedSubjectCode={selectedSubjectCode}
            handleSubjectCodeChange={handleSubjectCodeChange}
            selectedSemester={selectedSemester}
            handleSemesterChange={handleSemesterChange}
          />
          {/* <StudentList students={studentData} /> */}
          <GradeChart
            students={studentData}
            selectedRegisterNumber={selectedRegisterNumber}
            selectedSubjectCode={selectedSubjectCode}
          />
          <SemesterPerformanceChart
            students={studentData}
            selectedRegisterNumber={selectedRegisterNumber}
            selectedSemester={selectedSemester}
          />
          <div className="charts">
            <h1>Grade Comparison</h1>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={gradeChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                />
                {/* <Pie
                  dataKey="value"
                  data={gradeChartData}
                  cx={500}
                  cy={200}
                  innerRadius={40}
                  outerRadius={80}
                  fill="#82ca9d"
                /> */}
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
