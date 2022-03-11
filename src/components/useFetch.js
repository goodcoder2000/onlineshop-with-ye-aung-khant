import React,{ useState, useEffect} from "react";

const useFetch = (url) =>{
    const [ datas, setDatas ] = useState([]);

    useEffect(() =>{
        const gettingData = async () =>{
            const res = await fetch(url);
            const result = await res.json();
            setDatas(result);
        }
        gettingData();
    }, [])
    return { datas }
}
export default useFetch;