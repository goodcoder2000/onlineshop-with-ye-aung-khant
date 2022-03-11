import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import '../index.css';

const Details = () =>{
    const { id } = useParams();
    const  { datas } = useFetch('https://fakestoreapi.com/products/'+ id);

    return(
        <div className="details">
            {
                datas && <div>
                    <h2>{datas.title}</h2>
                    <div className="detailsContainer">
                        <div className="left">
                            <img className="detailsImg" src={datas.image} />
                        </div>

                        <div className="right">
                            {/* <p>ratting {datas.rating[rate]}</p> */}
                            <p> price - $ {datas.price} </p>
                            <p>About this products <br/>
                            {datas.description}
                            </p>
                        </div>
                    </div>
            </div>
            }
    </div>
    )
}
export default Details;