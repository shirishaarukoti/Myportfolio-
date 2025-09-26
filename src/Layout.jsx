import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header /> {/* Appears on all pages */}
      <main>{children}</main> {/* Page-specific content */}
      <Footer />
    </div>
  );
};

export default Layout;
