import { FC } from "react";
import CardGrid from "../components/CardGrid/CardGrid";
import { CardData } from "../components/Card/types";
import element from "../assets/element-3.svg";
import row from "../assets/row-vertical.svg";
import search from "../assets/search-normal.svg";
import filter from "../assets/filter.svg";
import add from "../assets/add.svg";
import home from "../assets/Home.svg";
import Notification from "../assets/Notification.svg";
import Group from "../assets/Group.svg";
import oval from "../assets/Oval.svg";
import profile from "../assets/profile.svg";
import chart from "../assets/Chart graph 5.svg";
import Sidebar from "../components/Sidebar";
import "./Home.scss";

const Home: FC = () => {
  const cardsData: CardData[] = [
    {
      image: "/src/assets/Knowledge Base Thumbnil.svg",
      title: "Collection Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icons: [
        { image: home, text: "12 Section" },
        { image: profile, text: "50 Article" },
      ],
    },
    {
      image: "/src/assets/Knowledge Base Thumbnil.svg",
      title: "Collection Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icons: [
        { image: home, text: "12 Section" },
        { image: profile, text: "50 Article" },
      ],
    },
    {
      image: "/src/assets/Knowledge Base Thumbnil.svg",
      title: "Collection Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icons: [
        { image: home, text: "12 Section" },
        { image: profile, text: "50 Article" },
      ],
    },
    {
      image: "/src/assets/Knowledge Base Thumbnil.svg",
      title: "Collection Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icons: [
        { image: home, text: "12 Section" },
        { image: profile, text: "50 Article" },
      ],
    },
    {
      image: "/src/assets/Knowledge Base Thumbnil.svg",
      title: "Collection Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icons: [
        { image: home, text: "12 Section" },
        { image: profile, text: "50 Article" },
      ],
    },
    {
      image: "/src/assets/Knowledge Base Thumbnil.svg",
      title: "Collection Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icons: [
        { image: home, text: "12 Section" },
        { image: profile, text: "50 Article" },
      ],
    },
    {
      image: "/src/assets/Knowledge Base Thumbnil.svg",
      title: "Collection Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icons: [
        { image: home, text: "12 Section" },
        { image: profile, text: "50 Article" },
      ],
    },
    {
      image: "/src/assets/Knowledge Base Thumbnil.svg",
      title: "Collection Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icons: [
        { image: home, text: "12 Section" },
        { image: profile, text: "50 Article" },
      ],
    },
  ];

  return (
    <div className="home-container">
      <Sidebar />
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
              <img src={search} alt="row view" />
              <span>Search</span>
            </div>
          </div>
          <div className="toolBar-right">
            <div className="filter-add">
              <img src={filter} alt="filter" />
              <span>Filter</span>
            </div>
            <div className="addNew">
              <img src={add} alt="add" />
              <button>Add New</button>
            </div>
          </div>
        </div>

        <CardGrid cards={cardsData} />
      </div>
    </div>
  );
};

export default Home;
