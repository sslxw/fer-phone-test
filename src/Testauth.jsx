import {useState} from 'react';
import {auth} from "./firebase.js";
import { RecaptchaVerifier, signInWithPhoneNumber, signOut} from 'firebase/auth';

function Testauth() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [user, setUser] = useState(null);
    
    function handleInput(event) {
        setPhone(event.target.value);
      }
    
      function handleOtp(event) {
        setOtp(event.target.value);
      }

    const sendOtp = async(e) => {
        e.preventDefault()
        try{
            let recaptchaVerifier = await new RecaptchaVerifier("recaptcha-container", {}, auth)
            let confirmation = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
            console.log(confirm);
            setUser(confirmation);
        }catch(err) {
            console.log(err)
        }
    }

    const verifyOtp = async(e) => {
        e.preventDefault();
        await user.confirm(otp)
    }

    return ( 
     <>
        <form onSubmit={sendOtp}>
          <input 
          onChange={handleInput}
          type='text'
          value={phone}></input>
          <button>sendOtp</button>
        </form>
        <form onSubmit={verifyOtp}>
          <input 
          onChange={handleOtp}
          type='text'
          value={otp}></input>
          <button>confirmOtp</button>
          <div id="recaptcha-container">

          </div>
        </form>
     </>   
    );
}

export default Testauth;