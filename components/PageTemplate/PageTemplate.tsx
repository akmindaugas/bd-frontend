import React, { ReactNode } from "react";
import Header from "../Header/Header";
import styles from "./PageTemplate.module.css";
import { links } from "../../constants/links";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={styles.wrapper}>
      <Header logo={"FORUM"} links={links} />
      <div className={styles.content}>{children}</div>
    
    </div>
  );
};

export default PageTemplate;