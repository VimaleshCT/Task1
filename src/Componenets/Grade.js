import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Record from "../Data/Records.json";

const Grade = ({ selectedGrade }) => {
  const getGradeChartData = () => {
    const gradeData = Record.reduce((acc, student) => {
      if (!acc[student.semester]) {
        acc[student.semester] = { A: 0, B: 0, C: 0, O: 0 };
      }
      if (!selectedGrade || student.grade === selectedGrade) {
        acc[student.semester][student.grade]++;
      }
      return acc;
    }, {});

    return Object.keys(gradeData).map((semester) => ({
      semester: `Semester ${semester}`,
      ...gradeData[semester],
    }));
  };

  const [gradeChartData, setGradeCharts] = useState();

  useEffect(() => {
    setGradeCharts(getGradeChartData());
  }, [selectedGrade]);

  if (!gradeChartData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="charts"
      style={{
        width: "80vw",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Grade Comparison</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={gradeChartData}>
          <XAxis dataKey="semester" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="A" stackId="a" fill="#8884d8" />
          <Bar dataKey="B" stackId="a" fill="#82ca9d" />
          <Bar dataKey="C" stackId="a" fill="#ffc658" />
          <Bar dataKey="O" stackId="a" fill="#ff7f50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grade;
