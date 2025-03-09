import React from "react";
import Navbar from "../navigators/navbar";
import Footer from "../navigators/footer";

const Page = ({ children }) => {
  const maincss = { width: "100%", position: "relative", backgroundColor: "var(--color-foreground)", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "var(--pixel-100) 0 0", boxSizing: "border-box" };
  return (
    <main style={maincss}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Page;
