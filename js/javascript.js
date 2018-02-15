var scroller = {};
scroller.e = document.getElementById("b");

if (scroller.e.addEventListener) 
{
    
    scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
    scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
} else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);

function MouseWheelHandler(e) 
{

    // cross-browser wheel delta
    var e = window.event || e;
    var delta = - 20 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));

    var pst = $('#b').scrollLeft() + delta;
    
    var garn = document.getElementById("yarn");
   
    var tal = 0;
    
    if(scroller.e.scrollLeft+20)
        {
            console.log("X ER = " + scroller.e.scrollLeft);
            
            tal++;
            console.log(tal);
            
            garn.style.transform = "rotate(20deg)";
        }
    
    if (pst < 0) 
    {
        pst = 0;
        
    } else if (pst > $('img_holder').width()) 
    {
        pst = $('img_holder').width(); 
        
    }

    $('#b').scrollLeft(pst);


    
    
    return false;
    
    
}

 



