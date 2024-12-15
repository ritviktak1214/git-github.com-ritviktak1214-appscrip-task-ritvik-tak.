"use client";
import React, { useState } from "react";

const ProductList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    list: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "auto",
      maxHeight: "200px",
      objectFit: "contain",
      marginBottom: "10px",
    },
    itemTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    price: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "10px",
    },
    description: {
      fontSize: "14px",
      color: "#777",
      lineHeight: "1.5",
    },
    toggle: {
      color: "blue",
      cursor: "pointer",
      textDecoration: "underline",
    },
  };

  const responsiveStyles = `
    @media (max-width: 768px) {
      h1 {
        font-size: 20px;
      }
      .list-item {
        padding: 10px;
      }
      .item-title {
        font-size: 16px;
      }
      .description {
        font-size: 12px;
      }
    }
  `;

  const TruncatedDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const words = description.split(" ");
    const isLong = words.length > 20;

    const handleToggle = () => setIsExpanded(!isExpanded);

    return (
      <p style={styles.description} className="description">
        {isExpanded || !isLong
          ? description
          : `${words.slice(0, 20).join(" ")}... `}
        {isLong && (
          <span style={styles.toggle} onClick={handleToggle} className="toggle">
            {isExpanded ? "See Less" : "See More"}
          </span>
        )}
      </p>
    );
  };

  return (
    <div style={styles.container}>
      <style>{responsiveStyles}</style>
      <h1 style={styles.title}>Product List</h1>
      <ul style={styles.list}>
        {data.map((item) => (
          <li key={item.id} style={styles.listItem} className="list-item">
            <img src={item.image} alt={item.title} style={styles.image} />
            <div style={styles.itemTitle} className="item-title">
              {item.title}
            </div>
            <div style={styles.price}>${item.price}</div>
            <TruncatedDescription description={item.description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
