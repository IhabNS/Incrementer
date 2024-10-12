const decreaseB = document.getElementById("decreaseID");
const resetB = document.getElementById("resetID");
const increaseB = document.getElementById("increaseID");
const counterS = document.getElementById("numberID");
const seaBtn = document.getElementById("seaBtn");

let count = 0;
let theme = 1;

function setSeaTheme()
{
    document.querySelector("body").classList.toggle("bodySea");
    document.querySelectorAll(".btnS")[0].classList.toggle("btnSea");
    document.querySelectorAll(".btnS")[1].classList.toggle("btnSea");
    document.querySelectorAll(".btnS")[2].classList.toggle("btnSea");
    document.querySelector(".cardDiv").classList.toggle("cardSea");
    theme++;
}

function setJungleTheme()
{
    document.querySelector("body").classList.toggle("bodyJungle");
    document.querySelectorAll(".btnS")[0].classList.toggle("btnJungle");
    document.querySelectorAll(".btnS")[1].classList.toggle("btnJungle");
    document.querySelectorAll(".btnS")[2].classList.toggle("btnJungle");
    document.querySelector(".cardDiv").classList.toggle("cardJungle");
    theme++;
}

function setSunTheme()
{
    document.querySelector("body").classList.toggle("bodySunshine");
    document.querySelectorAll(".btnS")[0].classList.toggle("btnSunshine");
    document.querySelectorAll(".btnS")[1].classList.toggle("btnSunshine");
    document.querySelectorAll(".btnS")[2].classList.toggle("btnSunshine");
    document.querySelector(".cardDiv").classList.toggle("cardSunshine");
    theme++;
}

seaBtn.onclick = function()
{
    if(theme === 1)
    {
        setSeaTheme();
    }
    
    else if(theme === 2)
    {
        setJungleTheme();
    }
    
    else if(theme === 3)
    {
        setSunTheme();
    }

    else if(theme === 4)
    {
        setSeaTheme();
        setJungleTheme();
        setSunTheme();
        
        theme = 1;
    }
}

decreaseB.onclick = function()
{
    count--;
    counterS.textContent = count;
}

resetB.onclick = function()
{
    count = 0;
    counterS.textContent = count;
}

increaseB.onclick = function()
{
    count++;
    counterS.textContent = count;
}

