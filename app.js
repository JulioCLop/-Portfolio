const panels = document.querySelectorAll('.panel');

panels.forEach( panel =>{

    panel.addEventListener("click", ()=>{
        removeActiveClasses()
        panel.classList.add("active");
        

    })
})

function removeActiveClasses(){
    panels.forEach( panel =>{

        panel.classList.remove('active');

    })
}


//  nav button transform

let rotates = document.querySelectorAll('.social');

rotates.forEach( rotate =>{

    rotate.addEventListener("mouseover", ()=>{
       
       rotate.classList.add('btn_disappear');

       setTimeout(function(){
        rotate.classList.remove('btn_disappear');
    }, 300)


    })


})

// Header h1 animation-contact page
document.addEventListener('DOMContentLoaded', function() {

    showText("#msg", "Let's get in touch!", 0, 100);

});

let showText = function (target, message, index, interval) {
    if (index < message.length) {
        document.querySelector(target).innerHTML =
            document.querySelector(target).innerHTML + message[index++];
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}

// main page - animation for header

document.addEventListener('DOMContentLoaded', function() {

    headTexts("#heads", "Front-End Developer", 0, 100);

});

let headTexts = function (target, message, index, interval) {
    if (index < message.length) {
        document.querySelector(target).innerHTML =
            document.querySelector(target).innerHTML + message[index++];
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}