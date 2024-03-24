// export default StudentList;
// import React from "react";

// const StudentList = ({ students }) => {
//   return (
//     <div>
//       <h2>Student List</h2>
//       <ul>
//         {students.map((student) => (
//           <li key={student.register_number}>
//             {student.register_number} - {student.grade}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default StudentList;
import React from "react";
import Record from "../Data/Records.json";

const StudentList = () => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {Record.map((student) => (
          <li key={student.register_number}>
            {student.register_number} - {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
