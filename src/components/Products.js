import React from "react";
import ProductOne from "./ProductOne";
import {useState, useEffect} from 'react';
import json from "../api/products.json";

const Products = () => {
    let [products,setProducts] = useState([]);
    const loadData=[...json];
    products=loadData;

    useEffect(()=>{
        setProducts(products);
    },[]);

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8 mx-8">Products</h1>
            <div className="grid grid-cols-5 my-8 mx-8 gap-24">
               {
                   products.map(product => <ProductOne key={product.name} data={product}/>)
               }

            </div>
            
        </div>
    )
}

export default Products;
