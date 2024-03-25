import { BsPersonCircle, BsJustify } from "react-icons/bs";
import "./Header.css";
const Header = ({ OpenSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">Student Dashboard</div>
      <div className="header-right"></div>
      <BsPersonCircle className="icon" />
    </header>
  );
};

export default Header;
