import React from "react";
import Nav from "./components/Nav";
import Searchbar from "./components/Searchbar";
import './index.css';
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";

const App =() =>{
    return(
        <Router>
            <div className="app">
                <Nav/>
                    <Routes>
                        <Route path="/" element={ <Menu/> }/>
                        <Route path="/products/:id" element={ <Details/> }/>
                    </Routes>
            </div>
        </Router>
    )
}
export default App;