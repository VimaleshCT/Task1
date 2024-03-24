import React from "react";

const SelectStudent = ({
  students,
  selectedRegisterNumber,
  handleSelectChange,
  selectedSubjectCode,
  handleSubjectCodeChange,
  selectedSemester, // Move selectedSemester here
  handleSemesterChange,
}) => {
  const uniqueSemesters = [
    ...new Set(students.map((student) => student.semester)),
  ];
  const uniqueSubjectCodes = [
    ...new Set(students.map((student) => student.course_code)),
  ];

  return (
    <div>
      <div>
        <label htmlFor="selectStudent">Select Register Number:</label>
        <select
          id="selectStudent"
          value={selectedRegisterNumber}
          onChange={handleSelectChange}
        >
          <option value="">All Students</option>
          {students.map((student) => (
            <option
              key={student.register_number}
              value={student.register_number}
            >
              {student.register_number}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="selectSubjectCode">Select Subject Code:</label>
        <select
          id="selectSubjectCode"
          value={selectedSubjectCode}
          onChange={handleSubjectCodeChange}
        >
          <option value="">All Subjects</option>
          {uniqueSubjectCodes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="selectSemester">Select Semester:</label>
        <select
          id="selectSemester"
          value={selectedSemester}
          onChange={handleSemesterChange}
        >
          <option value="">All Semesters</option>
          {uniqueSemesters.map((semester) => (
            <option key={semester} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectStudent;
