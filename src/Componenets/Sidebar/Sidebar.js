import { BsPerson, BsBook, BsGraphUpArrow } from "react-icons/bs";
import "./Sidebar.css";
function Sidebar({ opensidebarToggle, openSidebar }) {
  return (
    <aside
      id="sidebar"
      className={opensidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsPerson className="icon_header" /> PROFILE
        </div>
        <span className="icon close_icon" onClick={openSidebar}>
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="./Dashboard">
            <BsPerson className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./SemesterPerformance">
            <BsBook className="icon" /> Semester
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="./GradeChart">
            <BsGraphUpArrow className="icon" /> Grade
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
