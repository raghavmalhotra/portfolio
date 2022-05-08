title = document.querySelector("h1");
subhead = document.querySelector("h2");

title.addEventListener("mouseover",fun);
title.addEventListener("mouseout",fun2);

function fun(e){
    e.target.classList.add("h1Styled");
   
    

}

function fun2(e){
    e.target.classList.remove("h1Styled");
    
    
}