import { useLocation, Link } from "react-router-dom";
import sidebarData from "../data/sidebarData.json";
import "./Sidebar.scss";

// Import static assets
import arenaLogo from "../assets/Arena-logo-icon.svg";
import sidebarRight from "../assets/sidebar-right.svg";
import sidebarLeft from "../assets/sidebar-left.svg";
import searchIcon from "../assets/search-normal.svg";
import cmdIcon from "../assets/Cmd.svg";
import addIcon from "../assets/add.svg";

interface SidebarDataItem {
  icon: string;
  text: string;
  link: string;
}

interface SidebarItemProps {
  icon: string;
  text: string;
  link: string;
  isCollapsed: boolean;
  isActive: boolean;
}

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  link,
  isCollapsed,
  isActive,
}) => {
  return (
    <Link to={link} className={`sidebar-item ${isActive ? "active" : ""}`}>
      <img src={icon} alt={text} />
      {!isCollapsed && (
        <>
          <span>{text}</span>
          <div className="plus-icon">
            <img src={addIcon} alt="Add" />
          </div>
        </>
      )}
    </Link>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();

  return (
    <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="top-container">
        {/* Sidebar header */}
        <div className="sidebar-header">
          <div className="logo-text-container">
            <img src={arenaLogo} alt="Arena Logo" />
            {!isCollapsed && <span>ARENA</span>}
          </div>
          <img
            src={isCollapsed ? sidebarRight : sidebarLeft}
            alt="Toggle Menu"
            className="menu-icon"
            onClick={toggleSidebar}
          />
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <div className="icon-container">
            <img src={searchIcon} alt="Search" />
          </div>
          {!isCollapsed && (
            <>
              <div className="input-container">
                <input type="text" placeholder="Search" />
              </div>
              <div className="icons-container">
                <div className="icon-wrapper">
                  <img src={cmdIcon} alt="Command" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {!isCollapsed && <div className="menu-title">Main Menu</div>}

      {/* Dynamic Items Container */}
      <div className="dynamic-items-wrapper">
        <div className="dynamic-items-container">
          {sidebarData.map((item: SidebarDataItem, index: number) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              text={item.text}
              link={item.link}
              isCollapsed={isCollapsed}
              isActive={location.pathname === item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
