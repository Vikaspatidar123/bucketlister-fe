"use client";
import React from "react";
import styles from "./style.module.scss";

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = "",
  disabled = false,
}) => {
  if (totalPages <= 1) return null;

  const handlePageChange = (page) => {
    if (!disabled && onPageChange && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageButton = (page) => (
    <button
      key={page}
      className={`${styles.pageButton} ${page === currentPage ? styles.active : ""}`}
      onClick={() => handlePageChange(page)}
      disabled={disabled}
      type="button"
    >
      {page}
    </button>
  );

  const renderNavigationButton = (type, page, icon) => {
    const isDisabled = disabled || page < 1 || page > totalPages;

    return (
      <button
        className={`${styles.navButton} ${isDisabled ? styles.disabled : ""}`}
        onClick={() => handlePageChange(page)}
        disabled={isDisabled}
        type="button"
        aria-label={type === "prev" ? "Go to previous page" : "Go to next page"}
      >
        {icon}
      </button>
    );
  };

  // Generate all page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className={`${styles.pagination} ${className}`}
      aria-label="Pagination"
    >
      {/* Previous Page Button */}
      {renderNavigationButton("prev", currentPage - 1, "<")}

      {/* Page Numbers */}
      {pageNumbers.map(renderPageButton)}

      {/* Next Page Button */}
      {renderNavigationButton("next", currentPage + 1, ">")}
    </nav>
  );
};

export default Pagination;
