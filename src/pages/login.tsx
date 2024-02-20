import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../firebase';

const Login = () => {
    const [gender, setGender] = useState("");
    const [date, setDate] = useState("");

    const loginHandler = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const { user } = await signInWithPopup(auth, provider);
    
            console.log({
                name: user.displayName!,
                email: user.email!,
                photo: user.photoURL!,
                gender,
                role: "user",
                dob: date,
                _id: user.uid,
            });
        } catch (error) {
           
            console.error("Sign In Failed:");
            toast.error("Sign In Failed");
        }
    };
  
    return (
        <div className='login'> 
            <main>
                <h1 className='heading'>Login</h1>
                <div>
                    <label>Name</label>
                    <input type="text" name=''/>
                </div>
                <div>
                    <label>Gender</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label>Date of birth</label>
                    <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
                </div>
                <div>
                    <p>Already Signed in </p>
                    <button onClick={loginHandler}>
                        <FcGoogle/><span>Sign in with Google</span>
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
