let title = document.getElementById('title');
let complement_title = document.getElementById('complement_title');
let img = document.getElementById('bottomImg');
let body = document.querySelector('body');
let more = document.getElementById('more');
let explore = document.querySelector('.explore')
let share = document.querySelector('.share');
let cookie = "";
let isMore = false;
let transition = document.getElementById('transition')

function getMore(){
    if(isMore == false){
        window.scroll(0, 0);
        body.style.height = "100vh";
        body.style.overflow = "hidden";
        title.style.transform = "translate(-50%, -150%)";
        complement_title.style.opacity = "100%";
        complement_title.style.pointerEvents = "auto";
        more.innerHTML = "less";
        isMore = true
    }
    else{
        body.style.height = 'auto';
        body.style.overflow = "auto";
        title.style.transform = "translate(-50%, -50%)";
        complement_title.style.opacity = "0%";
        complement_title.style.pointerEvents = "none";
        more.innerHTML = "more";
        isMore = false
    }
}

function goToExplore(){
    if(explore.classList.contains('actual')){
        getMore();
    }
    else{
        transition.style.height = '100%';
        setTimeout(function(){
            window.location.href = "explore.html";
        }, 1000);
    }
}

function goToShare(){
    if(share.classList.contains('actual')){
        getMore();
    }
    else{
        transition.style.height = '100%';
        setTimeout(function(){
            window.location.href = "share.html";
        }, 1000);
    }
}

more.addEventListener("click", getMore);
explore.addEventListener("click", goToExplore);
share.addEventListener("click", goToShare);
window.addEventListener('load', function(){
    this.setTimeout(function(){
        transition.style.height = '0';
    }, 200)
});