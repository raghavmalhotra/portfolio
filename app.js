

const container = document.querySelector(".container");

const heroParagraph = document.querySelector(".hero-para");
// const modeText = document.querySelector(".mode-text");
const mainBody = document.querySelector("body");

const checkBox = document.querySelector("input[type='checkbox']");

const moonIcon = document.querySelector('#moon');
const iconBody = document.querySelector('#main');
const moonScars = document.querySelectorAll('.scar');


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
       
        
        mainBody.style.backgroundColor = "#1e1e1e";
        localStorage.setItem("mode","dark");

        iconBody.style.fill = "#E6E6E6"; 
        document.querySelector(".moon-graphic").style.filter = "drop-shadow(1px 1px 20px  #b2b2b183)" ;  
        
        moonScars.forEach(scar => scar.style.opacity = "100%" );

    }
    else{
        container.classList.remove("containerDarkStyled");
        container.classList.add("containerLightStyled");
        heroParagraph.style.color = "#3f3f3f";
       
        mainBody.style.backgroundColor = "#f2f2f2";
        localStorage.setItem("mode","light");

        document.querySelector(".moon-graphic").style.filter = "drop-shadow(1px 1px 25px  #f5b833)"
        iconBody.style.fill = "#f5b833"; 

        moonScars.forEach(scar => scar.style.opacity = " 0 ");

        // moonScars.forEach(scar => scar.style.transform = " translate(50%,50%) scale(0,0) ");
    }
}
document.onload = checkMode();
