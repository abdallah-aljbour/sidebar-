// import sidebarData from '../data/sidebarData.json';
// import './Sidebar.scss';

// const Sidebar = () => {
//   return (
//     <div className="sidebar-container">
//       {/* Sidebar header */}
//      {/* Sidebar header */}
// <div className="sidebar-header">
//   {/* Logo and text container */}
//   <div className="logo-text-container">
//     <img src="/src/assets/Arena-logo-icon.svg" alt="Logo" />
//     <span>ARINA</span>
//   </div>
//   <img src="/src/assets/sidebar-left.svg" alt="Menu" className="menu-icon" />
// </div>

//       {/* Search bar */}
// <div className="search-bar">
//   {/* Search Icon Container */}
//   <div className="icon-container">
//     <img src="/src/assets/search-normal.svg" alt="Search Icon" />
//   </div>

//   {/* Search Input Container */}
//   <div className="input-container">
//     <input type="text" placeholder="Search..." />
//   </div>

//   {/* Icons Container */}
//   <div className="icons-container">
//   <div className="icon-wrapper">
//     <img src="/src/assets/Cmd.svg" alt="Combined Logo" />
//   </div>
// </div>

// </div>


//       {/* Dynamic sidebar items container */}
//       <div className="dynamic-items-container">
//         {sidebarData.map((item, index) => (
//           <div key={index} className="sidebar-item">
//             <img src={`/assets/${item.icon}`} alt={item.text} />
//             <span>{item.text}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// Sidebar.tsx
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import sidebarData from '../data/sidebarData.json';
import './Sidebar.scss';
// Import static assets
import arenaLogo from '../assets/Arena-logo-icon.svg';
import sidebarRight from '../assets/sidebar-right.svg';
import sidebarLeft from '../assets/sidebar-left.svg';
import searchIcon from '../assets/search-normal.svg';
import cmdIcon from '../assets/Cmd.svg';
import addIcon from '../assets/add.svg';

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

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  link,
  isCollapsed,
  isActive
}) => {
  return (
    <Link to={link} className={`sidebar-item ${isActive ? 'active' : ''}`}>
      <img src={`/${icon}`} alt={text} />
      {!isCollapsed && (
        <>
          <span>{text}</span>
          <div className="plus-icon">
            <img src={addIcon} alt="Expand" />
          </div>
        </>
      )}
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
 
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
 
  return (
    <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="top-container">
        {/* Sidebar header */}
        <div className="sidebar-header">
          <div className="logo-text-container">
            <img src={arenaLogo} alt="Logo" />
            {!isCollapsed && <span>ARINA</span>}
          </div>
          <img
            onClick={toggleSidebar}
            src={isCollapsed ? sidebarRight : sidebarLeft}
            alt="Menu"
            className="menu-icon"
          />
        </div>
        {/* Search Bar */}
        <div className="search-bar">
          <div className="icon-container">
            <img src={searchIcon} alt="Search Icon" />
          </div>
          {!isCollapsed && (
            <>
              <div className="input-container">
                <input type="text" placeholder="Search..." />
              </div>
              <div className="icons-container">
                <div className="icon-wrapper">
                  <img src={cmdIcon} alt="Combined Logo" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {!isCollapsed && <h2 className="menu-title">Main Menu</h2>}
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