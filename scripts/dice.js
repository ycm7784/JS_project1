// const domAdd = () => {
//     console.log('domAdd');
//     const btnl = document.createElement("button");
//     btnl.innerHTML ="확인";
//     btnl.id = "bt1";
//     btnl.className ="btc";


//     document.getElementById("content").append(btnl);

// }



const showDice =() =>{
    const n = Math.floor(Math.random() *6)+1
    const s1 = document.querySelector("#s1")
    s1.innerHTML =`<img src="./images/dice/${n}.png"/>`
    console.log(n)
}

// 요소 보이기 함수

const show = (dspS1,dspS2,dspS3,dspBt1,dspBt2) =>{
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    s1.style.display = dspS1 ;
    s2.style.display = dspS2 ;
    s3.style.display = dspS3 ;
    bt1.style.display = dspBt1 ;
    bt2.style.display = dspBt2;
}

document.addEventListener("DOMContentLoaded", ()=> {
    
    /*const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    s1.style.display = "none" ;
    s2.style.display = "block" ;
    s3.style.display = "none" ;
    bt1.style.display = "block" ;
    bt2.style.display = "none" ;*/

    show("none","block","none","block","none")
   
  });