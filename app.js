title = document.querySelector("h1");
subhead = document.querySelector("h2");

const container = document.querySelector(".container");

const heroParagraph = document.querySelector(".hero-para");
const modeText = document.querySelector(".mode-text");
const mainBody = document.querySelector("body");

title.addEventListener("mouseover",fun);
title.addEventListener("mouseout",fun2);


function fun(e){
    e.target.classList.add("h1Styled");
   
    

}

function fun2(e){
    e.target.classList.remove("h1Styled");
    
    
}


const checkBox = document.querySelector("input[type='checkbox']");


if(localStorage.getItem("mode") === "dark"){
    checkBox.checked = true;
}else{
    checkBox.checked = false;
}


checkBox.addEventListener("change",function(e){
    if(e.target.checked){
        
        changeMode("dark");

        localStorage.setItem("mode","dark");

    }
    else{
        changeMode("light");
        
        localStorage.setItem("mode","light");
    }
})


const checkMode = () =>{
    if(localStorage.getItem("mode") === "dark"){
        changeMode("dark");
    }else{
        changeMode("light");
    }
}


const changeMode = mode =>{
    if(mode === "dark"){
        container.classList.add("containerDarkStyled");
        container.classList.remove("containerLightStyled");
        heroParagraph.style.color = "#cccccc";
        modeText.textContent ="Dark Mode";
        mainBody.style.backgroundColor = "#1e1e1e";
    }
    else{
        container.classList.remove("containerDarkStyled");
        container.classList.add("containerLightStyled");
        heroParagraph.style.color = "#3f3f3f";
        modeText.textContent ="Light Mode"; 
        mainBody.style.backgroundColor = "#f2f2f2";
    }
}


document.onload = checkMode();
