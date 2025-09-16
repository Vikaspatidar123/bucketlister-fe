"use client";
import React, { useState, useEffect } from "react";
import { Range } from "react-range";
import styles from "./style.module.scss";

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
  formatValue = null,
}) => {
  const [localValue, setLocalValue] = useState(value);

  // Update local state when value prop changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Format display value
  const formatDisplayValue = (val) => {
    if (formatValue) return formatValue(val);
    return `${currency}${val.toLocaleString()}`;
  };

  const handleChange = (newValue) => {
    setLocalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div
      className={`${styles.priceRangeSlider} ${className} ${disabled ? styles.disabled : ""}`}
      data-price-slider="true"
      onClick={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
    >
      {showLabels && (
        <div className={styles.labels}>
          <span className={styles.label}>Price Range</span>
          {showValues && (
            <span className={styles.values}>
              {formatDisplayValue(localValue[0])} -{" "}
              {formatDisplayValue(localValue[1])}
            </span>
          )}
        </div>
      )}

      <div className={styles.sliderContainer}>
        <Range
          step={step}
          min={min}
          max={max}
          values={localValue}
          onChange={handleChange}
          disabled={disabled}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className={styles.sliderTrack}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                backgroundColor: "#e1e5e9",
                borderRadius: "3px",
                position: "relative",
              }}
            >
              <div
                className={styles.sliderTrackFill}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: `${((localValue[1] - localValue[0]) / (max - min)) * 100}%`,
                  left: `${((localValue[0] - min) / (max - min)) * 100}%`,
                  backgroundColor: "#EF3447",
                  borderRadius: "3px",
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              className={`${styles.sliderThumb} ${index === 0 ? styles.minThumb : styles.maxThumb}`}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                backgroundColor: "white",
                border: "3px solid #EF3447",
                borderRadius: "50%",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                cursor: "grab",
                outline: "none",
              }}
            />
          )}
        />

        <div className={styles.rangeLabels}>
          <span className={styles.rangeLabel}>{formatDisplayValue(min)}</span>
          <span className={styles.rangeLabel}>{formatDisplayValue(max)}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
