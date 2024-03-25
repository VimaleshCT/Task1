import React, { useState } from "react";
import { BsBook, BsGraphUpArrow, BsNewspaper } from "react-icons/bs";
import Record from "../Data/Records.json";
import SelectStudent from "../Componenets/SelectStudent";
import GradeChart from "../Componenets/GradeChart";
import SemesterPerformanceChart from "../Componenets/SemesterPerformance";
import "./Dashboard.css";

const Dashboard = () => {
  const [studentData] = useState(Record);
  const [selectedRegisterNumber, setSelectedRegisterNumber] = useState("");
  const [selectedSubjectCode, setSelectedSubjectCode] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

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

  return (
    <div className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>
      <div className="grid-container">
        <div class="outer-box">
          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <h3>Student</h3>
                <BsGraphUpArrow className="card-icon" />
              </div>
              <h1>{selectedRegisterNumber}</h1>
            </div>
            <div className="card">
              <div className="card-inner">
                <h3>Semester</h3>
                <BsBook className="card-icon" />
              </div>
              <h1>{selectedSemester}</h1>
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
            <div>
              <h1>Student Dashboard</h1>
              <div className="select">
                <SelectStudent
                  students={studentData}
                  selectedRegisterNumber={selectedRegisterNumber}
                  handleSelectChange={handleSelectChange}
                  selectedSubjectCode={selectedSubjectCode}
                  handleSubjectCodeChange={handleSubjectCodeChange}
                  selectedSemester={selectedSemester}
                  handleSemesterChange={handleSemesterChange}
                />
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
