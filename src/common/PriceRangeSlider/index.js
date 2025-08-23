"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.scss';

const PriceRangeSlider = ({
  min = 0,
  max = 10000,
  step = 100,
  value = [min, max],
  onChange,
  className = "",
  disabled = false,
  showLabels = true,
  showValues = true,
  currency = "₹",
  formatValue = null
}) => {
  // Debug logging
  console.log('PriceRangeSlider props:', { min, max, step, value, onChange: !!onChange, disabled, className });
  
  const [localValue, setLocalValue] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const [activeThumb, setActiveThumb] = useState(null);
  const sliderRef = useRef(null);
  const minThumbRef = useRef(null);
  const maxThumbRef = useRef(null);

  // Update local state when value prop changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Calculate percentage positions
  const getPercentage = (value) => {
    return ((value - min) / (max - min)) * 100;
  };

  const getValueFromPercentage = (percentage) => {
    return Math.round((percentage / 100) * (max - min) + min);
  };

  // Handle thumb drag start
  const handleMouseDown = (e, thumb) => {
    if (disabled) return;
    
    e.preventDefault();
    setIsDragging(true);
    setActiveThumb(thumb);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Handle mouse movement
  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const newValue = getValueFromPercentage(percentage);

    if (activeThumb === 'min') {
      const newMinValue = Math.min(newValue, localValue[1] - step);
      const updatedValue = [newMinValue, localValue[1]];
      setLocalValue(updatedValue);
      // Call onChange immediately for real-time updates
      if (onChange) {
        console.log('Calling onChange with min thumb:', updatedValue); // Debug log
        onChange(updatedValue);
      }
    } else {
      const newMaxValue = Math.max(newValue, localValue[0] + step);
      const updatedValue = [localValue[0], newMaxValue];
      setLocalValue(updatedValue);
      // Call onChange immediately for real-time updates
      if (onChange) {
        console.log('Calling onChange with max thumb:', updatedValue); // Debug log
        onChange(updatedValue);
      }
    }
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
    setActiveThumb(null);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Handle double click on thumb for immediate positioning
  const handleThumbDoubleClick = (e, thumb) => {
    if (disabled || !sliderRef.current) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    // Get the exact position where the user double-clicked
    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    const newValue = getValueFromPercentage(percentage);

    console.log(`Double-click on ${thumb} thumb:`, { clickX, percentage, newValue });

    // Immediately update the value without any constraints for double-click
    if (thumb === 'min') {
      // For double-click, allow more freedom but still respect basic bounds
      const newMinValue = Math.max(min, Math.min(newValue, localValue[1] - step));
      const updatedValue = [newMinValue, localValue[1]];
      setLocalValue(updatedValue);
      if (onChange) {
        console.log('Calling onChange with min thumb double-click:', updatedValue);
        onChange(updatedValue);
      }
    } else {
      // For double-click, allow more freedom but still respect basic bounds
      const newMaxValue = Math.min(max, Math.max(newValue, localValue[0] + step));
      const updatedValue = [localValue[0], newMaxValue];
      setLocalValue(updatedValue);
      if (onChange) {
        console.log('Calling onChange with max thumb double-click:', updatedValue);
        onChange(updatedValue);
      }
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e, thumb) => {
    if (disabled) return;
    
    e.preventDefault();
    setIsDragging(true);
    setActiveThumb(thumb);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
    const newValue = getValueFromPercentage(percentage);

    if (activeThumb === 'min') {
      const newMinValue = Math.min(newValue, localValue[1] - step);
      const updatedValue = [newMinValue, localValue[1]];
      setLocalValue(updatedValue);
      // Call onChange immediately for real-time updates
      if (onChange) {
        console.log('Calling onChange with min thumb (touch):', updatedValue); // Debug log
        onChange(updatedValue);
      }
    } else {
      const newMaxValue = Math.max(newValue, localValue[0] + step);
      const updatedValue = [localValue[0], newMaxValue];
      setLocalValue(updatedValue);
      // Call onChange immediately for real-time updates
      if (onChange) {
        console.log('Calling onChange with max thumb (touch):', updatedValue); // Debug log
        onChange(updatedValue);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setActiveThumb(null);
  };

  // Handle track click for direct positioning
  const handleTrackClick = (e) => {
    if (disabled || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const newValue = getValueFromPercentage(percentage);
    
    // Determine which thumb to move based on which is closer
    const distanceToMin = Math.abs(newValue - localValue[0]);
    const distanceToMax = Math.abs(newValue - localValue[1]);
    
    if (distanceToMin < distanceToMax) {
      // Move min thumb
      const newMinValue = Math.min(newValue, localValue[1] - step);
      const updatedValue = [newMinValue, localValue[1]];
      setLocalValue(updatedValue);
      if (onChange) {
        console.log('Calling onChange with track click (min):', updatedValue); // Debug log
        onChange(updatedValue);
      }
    } else {
      // Move max thumb
      const newMaxValue = Math.max(newValue, localValue[0] + step);
      const updatedValue = [localValue[0], newMaxValue];
      setLocalValue(updatedValue);
      if (onChange) {
        console.log('Calling onChange with track click (max):', updatedValue); // Debug log
        onChange(updatedValue);
      }
    }
  };

  // Handle track double-click for immediate positioning
  const handleTrackDoubleClick = (e) => {
    if (disabled || !sliderRef.current) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    const newValue = getValueFromPercentage(percentage);
    
    console.log('Track double-click:', { clickX, percentage, newValue });
    
    // Determine which thumb to move based on which is closer
    const distanceToMin = Math.abs(newValue - localValue[0]);
    const distanceToMax = Math.abs(newValue - localValue[1]);
    
    if (distanceToMin < distanceToMax) {
      // Move min thumb
      const newMinValue = Math.min(newValue, localValue[1] - step);
      const updatedValue = [newMinValue, localValue[1]];
      setLocalValue(updatedValue);
      if (onChange) {
        console.log('Calling onChange with track double-click (min):', updatedValue);
        onChange(updatedValue);
      }
    } else {
      // Move max thumb
      const newMaxValue = Math.max(newValue, localValue[0] + step);
      const updatedValue = [localValue[0], newMaxValue];
      setLocalValue(updatedValue);
      if (onChange) {
        console.log('Calling onChange with track double-click (max):', updatedValue);
        onChange(updatedValue);
      }
    }
  };

  // Format display value
  const formatDisplayValue = (val) => {
    if (formatValue) return formatValue(val);
    return `${currency}${val.toLocaleString()}`;
  };

  // Calculate track styles
  const trackStyle = {
    background: `linear-gradient(to right, 
      #e1e5e9 0%, 
      #e1e5e9 ${getPercentage(localValue[0])}%, 
      #EF3447 ${getPercentage(localValue[0])}%, 
      #EF3447 ${getPercentage(localValue[1])}%, 
      #e1e5e9 ${getPercentage(localValue[1])}%, 
      #e1e5e9 100%)`
  };

  return (
    <div className={`${styles.priceRangeSlider} ${className} ${disabled ? styles.disabled : ''}`}>
      {showLabels && (
        <div className={styles.labels}>
          <span className={styles.label}>Price Range</span>
          {showValues && (
            <span className={styles.values}>
              {formatDisplayValue(localValue[0])} - {formatDisplayValue(localValue[1])}
            </span>
          )}
        </div>
      )}
      
      <div className={styles.sliderContainer}>
        <div 
          ref={sliderRef}
          className={styles.sliderTrack}
          style={trackStyle}
          onClick={handleTrackClick}
          onDoubleClick={handleTrackDoubleClick}
        >
          <div 
            ref={minThumbRef}
            className={`${styles.sliderThumb} ${styles.minThumb} ${activeThumb === 'min' ? styles.active : ''}`}
            style={{ left: `${getPercentage(localValue[0])}%` }}
            onMouseDown={(e) => handleMouseDown(e, 'min')}
            onDoubleClick={(e) => handleThumbDoubleClick(e, 'min')}
            onTouchStart={(e) => handleTouchStart(e, 'min')}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
          <div 
            ref={maxThumbRef}
            className={`${styles.sliderThumb} ${styles.maxThumb} ${activeThumb === 'max' ? styles.active : ''}`}
            style={{ left: `${getPercentage(localValue[1])}%` }}
            onMouseDown={(e) => handleMouseDown(e, 'max')}
            onDoubleClick={(e) => handleThumbDoubleClick(e, 'max')}
            onTouchStart={(e) => handleTouchStart(e, 'max')}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </div>
        
        <div className={styles.rangeLabels}>
          <span className={styles.rangeLabel}>{formatDisplayValue(min)}</span>
          <span className={styles.rangeLabel}>{formatDisplayValue(max)}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
