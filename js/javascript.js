
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
    
    if(scroller.e.scrollLeft==50)
        {
            console.log("X ER = " + scroller.e.scrollLeft);
            
            garn.style.transform = "rotate(20deg)";
        }
    
    
    
    if(scroller.e.scrollLeft==1540)
        {
            documents.getElementById("dvideo")
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

 
// ---------------------------- // 
 

;( function( window ) {

	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function DotNav( el, options ) {
		this.nav = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	DotNav.prototype.options = {};

	DotNav.prototype._init = function() {
		// special case "dotstyle-hop"
		var hop = this.nav.parentNode.className.indexOf( 'dotstyle-hop' ) !== -1;

		var dots = [].slice.call( this.nav.querySelectorAll( 'li' ) ), current = 0, self = this;

		dots.forEach( function( dot, idx ) {
			dot.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				if( idx !== current ) {
					dots[ current ].className = '';

					// special case
					if( hop && idx < current ) {
						dot.className += ' current-from-right';
					}

					setTimeout( function() {
						dot.className += ' current';
						current = idx;
						if( typeof self.options.callback === 'function' ) {
							self.options.callback( current );
						}
					}, 25 );						
				}
			} );
		} );
	}

	// add to global namespace
	window.DotNav = DotNav;

})( window );