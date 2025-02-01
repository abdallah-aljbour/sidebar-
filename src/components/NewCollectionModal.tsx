import React from "react";
import "./NewCollectionModal.scss";
import placeholderIcon from "../assets/Frame 1000002840.svg";
import closeIcon from "../assets/close-circle.svg";
import infoCercile from "../assets/info-circle.svg";
import text from "../assets/text.svg";
import info from "../assets/info-circle2.svg";
import category from "../assets/category-2.svg";
import sitting from "../assets/setting-4.svg";
import arrow from "../assets/arrow-down.svg";
import document from "../assets/document-upload.svg";
import add from "../assets/add.svg";

interface NewCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewCollectionModal: React.FC<NewCollectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="header-content">
            <img src={placeholderIcon} alt="New Collection" />
            <div className="title-container">
              <h2>
                Add <span className="newCollection">New Collection</span>
              </h2>
              <p>Knowledge Base / Create New Collection</p>
            </div>
          </div>
          <button className="close-button" onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <div className="collectionName">
          <span className="margin">
            Collection Name <img src={infoCercile} alt="text" />
          </span>
          <div className="inputArena">
            <button className="button-with-icon">
              <img src={text} alt="icon" className="button-icon" />
              Arena
              <img src={info} alt="icon" className="button-icon2" />
            </button>
          </div>
        </div>
        <div className="Description">
          <span className="margin">
            Description <img src={infoCercile} alt="text" />
          </span>
          <div className="DescriptionInput">
            <span className="DescriptionText">Description</span>
            <button className="DescriptionForm"></button>
          </div>
        </div>
        <div className="mainTow">
          <span className="margin2">
            Tag <img src={infoCercile} alt="text" />
          </span>
          <span className="acces2">
            Access Level* <img src={infoCercile} alt="text" />
          </span>
          <div className="towInput">
            <button className="buttonTow">
              <img src={category} alt="category" className="button-icon" />
              placeholder
            </button>
            <div className="div2">
              <button className="buttonTow2">
                <div>
                  <img src={sitting} alt="category" className="button-icon" />
                  placeholder
                </div>
                <img src={arrow} alt="arrow" className="button-icon3" />
              </button>
            </div>
          </div>
          <div className="upload">
            <div className="upload2">
              <div className="upload3">
                <img src={document} alt="document" />
                <p className="text1">
                  <span className="click-here ">Click here</span> to upload your
                  Collection Thumbnail or drag and drop.
                </p>
                <p className="text2">
                  Supported Format: SVG, JPG, PNG (10mb each)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The lastBorder button inside modal-content */}
        <div className="lastBorder">
          <button>
            <img src={add} alt="add" />
            Create Now
          </button>
          <p className="cancel">Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default NewCollectionModal;
