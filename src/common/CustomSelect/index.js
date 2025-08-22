"use client";
import React, { useState, useRef, useEffect } from 'react';
import styles from './style.module.scss';

const CustomSelect = ({
  options = [],
  value = null,
  onChange,
  placeholder = "Select an option",
  isMulti = false,
  isSearchable = false,
  className = "",
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(
    isMulti ? (Array.isArray(value) ? value : []) : []
  );
  const [selectedOption, setSelectedOption] = useState(
    !isMulti ? value : null
  );
  const dropdownRef = useRef(null);

  // Filter options based on search term
  const filteredOptions = isSearchable
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update local state when value prop changes
  useEffect(() => {
    if (isMulti) {
      setSelectedOptions(Array.isArray(value) ? value : []);
    } else {
      setSelectedOption(value);
    }
  }, [value, isMulti]);

  const handleOptionClick = (option) => {
    if (isMulti) {
      const isSelected = selectedOptions.some(opt => opt.value === option.value);
      let newSelectedOptions;
      
      if (isSelected) {
        newSelectedOptions = selectedOptions.filter(opt => opt.value !== option.value);
      } else {
        newSelectedOptions = [...selectedOptions, option];
      }
      
      setSelectedOptions(newSelectedOptions);
      onChange?.(newSelectedOptions);
    } else {
      setSelectedOption(option);
      onChange?.(option);
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  const removeOption = (optionToRemove) => {
    const newSelectedOptions = selectedOptions.filter(opt => opt.value !== optionToRemove.value);
    setSelectedOptions(newSelectedOptions);
    onChange?.(newSelectedOptions);
  };

  const getDisplayValue = () => {
    if (isMulti) {
      if (selectedOptions.length === 0) return placeholder;
      if (selectedOptions.length === 1) return selectedOptions[0].label;
      return `${selectedOptions.length} items selected`;
    } else {
      return selectedOption ? selectedOption.label : placeholder;
    }
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setSearchTerm("");
      }
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className={`${styles.customSelect} ${className} ${disabled ? styles.disabled : ''}`}
    >
      <div 
        className={`${styles.selectHeader} ${isOpen ? styles.open : ''}`}
        onClick={toggleDropdown}
      >
        <span className={styles.displayValue}>
          {getDisplayValue()}
        </span>
        <span className={styles.arrow}>▼</span>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {isSearchable && (
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
                autoFocus
              />
            </div>
          )}

          {isMulti && selectedOptions.length > 0 && (
            <div className={styles.selectedTags}>
              {selectedOptions.map((option) => (
                <span key={option.value} className={styles.tag}>
                  {option.label}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeOption(option);
                    }}
                    className={styles.removeTag}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          <div className={styles.optionsList}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => {
                const isSelected = isMulti
                  ? selectedOptions.some(opt => opt.value === option.value)
                  : selectedOption?.value === option.value;

                return (
                  <div
                    key={option.value}
                    className={`${styles.option} ${isSelected ? styles.selected : ''}`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {isMulti && (
                      <input
                        type="checkbox"
                        checked={isSelected}
                        readOnly
                        className={styles.checkbox}
                      />
                    )}
                    <span className={styles.optionLabel}>{option.label}</span>
                  </div>
                );
              })
            ) : (
              <div className={styles.noOptions}>
                {isSearchable && searchTerm ? 'No options found' : 'No options available'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
