/* I feel like these are pretty self explanatory functions */
function eyeOpen (divID)
{ divID.style.display = "block"; }

function eyeClose (divID) 
{ divID.style.display = "none"; }

/* Iterates through chapters, hides unselected, displays selected */
function blink (divID)
{
    chapters.forEach(blinkInside);

    /* Apparently this is a closure! Or... has closures? */
    /* Closures are things that can access outer function's scope from an inner function */
    /* blinkInside uses the divID from the outer function! */
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

/* Getting the elements into variables for easier access */
/* Story elements */
const ch1 = document.getElementById("ch1");
const ch2 = document.getElementById("ch2");
const ch3 = document.getElementById("ch3");
const chapters = [ch1, ch2, ch3];

const head = document.getElementById("chapterHead");

document.getElementById("body").addEventListener("load", header(1));
document.getElementById("body").addEventListener("load", blink(ch1));

/* Something is causing the event handlers to fall through */
/* Figure it out to remove onclick on index.html */
/*document.getElementById("ch1btn").addEventListener("click", blink(ch1));

document.getElementById("ch2btn").addEventListener("click", blink(ch2));

document.getElementById("ch3btn").addEventListener("click", blink(ch3));*/