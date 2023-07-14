

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("render.js is loaded");
    document.querySelector(".header-block").addEventListener('click', e=>{
        let btnName = null;
        if(e.target.classList.contains('btn')){
            btnName = e.target.getAttribute('class').substr(4);
        } else if (e.target.parentNode.classList.contains('btn')){
            btnName = e.target.parentNode.getAttribute('class').substr(4);
        }

        if(btnName){
            globalThis.node.w_node({method: "window_control", data: btnName}).then((result)=>{
                if(result.class === 'max-btn'){
                    if(result.btn === 'MAX'){
                        document.querySelector('.'+result.class).children[0].classList.remove('fa-window-maximize');
                        document.querySelector('.'+result.class).children[0].classList.add('fa-window-restore');
                    } else if(result.btn === 'UNMAX'){
                        document.querySelector('.'+result.class).children[0].classList.remove('fa-window-restore');
                        document.querySelector('.'+result.class).children[0].classList.add('fa-window-maximize');
                    }
                }
            })
        }
    })
});

window.addEventListener("resize", ()=>{
    let btn = document.querySelector(".max-btn");
    globalThis.node.w_node({method: "window_control", data: "resize"}).then((result)=>{
        if(result.btn === 'MAX'){
            btn.children[0].classList.remove('fa-window-maximize');
            btn.children[0].classList.add('fa-window-restore');
        } else if(result.btn === 'UNMAX'){
            btn.children[0].classList.remove('fa-window-restore');
            btn.children[0].classList.add('fa-window-maximize');
        }
    }) 
    let chats = document.getElementsByClassName("send-mess-field");
    
    for (let chat of chats){ 
        let body_height = document.getElementsByClassName("body-block")[0].clientHeight;
        document.getElementById("guild_"+chat.getAttribute("id").slice("text_".length)).style.maxHeight = `${body_height-(5+chat.clientHeight)}px`   
    }
});

//My program
//******************************************** */

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    let text_field = document.getElementsByClassName("send-mess-field");
    for (i = 0; i < tabcontent.length; i++) {
        if(cityName!=="emojis_page")  tabcontent[i].style.display = "none";
        text_field[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    if(cityName!=="emojis_page") document.getElementById("text_"+cityName.slice("guild_".length)).style.display = "grid";
    
    evt.currentTarget.className += " active";
    
    let allHeightBlock = document.getElementById(cityName).scrollHeight-document.getElementById(cityName).offsetHeight; //Полная высота блока
    let currenHeightBlock = document.getElementById(cityName).scrollTop; // Текущая высота скрола

    document.getElementById(cityName).scrollBy(0, allHeightBlock - currenHeightBlock);

    
    
    
    let chats = document.getElementsByClassName("send-mess-field");
    
    for (let chat of chats){ 
        let body_height = document.getElementsByClassName("body-block")[0].clientHeight;
        document.getElementById("guild_"+chat.getAttribute("id").slice("text_".length)).style.maxHeight = `${body_height-(5+chat.clientHeight)}px`   
    }

}
let GlobalHideOrdinariInd = false;
function HideOrdinari(){
    if(GlobalHideOrdinariInd==false){
        for (let element of document.getElementsByClassName('ordinaryMess')){

            element.style.display = "none";
        }
    } else {
        for (let element of document.getElementsByClassName('ordinaryMess')){

            element.style.display = "";
        }
    }
    GlobalHideOrdinariInd = !GlobalHideOrdinariInd;
}
/* for (let element of document.getElementsByClassName('ordinaryMess')){

    element.style.display = "none";
} */

