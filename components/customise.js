"use client";
import React, { useState } from "react";

const Customise = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  const styles = {
    container: {
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflow: "hidden",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px",
      backgroundColor: "#f9f9f9",
      borderBottom: "1px solid #ddd",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "14px",
    },
    content: {
      padding: "10px 15px",
      fontSize: "14px",
      color: "#666",
    },
    checkbox: {
      margin: "15px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.checkbox}>
        <label>
          <input type="checkbox" /> CUSTOMIZABLE
        </label>
      </div>
      {sections.map((section) => (
        <div key={section}>
          <div style={styles.header} onClick={() => toggleSection(section)}>
            {section}
            <span>{openSections[section] ? "▲" : "▼"}</span>
          </div>
          {openSections[section] && <div style={styles.content}>All</div>}
        </div>
      ))}
    </div>
  );
};

export default Customise;
