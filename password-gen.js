const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password="";

const greenButton = document.getElementById("generatePasswordButton")

const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");

const copiedEl=document.getElementById("copiedEl");
const copiedElv2=document.getElementById("copiedElv2");

const randomCharGen=()=>
{
        let randomChar= Math.floor(Math.random()*characters.length);
        return characters[randomChar];
}  

const passwordGenerator=()=>
{ 
    password=" ";
    for(let i=0;i<12;i++)
    {
        password+=randomCharGen();
    }

    return password;
}


greenButton.addEventListener('click', function()
{
    copiedElv2.textContent=""
    copiedEl.textContent=""
    passwordOne.textContent = passwordGenerator();
    passwordTwo.textContent = passwordGenerator();
})


    passwordOne.addEventListener('click', function()
{
    navigator.clipboard.writeText(passwordOne.textContent)
        copiedElv2.textContent=" "
        copiedEl.textContent="Copied to clipboard"
})

passwordTwo.addEventListener('click', function()
{
    navigator.clipboard.writeText(passwordTwo.textContent)
    copiedEl.textContent=" "
    copiedElv2.textContent="Copied to clipboard"
})
