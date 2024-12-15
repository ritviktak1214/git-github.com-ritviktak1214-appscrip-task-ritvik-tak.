import React, { useState } from "react";
import styles from "../styles/SortDropdown.module.css";

export default function SortDropdown({ onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSortChange) onSortChange(option);
  };

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownButton} onClick={toggleDropdown}>
        <span>{selectedOption}</span>
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option) => (
            <li
              key={option}
              className={`${styles.dropdownItem} ${
                selectedOption === option ? styles.selected : ""
              }`}
              onClick={() => handleSortChange(option)}
            >
              {selectedOption === option && <span className={styles.check}>✔</span>}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}