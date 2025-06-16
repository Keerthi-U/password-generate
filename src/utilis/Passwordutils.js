
export const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
export const NUMBERS = '0123456789';
export const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function generatePassword({length , upper ,lower ,number , symbols}) {

let charset = '';
if(upper) charset += UPPERCASE; 
if(lower) charset += LOWERCASE;
if(number) charset+= NUMBERS;
if(symbols) charset+= SYMBOLS;
 if (!charset) return '';

let result = '';

console.log("charset" , charset);
console.log("upper" , upper);
console.log("LOWER  " , lower);
console.log("charsetlength  " , charset.length);

for(let i = 0 ; i < length; i++) {
    const index = Math.floor(Math.random() * charset.length) 
    console.log("index" ,index);
    
     result += charset[index];

}

console.log("result" , result);


  return  result;
}

