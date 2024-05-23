import React, {useState} from 'react'
import styles from "./Header.module.css"
import Link from "next/link";
import burgerBtn from "../../assets/hamburger-menu-icon.svg";
import { useRouter } from "next/router"
import { links } from "../../constants/links"


type LinkType = {
    id: number;
    title: string;
    href: string;
  };
  
  type HeaderProps = {
    logoPath: string;
    links: LinkType[];
  };

  const Header = ({ logoPath, links }: HeaderProps) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className={styles.container}>
        <div className={styles.logo}>
<img src={logoPath} alt="logo_img" />
        </div>
      
      <nav>
        <ul className={styles.links}>
          {links.map((link) => {
            return (
              <a className={styles.aLink} href={link.href} key={link.id}>
                {link.title}
              </a>
            );
          })}
        </ul>
      </nav>

      <button
        onClick={() => setMobileMenuOpen((prevState) => !prevState)}
        className={styles.burgerBtn}
      >
        <img src={burgerBtn.src} alt="burgerBTN" />
      </button>

      {/* <div
        className={`${styles.mobileMenu}  ${
          isMobileMenuOpen && styles.mobileMenuOpen
        }`}
      >
        <ul className={styles.mobileLinks}>
          {links.map((link) => {
            return (
              <a href={link.href} key={link.id}>
                {link.title}
              </a>
            );
          })}
        </ul>
      </div> */}

    </div>
  )
}

export default Header