import React from "react";
import { Link } from "react-router-dom";

const Allproduct = ({datas,find}) =>{

    const addItemHandler =( id ) =>{
        console.log(id);
    }
    return(
        <div className="allproduct">
            <h2>All Products</h2>
            <div className="allproductItem">
            {
                datas && datas.filter((item) =>{
                    if(item ===''){
                        return item;
                    } else if(item.title.toLowerCase().includes(find.toLowerCase())){
                        return item;
                    }
                }).map((eachItem) =>{
                    return(
                        
                            <div className="eachItem" key={eachItem.id}>
                                <Link to={`/products/${eachItem.id}`}>
                                <img className="imgController" src={eachItem.image}/>
                                <p>{eachItem.title}</p>
                                <p>$ {eachItem.price}</p>
                                </Link>
                                <div>
                                    <button onClick={ () =>addItemHandler(eachItem.id) } className="addBtn">Add to cart</button>
                                </div>
                            </div>
                    )
                })
            }
            </div>
        </div>
    );
}
export default Allproduct;