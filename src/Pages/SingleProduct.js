import React from 'react';
import {useState} from "react";
import {useParams} from "react-router-dom";

const SingleProduct = () => {
    //const [product,setProduct]=useState({});
    const params = useParams();
    console.log(params);

    return (
        <div className="container mx-auto mt-12">
            <button className="mb=12 font-bold">Back</button>
            <div className="flex">
                <img src="/images/peproni.png" alt="pizza" />
                <div className="ml-16">
                    <h1 className="text-xl font-bold">Havana Special</h1>
                    <div className="bg-gray-300 py-1 rounded-full text-md text-center px-">small</div>
                    <div className="fomt-bold mt-2">Rs.400</div>
                    <button className="bg-yellow-500 hover:bg-yellow-800 py-1 px-8 rounded-full text-white font-bold mt-4 ">Add to cart</button>


                </div>

            </div>
        </div>
    )
}

export default SingleProduct;
