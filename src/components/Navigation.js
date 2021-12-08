import { Link } from 'react-router-dom'


 const Navigation = () => {
     const cartStyle = {
         background : '#F59E0D',
         display : 'flex',
         padding : '6px 12px',
         borderRadius : '50px',
     }
    return (
        <>
           <nav className="container mx-auto flex items-center justify-between py-4 px-16">

                 <Link to="/">
                        <img style={{height : 50}} src="/images/logo.png" alt="logo" />
                 </Link>
                 <ul className="flex items-center">
                     <li><Link to="/">Home</Link></li>
                     <li className="ml-6 hover : "><Link to="/products">Products</Link></li>
                     <li className="ml-6">
                         <Link to="/cart">
                            <div style = {cartStyle}>
                                <span className="mr-2" >10</span>
                                <img src="/images/cart.png" alt="cart-icon" />
                            </div> 
                         </Link>
                     </li>
                 </ul>

           </nav>
        </>
        
    )
}


export default Navigation;