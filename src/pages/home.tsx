
import toast from "react-hot-toast";

import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";



const Home = () => {
const addToCartHandler =()=>{

};

 
 return <div className="home">


    <section></section>
    <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
     <ProductCard 
     productId="asdsf"
     name ="macbook"
     price={45764}
     stock={566}
     handler = {addToCartHandler}
     photo="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71jG+e7roXL._SX522_.jpg"
     />


      </main>
  </div>
  
}

export default Home
