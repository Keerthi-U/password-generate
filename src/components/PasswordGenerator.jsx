import { use, useState } from "react"
import PasswordOption from "./PasswordOption";

import generatePassword from "../utilis/Passwordutils";
import PasswordOutput from "./PasswordOutput";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
export default function PasswordGenerator(){
const [length, setLength] = useState(12);
const [includeUpper , setincludeUpper] = useState(true);
const [includeLower , setincludeLower] = useState(true);
const [includeNumber , setincludeNumber] = useState(true);
const [includeSymbols , setincludeSymbols] = useState(false);

const [password , setPassword] = useState('') 

function handleGenerate () {
    const newpass =  generatePassword({
        length,
        upper:includeUpper,
        lower:includeLower,
        number:includeNumber,
        symbols:includeSymbols

    });
    if(!newpass) {
          
             toast.error('Select at least one character type!.');
            return
    }
setPassword(newpass)
}

const copyToClipboard =() => {
    navigator.clipboard.writeText(password)
   .then(() => {
      toast.success('Password copied successfully!');
    })
    .catch(() => {
      toast.error('Failed to copy password.');
    });

}


return (
  
    <div className="password-generator-wrapper">
         <ToastContainer  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  pauseOnFocusLoss
  draggable
  pauseOnHover/>
<h3>PasswordGenerator</h3>
   <PasswordOption length = {length}  setLength={setLength}
   includeUpper ={includeUpper}  setincludeUpper={setincludeUpper}
   includeLower ={includeLower}  setincludeLower={setincludeLower}
   includeNumber ={includeNumber} setincludeNumber ={setincludeNumber}
   includeSymbols={includeSymbols}   setincludeSymbols ={setincludeSymbols}
 
   />
   <button onClick={handleGenerate}>Generate Password</button>
   <PasswordOutput  password ={password} copyToClipboard={copyToClipboard} />

    </div>
  
  
)
}