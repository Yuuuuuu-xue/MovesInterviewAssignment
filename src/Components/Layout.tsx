import Footer from "./Footer";
import React from "react";


interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({  children }) => {
  return (
    <div className="root">
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;