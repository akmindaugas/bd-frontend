import React from 'react'
import Header from "../components/Header/Header"
import styles from "../styles/Home.module.css"
import {links} from "../constants/links"

const index = () => {
  return (


    <div>
      <Header logo="My Logo" links={links} />
    </div>
  )
}

export default index