/* -----Variables----- */
/* Story elements */
const ch1 = document.getElementById("ch1");
const ch2 = document.getElementById("ch2");
const ch3 = document.getElementById("ch3");
const chapters = [ch1, ch2, ch3];

/* Chapter header */
const head = document.getElementById("chapterHead");

/* Navbar elements */
const navbar = document.getElementById("sidebar");

/* Button elements */
const ch1Btn = document.getElementById("ch1-btn");
const ch2Btn = document.getElementById("ch2-btn");
const ch3Btn = document.getElementById("ch3-btn");
const dark = document.getElementById("darkMode-btn");

/* -----Event Listeners----- */
/* Page Load events */
document.getElementById("body").addEventListener("load", header(1)); 
document.getElementById("body").addEventListener("load", blink(ch1));

/* Expand navbar */
/* The toggle class function is awesome, btw. 
*  TODO: Use toggle for dark mode! 
*/
document.getElementById("navExpand").addEventListener("click", function(){ navbar.classList.toggle("sidebarExtended"); });

/* "Load" chapters */
/* Apparently, when you have parameters involved, wrapping it in an anonymous function is good 
*  It also seems to have fixed the fallthrough issue */
ch1Btn.addEventListener("click", function() { blink(ch1); });
ch2Btn.addEventListener("click", function() { blink(ch2); });
ch3Btn.addEventListener("click", function() { blink(ch3); });

/* -----Functions-----*/
/* Show */
function eyeOpen (divID)
{ divID.style.display = "block"; }
/* Hide */
function eyeClose (divID) 
{ divID.style.display = "none"; }

/* Iterates through chapters, hides unselected, displays selected */
function blink (divID)
{

    console.log([divID]);

    chapters.forEach(blinkInside);

    /*  Apparently this is a closure! Or... has closures? */
    /*  Closures are things that can access outer function's scope from an inner function */
    /*  blinkInside uses the divID from the outer function! */
    
    /*  The function iterates through the array of chapters 
    *   divID here is the divID of the chapter that was selected from navbar
    *   if divID is not the same, that chapter is hidden
    *   If divID matches the one selected from navbar, it is displayed
    */
    function blinkInside(item, index)
    {
        if(!(item === divID))
        { eyeClose(item); }
        else
        { 
            eyeOpen(divID); 
            header(index + 1);
        }
    }
}

/* Come on, this can't be simpler */
function header(num)
{
    switch(num)
    {
        case 1: head.innerHTML = "Chapter 1";
        break;
        case 2: head.innerHTML = "Chapter 2";
        break;
        case 3: head.innerHTML = "Chapter 3";
        break;
    }
}