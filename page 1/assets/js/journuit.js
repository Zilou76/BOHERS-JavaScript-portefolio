const button = document.querySelector("#button");
const body = document.querySelector("body");
const btncolor = document.querySelector("button-début-jour")
const nav = document.querySelector("header")



button.addEventListener("click", function() {
    if (body.classList.contains("jour")) {
      body.classList.add("nuit");
      body.classList.remove("jour");
      nav.classList.add = ("nuitNav"); 
      nav.classList.remove = ("jourNav"); //ne veut pas s'enlever
      button.innerText = "Mode Jour";

     // btncolor.classList.remove("button-début-jour")
     //btncolor.classList.add("button-début-nuit")
    } else {
      body.classList.add("jour");
      body.classList.remove("nuit");
      nav.classList.add = ("jourNav");
      nav.classList.remove = ("nuitNav");
      button.innerText = "Mode Nuit";

      //btncolor.classList.remove("button-début-nuit")
      //btncolor.classList.add("button-début-jour")
    }
    
  });