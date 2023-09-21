import React,{ useState } from 'react'
import "./style.css"
import MenuCard from './MenuCard'


import Menu from './MenuApi'
const Restaurant = () => {


    const [menuData, setMenuData] = useState(Menu);
  
  return (
   <>
    <MenuCard menuData={menuData} />   
    </>
  )
}

export default Restaurant