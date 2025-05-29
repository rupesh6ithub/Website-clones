const prButton = document.getElementById("prButton"); 
const banner = document.getElementsByClassName("banner")[0];

let isPaused = false;

prButton.addEventListener("click",()=>{
    if(!isPaused){
        banner.classList.add("paused")
        prButton.innerHTML='<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/circled-play.png" alt="circled-play"/>'
        isPaused = true;
    }
    else{
        banner.classList.remove("paused");
        prButton.innerHTML='<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/circled-pause.png" alt="circled-pause"/>'
        isPaused = false;
    }
})