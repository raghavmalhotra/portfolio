title = document.querySelector("h1");
subhead = document.querySelector("h2");

const container = document.querySelector(".container");

const heroParagraph = document.querySelector(".hero-para");
const modeText = document.querySelector(".mode-text");
const mainBody = document.querySelector("body");

title.addEventListener("mouseover",fun);
title.addEventListener("mouseout",fun2);


const fun = () => title.classList.add("h1Styled");
const fun2 = () => title.classList.remove("h1Styled");

const checkBox = document.querySelector("input[type='checkbox']");

if(localStorage.getItem("mode") === "dark"){
    checkBox.checked = true;
}else{
    checkBox.checked = false;
}

checkBox.addEventListener("change",function(e){

    e.target.checked?changeMode("dark"):changeMode("light");   
})

const checkMode = () =>{
    localStorage.getItem("mode") === "dark"? changeMode("dark"): changeMode("light");
}

const changeMode = mode =>{
    if(mode === "dark"){
        container.classList.add("containerDarkStyled");
        container.classList.remove("containerLightStyled");
        heroParagraph.style.color = "#cccccc";
        modeText.textContent ="Dark Mode";
        mainBody.style.backgroundColor = "#1e1e1e";
        localStorage.setItem("mode","dark");
    }
    else{
        container.classList.remove("containerDarkStyled");
        container.classList.add("containerLightStyled");
        heroParagraph.style.color = "#3f3f3f";
        modeText.textContent ="Light Mode"; 
        mainBody.style.backgroundColor = "#f2f2f2";
        localStorage.setItem("mode","light");
    }
}
document.onload = checkMode();
