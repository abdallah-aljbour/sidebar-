import { FC, useState } from "react";
import CardGrid from "../components/CardGrid/CardGrid";
import { CardData } from "../components/Card/types";
import element from "../assets/element-3.svg";
import row from "../assets/row-vertical.svg";
import search from "../assets/search-normal-1.svg";
import filter from "../assets/filter.svg";
import add from "../assets/add.svg";
import home from "../assets/Home.svg";
import Notification from "../assets/Notification.svg";
import Group from "../assets/Group.svg";
import oval from "../assets/Oval.svg";
import profile from "../assets/profile.svg";
import chart from "../assets/Chart graph 5.svg";
import arrowLeft from "../assets/2 Arrow - Left.svg";
import arrowRight from "../assets/Arrow - Right 3.svg";
import arrowRight1 from "../assets/Arrow - Right 2.svg";
import arrowRight2 from "../assets/2 Arrow - Right.svg";
import AddCollectionModal from "../components/NewCollectionModal";
import "./Home.scss";

interface HomeProps {
  isCollapsed: boolean;
  isSubmenuOpen?: boolean;
}

const Home: FC<HomeProps> = ({ isCollapsed, isSubmenuOpen = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getContainerClass = () => {
    let className = "home-container";
    if (isCollapsed) {
      className += " collapsed";
    }
    if (isSubmenuOpen) {
      className += " submenu-open";
    }
    return className;
  };

  const cardsData: CardData[] = new Array(8).fill({
    image: "/src/assets/Knowledge Base Thumbnil.svg",
    title: "Collection Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icons: [
      { image: "/src/assets/folder-2.svg", text: "12 Section" },
      { image: "/src/assets/note-text.svg", text: "50 Article" },
    ],
  });

  return (
    <div className={getContainerClass()}>
      <div className="main-container">
        <div className="navbar">
          <div className="left-navbar">
            <span className="Knowledge-Base">Knowledge Base</span>
          </div>
          <div className="right-navbar">
            <ul>
              <li>
                <img src={home} alt="home" />
                Home
              </li>
              <li>
                <img src={Notification} alt="Notification" />
                Notification
              </li>
              <li>
                <img src={Group} alt="Group" />
                English
              </li>
              <li>
                <div className="User-Names">
                  <img src={oval} alt="User Names" className="circle" />
                  <img src={profile} alt="User Names" className="prfile" />
                </div>
                User Names
                <img src={chart} alt="chart" />
              </li>
            </ul>
          </div>
        </div>

        <div className="empty"></div>

        <div className="toolBar">
          <div className="toolBar-left">
            <div className="card-view">
              <img src={element} alt="card view" />
              <span>Card View</span>
            </div>
            <div className="row-view">
              <img src={row} alt="row view" />
              <span>List View</span>
            </div>
            <div className="search">
              <img src={search} alt="search" />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </div>
          <div className="toolBar-right">
            <div className="filter-add">
              <img src={filter} alt="filter" />
              <span>Filter</span>
            </div>
            <div className="addNew" onClick={() => setIsModalOpen(true)}>
              <img src={add} alt="add" />
              <button>Add New</button>
            </div>
          </div>
        </div>

        <CardGrid cards={cardsData} />

        <div className="footer">
          <div className="footerText">
            <span>Showing on page 1 - 1 to 10</span>
          </div>
          <div className="footerIcons">
            <span>
              <img src={arrowLeft} alt="img" />
            </span>
            <span>
              <img src={arrowRight} alt="img" />
            </span>
            <span className="one">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>
              <img src={arrowRight1} alt="img" />
            </span>
            <span>
              <img src={arrowRight2} alt="img" />
            </span>
          </div>
        </div>

        <AddCollectionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Home;
