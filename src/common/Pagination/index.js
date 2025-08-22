"use client";
import React from 'react';
import styles from './style.module.scss';

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  size = 'medium',
  variant = 'default',
  showFirstLast = true,
  showPageNumbers = true,
  maxVisiblePages = 5,
  className = '',
  disabled = false
}) => {
  if (totalPages <= 1) return null;

  const handlePageChange = (page) => {
    if (!disabled && onPageChange && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const getButtonClass = (type, page = null) => {
    const baseClass = styles.button;
    const sizeClass = styles[size];
    const variantClass = styles[variant];
    const disabledClass = disabled ? styles.disabled : '';
    
    let stateClass = '';
    if (type === 'page' && page === currentPage) {
      stateClass = styles.active;
    } else if (type === 'disabled') {
      stateClass = styles.disabled;
    }
    
    return `${baseClass} ${sizeClass} ${variantClass} ${stateClass} ${disabledClass}`.trim();
  };

  const renderPageButton = (page) => (
    <button
      key={page}
      className={getButtonClass('page', page)}
      onClick={() => handlePageChange(page)}
      disabled={disabled}
      type="button"
    >
      {page}
    </button>
  );

  const renderEllipsis = (key) => (
    <span key={key} className={styles.ellipsis}>
      ...
    </span>
  );

  const renderNavigationButton = (type, page, icon, label) => {
    const isDisabled = disabled || page < 1 || page > totalPages;
    
    return (
      <button
        className={getButtonClass(isDisabled ? 'disabled' : 'nav')}
        onClick={() => handlePageChange(page)}
        disabled={isDisabled}
        type="button"
        aria-label={label}
      >
        {icon}
      </button>
    );
  };

  const pageNumbers = getPageNumbers();
  const showStartEllipsis = pageNumbers[0] > 1;
  const showEndEllipsis = pageNumbers[pageNumbers.length - 1] < totalPages;

  return (
    <nav className={`${styles.pagination} ${className}`} aria-label="Pagination">
      <div className={styles.paginationContainer}>
        {/* First Page Button */}
        {showFirstLast && (
          renderNavigationButton(
            'first',
            1,
            '«',
            'Go to first page'
          )
        )}

        {/* Previous Page Button */}
        {renderNavigationButton(
          'prev',
          currentPage - 1,
          '‹',
          'Go to previous page'
        )}

        {/* Page Numbers */}
        {showPageNumbers && (
          <>
            {/* Start ellipsis */}
            {showStartEllipsis && renderEllipsis('start-ellipsis')}
            
            {/* Page numbers */}
            {pageNumbers.map(renderPageButton)}
            
            {/* End ellipsis */}
            {showEndEllipsis && renderEllipsis('end-ellipsis')}
          </>
        )}

        {/* Next Page Button */}
        {renderNavigationButton(
          'next',
          currentPage + 1,
          '›',
          'Go to next page'
        )}

        {/* Last Page Button */}
        {showFirstLast && (
          renderNavigationButton(
            'last',
            totalPages,
            '»',
            'Go to last page'
          )
        )}
      </div>

      {/* Page Info */}
      <div className={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </div>
    </nav>
  );
};

export default Pagination;
