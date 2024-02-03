import  { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
// import { useDispatch } from "react-redux";
// import { getUser, useLoginMutation } from "../redux/api/userAPI";
const Login = () => {

    // const dispatch = useDispatch();
    const [gender, setGender] = useState("");
    const [date, setDate] = useState("");
    //   const [login] = useLoginMutation();
  return (
    <div className='login'> 
     <main>
        <h1 className='heading'>Login</h1>
        <div>
            <label >Name</label>
            < input type="text" name=''/>
        </div>
        <div>
            <label >Gender</label>
            <select value={gender}
             onChange={(e)=>setGender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>


             </select>
        </div>


        <div>
            <label >Date of birth</label>
           <input type="date" value={date} onChange={e=> setDate(e.target.value)}/>
        </div>

        <div>
          <p>Already Signed in </p>
          <button>
            <FcGoogle/><span>Sign in with Google</span>
          </button>

        </div>


     </main>
    
    
    </div>
  )
}

export default Login
