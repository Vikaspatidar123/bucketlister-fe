"use client";
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
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
  const headerRef = useRef(null);
  const [placement, setPlacement] = useState('down'); // 'down' | 'up'
  const [computedMaxHeight, setComputedMaxHeight] = useState(300);
  const [dropdownRectStyle, setDropdownRectStyle] = useState({});
  const [portalRoot, setPortalRoot] = useState(null);
  const instanceId = useMemo(() => `cs-${Math.random().toString(36).slice(2)}`, []);

  // Filter options based on search term
  const filteredOptions = isSearchable
    ? options.filter(option =>
      option && option.label && option.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : options.filter(option => option && option.label);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      const rootEl = dropdownRef.current;
      const portalEl = document.querySelector(`[data-select-owner="${instanceId}"]`);
      const clickedInsideRoot = !!(rootEl && rootEl.contains(event.target));
      const clickedInsidePortal = !!(portalEl && portalEl.contains(event.target));
      if (!clickedInsideRoot && !clickedInsidePortal) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [instanceId]);

  // Compute dropdown placement and max height based on viewport space
  const updatePlacementAndSize = () => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const margin = 8;
    const desiredMax = 300;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;

    const shouldOpenUp = spaceBelow < desiredMax && spaceAbove > spaceBelow;
    setPlacement(shouldOpenUp ? 'up' : 'down');

    const available = (shouldOpenUp ? spaceAbove : spaceBelow) - margin;
    const clamped = Math.max(160, Math.min(desiredMax, available));
    setComputedMaxHeight(clamped);

    // Compute fixed positioning to escape overflow clipping containers
    const left = Math.max(8, rect.left);
    const width = Math.min(window.innerWidth - 16, rect.width);
    if (shouldOpenUp) {
      const bottom = Math.max(8, window.innerHeight - rect.top);
      setDropdownRectStyle({ position: 'fixed', left, width, right: 'auto', top: 'auto', bottom });
    } else {
      const top = Math.max(8, rect.bottom);
      setDropdownRectStyle({ position: 'fixed', left, width, right: 'auto', top, bottom: 'auto' });
    }
  };

  // Recalculate when opening and on resize/scroll while open
  useEffect(() => {
    if (portalRoot == null) {
      setPortalRoot(document.body);
    }
    // advertise open state globally to avoid unintended outside-closes
    if (isOpen) {
      try { document.body.setAttribute('data-custom-select-open', 'true'); } catch (_) { }
    } else {
      try { document.body.removeAttribute('data-custom-select-open'); } catch (_) { }
    }
    if (!isOpen) return;
    updatePlacementAndSize();

    const handleWindowChange = () => updatePlacementAndSize();
    window.addEventListener('resize', handleWindowChange, { passive: true });
    window.addEventListener('scroll', handleWindowChange, { passive: true });
    // capture scrolls from any scrollable ancestor (like overlay panel content)
    document.addEventListener('scroll', handleWindowChange, { passive: true, capture: true });
    return () => {
      window.removeEventListener('resize', handleWindowChange);
      window.removeEventListener('scroll', handleWindowChange);
      document.removeEventListener('scroll', handleWindowChange, { capture: true });
      try { document.body.removeAttribute('data-custom-select-open'); } catch (_) { }
    };
  }, [isOpen, portalRoot]);

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
        ref={headerRef}
        className={`${styles.selectHeader} ${isOpen ? styles.open : ''}`}
        onClick={toggleDropdown}
      >
        <span className={styles.displayValue}>
          {getDisplayValue()}
        </span>
        <span className={styles.arrow}>▼</span>
      </div>

      {isOpen && portalRoot && createPortal(
        <div
          className={`${styles.dropdown} ${placement === 'up' ? styles.dropdownUp : styles.dropdownDown}`}
          style={{ maxHeight: computedMaxHeight, ...dropdownRectStyle }}
          data-select-owner={instanceId}
        >
          {isSearchable && (
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              // Avoid auto focusing on mobile to prevent viewport jump/scroll to top
              // autoFocus
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
        </div>,
        portalRoot
      )}
    </div>
  );
};

export default CustomSelect;
