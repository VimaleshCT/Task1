import { BsPerson, BsGraphUpArrow } from "react-icons/bs";
import "./Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar({ opensidebarToggle, openSidebar }) {
  return (
    <aside
      id="sidebar"
      className={opensidebarToggle ? "sidebar-responsive" : ""}
    >
      <ul className="sidebar-list">
        <Link to="/dashboard" className="sidebar-list-item">
          <BsPerson className="icon" /> Dashboard
        </Link>
        <Link to="/grade" className="sidebar-list-item">
          <BsGraphUpArrow className="icon" /> Grade
        </Link>
      </ul>
    </aside>
  );
}

export default Sidebar;
