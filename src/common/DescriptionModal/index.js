"use client";
import React from "react";
import Modal from "../Modal";
import { formatText } from "@/utils/textFormatter";
import styles from "./style.module.scss";

const DescriptionModal = ({
  isOpen,
  onClose,
  title = "Description",
  content,
  ...modalProps
}) => {
  if (!content) return null;

  const formattedContent = formatText(content);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="lg"
      className={styles.descriptionModal}
      contentClassName={styles.descriptionContent}
      {...modalProps}
    >
      <div className={styles.descriptionBody}>
        <div
          className={styles.formattedText}
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />
      </div>
    </Modal>
  );
};

export default DescriptionModal;
