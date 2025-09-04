"use client";
import React, { useState } from "react";
import DescriptionModal from "../DescriptionModal";
import { truncateText, needsTruncation } from "@/utils/textFormatter";
import styles from "./style.module.scss";

const ReadMoreText = ({ 
  text, 
  maxLength = 150, 
  modalTitle = "Description",
  className = "",
  readMoreClassName = "",
  ...props 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  if (!text || typeof text !== 'string') {
    return null;
  }

  const shouldTruncate = needsTruncation(text, maxLength);
  const displayText = shouldTruncate ? truncateText(text, maxLength) : text;

  const handleReadMoreClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <span className={`${styles.readMoreText} ${className}`} {...props}>
        {displayText}
        {shouldTruncate && (
          <>
            {" "}
            <button 
              type="button"
              onClick={handleReadMoreClick}
              className={`${styles.readMoreButton} ${readMoreClassName}`}
            >
              Read more
            </button>
          </>
        )}
      </span>
      
      {shouldTruncate && (
        <DescriptionModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={modalTitle}
          content={text}
        />
      )}
    </>
  );
};

export default ReadMoreText;