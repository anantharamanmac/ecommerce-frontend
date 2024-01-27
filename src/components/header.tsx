import {Link} from 'react-router-dom';
import {FaSearch , FaShoppingBag, FaSignInAlt ,FaSignOutAlt ,FaUser} from "react-icons/fa";
import { useState } from 'react';

const user = {_id:"dsd",role: "admin"};



const Header = () => {

const [isOpen , setIsOpen] = useState<boolean>(false)


  return(
    <nav className="header">
      <Link to ={"/"}>Home</Link>
      <Link to ={"/search"}>
        <FaSearch />
      </Link>
      <Link to ={"/cart"}>
        <FaShoppingBag />
      </Link>

      {
        user?._id?(
          <>
          <button onClick={()=> setIsOpen((prev) =>!prev)}>
            <FaUser />
          </button>

          <dialog open ={isOpen}>
            <div>
              {
                user.role ==="admin" && (
                  <Link to ="/admin/dashboard">Admin</Link>
                  )
              }
              
              <Link to ="/oders"> Orders </Link>
             <button>
              <FaSignInAlt />
             </button>


            </div>
          </dialog>

          </>
        ) :   <Link to ={"/login"}>
        <FaSignInAlt />
      </Link>
      }
   </nav>
   );
;}

export default Header ;