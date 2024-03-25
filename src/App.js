// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Login from "./Pages/Login";
// import Dashboard from "./Pages/Dashboard";
// import Layout from "./Pages/Layout";
// import Grade from "./Componenets/Grade";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <Router>
//       <Routes>
//         {!isLoggedIn && (
//           <Route path="/" element={<Login onLogin={handleLogin} />} />
//         )}
//         {isLoggedIn && (
//           <Route path="/" element={<Layout />}>
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="grade" element={<Grade />} />
//           </Route>
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Pages/Layout";
import Grade from "./Componenets/Grade";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="grade" element={<Grade />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
