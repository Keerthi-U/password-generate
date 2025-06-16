export default function PasswordOutput({password, copyToClipboard}) {
if(!password) return null;



return(
    <>
    <h2>{password}</h2>
    <button onClick={copyToClipboard}>Copy to clipboard</button>
    </>
)
}