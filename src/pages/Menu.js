import React, { useState } from "react";
import Allproduct from "../components/Allproduct";
import Searchbar from "../components/Searchbar";
import useFetch from "../components/useFetch";

const Menu = () =>{
    const { datas }  = useFetch('https://fakestoreapi.com/products'); 
    const [ find, setFind] = useState('');

    const searchHandler = (event) =>{
        const result = event.target.value;
        setFind(result);
    }
        
    return(
        <div>
            <Searchbar searchHandler = {searchHandler}/>
            <Allproduct datas = {datas} find = {find} />
        </div>
    );
}
export default Menu;