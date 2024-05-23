import React from 'react'
import Header from "../components/Header/Header"
import styles from "../styles/Home.module.css"
import {links} from "../constants/links"
import PageTemplate from "../components/PageTemplate/PageTemplate"
import Link from "next/link";

const index = () => {
  return (
<PageTemplate logoPath = "../components/assets/logo.jpg">


<div className={styles.linkWrapper}>
        <Link href="/add-question">Add Question</Link>
      </div>

      {/* {games && <CardsWrapper games={games} />} */}



</PageTemplate>


  )
}

export default index