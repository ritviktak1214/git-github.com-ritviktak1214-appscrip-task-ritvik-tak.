const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "black",
      color: "white",
      padding: "10px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    section: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap", // Ensures wrapping on smaller screens
      gap: "20px",
    },
    contactSection: {
      flex: "1 1 300px", // Flexible layout with minimum width of 300px
    },
    linksSection: {
      flex: "1 1 300px",
      textAlign: "left",
    },
    heading: {
      marginBottom: "10px",
      fontSize: "16px",
      fontWeight: "bold",
    },
    text: {
      margin: "5px 0",
      fontSize: "14px",
    },
    footerBottom: {
      marginTop: "20px",
      fontSize: "12px",
    },
  };

  const responsiveStyles = `
    @media (max-width: 768px) {
      .footer-section {
        flex-direction: column;
        text-align: center;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <footer style={styles.footer}>
        <h2 style={styles.heading}>BE THE FIRST TO KNOW</h2>
        <div style={styles.section} className="footer-section">
          <div style={styles.contactSection}>
            <h3 style={styles.heading}>Contact Me</h3>
            <p style={styles.text}>
              <span>8000183583</span>
              <br />
              thakur.ritvik9440@gmail.com
            </p>
            <h3 style={styles.heading}>CURRENCY</h3>
            <p style={styles.text}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>

          <div style={styles.linksSection}>
            <h3 style={styles.heading}>METTA MUSE</h3>
            <p style={styles.text}>About Us</p>
            <p style={styles.text}>Stories</p>
            <p style={styles.text}>Artisans</p>
            <p style={styles.text}>Boutiques</p>
            <p style={styles.text}>Contact Us</p>
            <p style={styles.text}>EU Compliance Docs</p>
          </div>

          <div style={styles.linksSection}>
            <h3 style={styles.heading}>QUICK LINKS</h3>
            <p style={styles.text}>Orders & Shipping</p>
            <p style={styles.text}>Join/Login as a Seller</p>
            <p style={styles.text}>Payments & Refunds</p>
            <p style={styles.text}>Returns & Refunds</p>
            <p style={styles.text}>FAQs</p>
            <p style={styles.text}>Privacy Policy</p>
            <p style={styles.text}>Terms & Conditions</p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2024 My Website</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
