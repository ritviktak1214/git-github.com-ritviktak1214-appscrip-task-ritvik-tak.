import Head from "next/head";
import Header from "../../components/header";
import Filter from "../../components/filter";
import ProductList from "../../components/productlist";
import Customise from "../../components/customise";
import Footer from "../../components/footer";

export default function Home() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      backgroundColor: "#ffffff", // White background
      color: "#000000", // Ensure text is visible on a white background
      minHeight: "100vh", // Ensures background covers the full viewport height
    },
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    tagline: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      margin: "20px 0",
    },
    spanmsg: {
      display: "block",
      margin: "10px auto 20px",
      fontSize: "16px",
      lineHeight: "1.6",
      textAlign: "center",
      maxWidth: "800px",
    },
    filter: {
      margin: "20px 0",
    },
  };

  const responsiveStyles = `
    @media (max-width: 768px) {
      h1 {
        font-size: 18px;
      }
      .spanmsg {
        font-size: 14px;
      }
    }

    @media (min-width: 769px) {
      h1 {
        font-size: 32px;
      }
      .spanmsg {
        font-size: 16px;
      }
    }
  `;

  return (
    <div style={styles.page}>
      <Head>
        <title>My Product Page</title>
        <meta name="description" content="Welcome to my product page" />
        <meta property="og:title" content="My Product Page" />
        <meta
          property="og:description"
          content="Check out our amazing products"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{responsiveStyles}</style>
      </Head>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.tagline} id="tagline">
          DISCOVER OUR PRODUCTS
        </h1>
        <span style={styles.spanmsg}>
          Discover our product and unlock a world of possibilities where quality
          meets innovation. Designed with your needs in mind, our product offers
          unmatched performance, reliability, and style. Whether you're seeking
          to simplify your life, elevate your experiences, or explore new
          opportunities, our product is here to inspire and empower you.
          Experience the difference and see why discovery begins with us!
        </span>
        <div style={styles.filter}>
          <Filter />
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <Customise />
          </div>
          <div>
            <ProductList />
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
