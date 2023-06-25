
var navMenuAn=document.querySelectorAll(".nav-menu a");
var progressBars= document.querySelectorAll(".skill-progress > div");
var skillContain= document.getElementById("skill-container");
// var skillBlock= document.getElementsByClassName("skill-progress");




for(let i=0;i<navMenuAn.length;i++){
    navMenuAn[i].addEventListener('click',function(event){
        event.preventDefault();
         var sectionId= this.textContent.trim().toLowerCase();
         var section=document.getElementById(sectionId);
          
        // 1 interval= setInterval(scrollFun, 10,section) 

        // 2interval = setInterval(()=>{
        //    scrollFun(section)// calling fuction with argument
        // } ,10)
        var interval =setInterval(()=>{
            var postion= section.getBoundingClientRect();
             console.log(postion);
             if(postion.top <= 0){
                clearInterval(interval);
                return;
            }  
             else if(postion.top <=190 && postion.height == 483.109375){
                 clearInterval(interval);
                return;
             }
            window.scrollBy(0,50);
        },50)

    }) 
}




function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// function checkScroll(){
//    // var coordinate= skillContain.getBoundingClientRect();
//     var coordinate= skillBlock.getBoundingClientRect();

//     if(!onceAnimate && coordinate.top<=window.innerHeight){
//         onceAnimate = true;
//         //console.log("it works")
//         fillbars();
//     }
//     else if(coordinate.top > window.innerHeight){
//         onceAnimate=false;
//         intiliaseBar();
//     }

// }




// var currPos=0;
// var targPos=1000;
// var scrInt= setInterval(function(){
//     if(currPos >= targPos){
//        clearInterval(scrInt);   
//     }
//     currPos+=50;
//     window.scrollBy(0,50);
// },50);