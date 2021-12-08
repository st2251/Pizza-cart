import {Link} from "react-router-dom";

const ProductOne = (props) => {
    
    const {data} = props;


    return (
       <Link to ={`/products/${data.name}`}>
             <div>
                    <img className="w : 100%" src={data.image} alt="pizza" />
                    <div className="text-center">
                            <h2 className="text-lg font-bold py-2">{data.name}</h2>
                            <span className="bg-gray-300 py-1 rounded-full text-sm px-4">{data.size}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                            <span>Rs.{data.price}</span>
                            <button className="bg-yellow-500 hover:bg-yellow-800 text-white py-1 px-4 rounded-full font-bold">ADD</button>
                    </div>
             </div>
       </Link>

    )
}

export default ProductOne;
