import React from "react";
import '../index.css';

const Searchbar = ({searchHandler}) =>{
    
    return(
        <div className="searchbar">
            <div>
                <input className="searchInput" 
                type='text' placeholder="Search products"
                onChange={ searchHandler }
                />
            </div>
        </div>
    );
}
export default Searchbar;