// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Login from "./Pages/Login";
// import Dashboard from "./Pages/Dashboard";
// import "./App.css";
// import Layout from "./Pages/Layout";
// import Grade from "./Componenets/Grade";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Layout />}>
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="grade" element={<Grade />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;import React, { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Pages/Layout";
import Grade from "./Componenets/Grade";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="grade" element={<Grade />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
