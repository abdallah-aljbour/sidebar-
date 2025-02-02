import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import sidebarData from "../data/sidebarData.json";
import "./Sidebar.scss";

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
  subItems?: Array<{
    text: string;
    link: string;
  }>;
}

interface SidebarItemProps {
  icon: string;
  text: string;
  link: string;
  subItems?: Array<{
    text: string;
    link: string;
  }>;
  isCollapsed: boolean;
  isActive: boolean;
  onItemClick: (item: SidebarDataItem) => void;
}

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  onSubmenuChange: (isOpen: boolean) => void;
}

interface SubMenuProps {
  item: SidebarDataItem;
  isVisible: boolean;
  onClose: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ item, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="submenu-container">
      <div className="submenu-header">
        <span className="back-button" onClick={onClose}>
          «
        </span>
        <h2>{item.text}</h2>
      </div>
      <div className="submenu-items">
        {item.subItems?.map((subItem, index) => (
          <Link key={index} to={subItem.link} className="submenu-item">
            {subItem.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  link,
  subItems,
  isCollapsed,
  isActive,
  onItemClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (subItems) {
      e.preventDefault();
      onItemClick({ icon, text, link, subItems });
    }
  };

  return (
    <Link
      to={link}
      className={`sidebar-item ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <img src={icon} alt={text} />
      {!isCollapsed && (
        <>
          <span>{text}</span>
          {subItems && (
            <div className="plus-icon">
              <img src={addIcon} alt="Add" />
            </div>
          )}
        </>
      )}
    </Link>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  toggleSidebar,
  onSubmenuChange,
}) => {
  const location = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState<SidebarDataItem | null>(
    null
  );

  const handleItemClick = (item: SidebarDataItem) => {
    if (item.subItems) {
      setActiveSubmenu(item);
      if (!isCollapsed) {
        toggleSidebar();
      }
      onSubmenuChange(true);
    }
  };

  const handleCloseSubmenu = () => {
    setActiveSubmenu(null);
    if (isCollapsed) {
      toggleSidebar();
    }
    onSubmenuChange(false);
  };

  return (
    <>
      <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
        <div className="top-container">
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
        <div className="dynamic-items-wrapper">
          <div className="dynamic-items-container">
            {sidebarData.map((item: SidebarDataItem, index: number) => (
              <SidebarItem
                key={index}
                {...item}
                isCollapsed={isCollapsed}
                isActive={location.pathname === item.link}
                onItemClick={handleItemClick}
              />
            ))}
          </div>
        </div>
      </div>
      {activeSubmenu && (
        <SubMenu
          item={activeSubmenu}
          isVisible={!!activeSubmenu}
          onClose={handleCloseSubmenu}
        />
      )}
    </>
  );
};

export default Sidebar;
