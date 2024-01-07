import React from 'react'
import Products from './components/products/Products';

import Navbar from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Main = () => {
  return (
 <>
 <Router>
        <Navbar/>
    <Products/>
   
     </Router>
     </>
   
  )
}

export default Main
