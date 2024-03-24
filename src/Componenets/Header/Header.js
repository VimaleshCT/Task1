import { BsPersonCircle, BsSearch, BsJustify } from "react-icons/bs";
import "./Header.css";
const header = ({ OpenSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        {/* <a href="./Dashboard">
          <BsPerson className="icon" /> Dashboard
        </a> */}
        <BsSearch className="icon" />
      </div>
      <div className="header-right"></div>
      <BsPersonCircle className="icon" />
    </header>
  );
};

export default header;
