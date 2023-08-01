let open = false;

let x = document.querySelectorAll(".link-size");
var i;
for(i =0; i<5;i++){
    if(x[i].addEventListener)
    console.log(x[i]+" "+i)
    if(x[i].addEventListener("click", haha())){
        changeBg(i);
    }
}

// if(x[0].addEventListener('click',(e) => {
//     console.log('A link was clicked');
//   })){
//     console.log("haha")
//     changeBg();
// }else{
//     console.log("nope")
// }

function changeBg(i){
    console.log("Changed")
    x[i].style.background = "linear-gradient(-90deg, rgba(0, 159, 119, 0.819),rgba(60, 60, 255, 0.819)), rgba(60, 60, 255, 0.719)";
}

function haha(){
    console.log("button check")
}