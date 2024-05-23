import React, { ReactNode } from "react";
import Header from "../Header/Header";
import { links } from "../../constants/links";
// import Footer from "../Footer/Footer";
import styles from "./PageTemplate.module.css";


type PageTemplateProps = {
  children: ReactNode;
  logoPath: string;
};

const PageTemplate = ({ children, logoPath = "../components/assets/logo.jpg"}: PageTemplateProps) => {
  return (
    <div className={styles.container}>
      <Header logoPath ={logoPath} links={links} />
      <div className={styles.content}>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default PageTemplate;