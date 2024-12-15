import React from "react";

const Filter = () => {
  const styles = {
    filter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#f8f8f8",
      border: "1px solid #ddd",
      borderRadius: "5px",
      margin: "20px 0",
    },
    count: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    select: {
      padding: "5px 10px",
      fontSize: "14px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      outline: "none",
      backgroundColor: "#ffffff", // Set background color to white
      color: "#333", // Text color for better readability
      appearance: "none", // Removes default OS styling for select dropdown
      cursor: "pointer",
    },
  };

  const responsiveStyles = `
    @media (max-width: 768px) {
      .filter-bar {
        flex-direction: column; /* Stack items vertically */
        align-items: stretch; /* Make items span the full width */
        text-align: center;
      }

      .filter-bar select {
        margin-top: 10px; /* Add space between the count and select dropdown */
      }
    }

    @media (min-width: 769px) {
      .filter-bar {
        flex-direction: row; /* Keep items in a row */
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <div style={styles.filter} className="filter-bar">
        <div style={styles.count}>3425</div>
        <select style={styles.select}>
          <option>RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE-HIGH-LOW</option>
          <option>PRICE:LOW TO HIGH</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
