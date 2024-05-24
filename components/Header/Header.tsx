import React, {useState} from 'react'
import styles from "./Header.module.css"
import Link from "next/link"


type LinkType = {
  id: number;
  title: string;
  href: string;
};
type HeaderProps = {
  logo: string;
  links: LinkType[];
};

const Header = ({ logo, links }: HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className={styles.container}>
<Link className={styles.link} href="/">
</Link>
       
      <nav>
        <ul className={styles.links}>
          
          {links.map((link) => {
            return (
              <Link key={link.id} href={link.href}>
              {link.title}
            </Link>
              
            );
          })}
        </ul>
      </nav>
    
    </div>
  )
}

export default Header