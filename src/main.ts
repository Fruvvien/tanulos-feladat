import './style.css'


document.addEventListener("DOMContentLoaded", ()=>{


  const input1 = document.getElementById("input1") as HTMLInputElement;

  const oszlop = document.getElementById("oszlop") as HTMLTableColElement;
  const keresettSzam = document.getElementById("keresettSzam") as HTMLSpanElement;
  const tomb :number[] = [];
  let szam : number = 0;
  let i: number= 0;
  document.getElementById("elkuld")?.addEventListener("click", () =>{
    szam = parseInt(input1.value);
    
    if(szam >0 && szam <=5){
      tomb.push(szam)
    }else{
      alert("nem megfelelő szám")
    }
   
    oszlop.innerHTML += 
    `
    <li>
    ${tomb[i]}
    </li>
    `
    i++
    

    
  })

  document.getElementById("kereses")?.addEventListener("input", (e) =>{
    let szam1: number = parseInt(e.currentTarget!.value)  ;

    for (let index = 0; index < tomb.length; index++) {
      if(tomb[index] == szam1 ){
        keresettSzam.textContent +=
      `
      ${tomb[index]}
      `
      }
      
    }
  })

 

})