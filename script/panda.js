console.log('js added');

// h2 tag coor change 
const headingColor=document.querySelectorAll('h2');
for(heading of headingColor){
   heading.style.color="lightblue"
}

// backpack id color change 

document.getElementById("backpack").style.backgroundColor="tomato";
//card borderRadius change
const cardCloction=document.getElementsByClassName("card");
for(card of cardCloction){
    card.style.borderRadius="30px"
}

// button add function 

function buttonADD(){
    console.log("button add");

    function buttonAddEvent(){
        let backpack=document.getElementById("backpack");
        backpack.innerHTML=`<button class="button-primary">Button</button>`
    }
    buttonAddEvent();
}


// remove card 

 //2nd try
// for (card of cardCloction){
//     card.addEventListener("click",function (event) {
//         if (event.target.className ==="panda-btn-buy-now")
//         {
//            let removes=event.target;
//            removes.remove()
//         }
        
//     })
// }

// 3rd try 
// const container = document.querySelector(".container");
// container.addEventListener("click", function(event) {
//   if (event.target.classList.contains("panda-btn-buy-now")) {
//     event.target.closest(".col").remove();
//   }})
//4th try
const buyNowButtons = document.querySelectorAll(".panda-btn-buy-now");

for ( let button of buyNowButtons){
    button.addEventListener("click",function (event) {
        let card =event.target.parentElement.parentElement.parentElement;
        card.remove();
    })
}

//disable button 
document.getElementById("exampleInputEmail").addEventListener("keyup",function (event) {
    if(event.target.value === "email"){
     document.getElementById("disabled").removeAttribute("disabled")
    }
    else{
        document.getElementById("disabled").setAttribute("disabled",true)
    }
})
//   image original.jpg" change to mouse enter 

let images = document.getElementsByTagName("img");

for ( const img of images){
    img.addEventListener("mouseenter",function (event) {
       img.src=""
    })
}


// lets double click to backgroundColor change 