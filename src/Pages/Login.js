// import { useState } from "react";
// import Record from "../Data/Records.json";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [registerNumber, setRegisterNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const student = Record.find(
//       (student) =>
//         student.register_number === registerNumber &&
//         student.password === password
//     );
//     if (student) {
//       navigate(`/dashboard/${student.register_number}`);
//     } else {
//       alert("Invalid register number or password");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Register Number:
//           <input
//             type="text"
//             value={registerNumber}
//             onChange={(e) => setRegisterNumber(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import Record from "../Data/Records.json";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [registerNumber, setRegisterNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = Record.find(
      (student) =>
        student.register_number === registerNumber &&
        student.password === password
    );
    if (student) {
      navigate(`/dashboard/${student.register_number}`);
    } else {
      alert("Invalid register number or password");
    }
  };

  return (
    <div className="page">
      <div className="cover">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Register Number:
            <input
              type="text"
              value={registerNumber}
              onChange={(e) => setRegisterNumber(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
