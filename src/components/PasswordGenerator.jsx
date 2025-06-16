import { use, useState } from "react"
import PasswordOption from "./PasswordOption";

import generatePassword from "../utilis/Passwordutils";
import PasswordOutput from "./PasswordOutput";

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
            alert('Select at least one character type!');
            return
    }
setPassword(newpass)
}

const copyToClipboard =() => {
    navigator.clipboard.writeText(password)
}


return (
  
    <div className="password-generator-wrapper">
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