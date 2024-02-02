
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Shipping = () => {

    const navigate =useNavigate()

  const [shippingInfo,setShippingInfo]=useState({
    address:"",
    city:"",
    state:"",
    country:"",
    pinCode:"",
  });
    
const changeHandler =
 (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>
)=> {
    setShippingInfo(prev =>({...prev, [e.target.name]:e.target.value}));
} 
   



  return (
    <div className="shipping">
     <button className="back-btn" onClick={()=>navigate("/cart")}>
       <BiArrowBack />
     </button>

<form >
  <h1>SHIPPING ADDRESS</h1>

  <input 
  required
  type="text"
  placeholder="Address" 
  name="address" 
  value = {shippingInfo.address}
  onChange={changeHandler}
  />

{/* city */}
<input 
  required
  type="text"
  placeholder="City" 
  name="city" 
  value = {shippingInfo.city}
  onChange={changeHandler}
  />

  {/* state */}
<input 
  required
  type="text"
  placeholder="State" 
  name="state" 
  value = {shippingInfo.state}
  onChange={changeHandler}
  />

{/* country */}
<input 
  required
  type="text"
  placeholder="Country" 
  name="country" 
  value = {shippingInfo.country}
  onChange={changeHandler}
  />

 <select name="country" required value={shippingInfo.country} 
 onChange={changeHandler}>

<option value="">Choose Country</option>
<option value="india">India</option>
<option value="usa">USA</option>
<option value="dubai">Dubai</option>
 </select>

{/* pinCode */}
<input 
  required
  type="number"
  placeholder="Pin Code" 
  name="pinCode" 
  value = {shippingInfo.pinCode}
  onChange={changeHandler}
  />


<button type="submit">Pay Now</button>

</form>

    </div>
  )
}

export default Shipping
