
// const nam=document.body;
//  nam.style.backgroundColor="red";
// const changebackground=()=>{
// document.body.style.backgroundColor="green";
// }
const selecter=document.getElementById=("zodiac");

const changebackground=()=>{
    switch (zodiac.value) {
        case "aries":
            document.body.style.backgroundColor="red"; 
        break;

        case "tarus":
            document.body.style.backgroundColor="#03fc6f"; 
        break;

        case "gemini":
            document.body.style.backgroundColor="#fce514";
        break;

        case "cancer":
            document.body.style.backgroundColor="#fffcf7"; 
        break;

        case "leo":
            document.body.style.backgroundColor="yellow"; 
        break;

        case "virgo":
            document.body.style.backgroundColor="grey"; 
        break;

        case "libra":
            document.body.style.backgroundColor="orange";
        break;

            case "scorpio":
            document.body.style.backgroundColor="brown"; 
        break;

        case "sagittarius":
            document.body.style.backgroundColor="#994ead";
        break;

        case "aquarius":
            document.body.style.backgroundColor="#579eeb";
         break;

        case "capricorn":
            document.body.style.backgroundColor="#eb8d57"; 
        break;

        case "pisces":
            document.body.style.backgroundColor="#fc88d8";
        break;

            
            
    
    default:
         break;
  }
};