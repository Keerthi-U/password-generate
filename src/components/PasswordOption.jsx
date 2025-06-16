export default function PasswordOption({ 
  length, setLength ,
  
  includeUpper ,setincludeUpper,

  includeLower , setincludeLower,
  includeNumber ,setincludeNumber,
  includeSymbols, setincludeSymbols

}) {
  console.log("length:", length);

  return (
    <>
      <label>
        Password Length: {length}
        <input
          type="range"
          min="4"
          max="30"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </label>
      <label >
        <input type="checkbox"
        checked ={includeUpper}
        onClick={()=>setincludeUpper(!includeUpper) }
        />
          Include Uppercase
      </label>
       <label>
        <input type="checkbox" 
        checked = {includeLower}
        onClick={()=> setincludeLower(!includeLower)}
        
        />
          Include Lowercase
       </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumber}
            onChange={() => setincludeNumber(!includeNumber)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setincludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      
      
    </>
  );
}
