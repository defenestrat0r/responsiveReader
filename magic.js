/* Page Load events */
/* 'Load' event fires late, so we're using DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {
    
    /* -----Variables----- */
    /* Story elements */
    const chapters = ['#ch1', '#ch2', '#ch3',].map(i => document.querySelector(i));
    
    /* Chapter header */
    const head = document.querySelector("#chapterHead");
    
    /* Navbar elements */
    const navbar = document.querySelector("#navbar");
    
    /* Button elements */
    const chButtons = [ '#ch1-btn', '#ch2-btn', '#ch3-btn',].map(i => document.querySelector(i));
    const dark = document.querySelector("#darkMode-btn");
    
    /* -----Event Listeners----- */
    /* Expand navbar */
    /* The toggle class function is awesome, btw. */
    document.querySelector("#navExpand").addEventListener("click", () => { navbar.classList.toggle("navbarExtended"); });

    /* Dark Mode */
    dark.addEventListener("click", sepulchre);
    /* Activates dark mode if user has it set as preferred theme */
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) { sepulchre(); }

    /* "Load" chapters */
    /* God I'm loving anonymous functions and loops */
    /* Also the spacing and braces are on purpose. I know I can turn it into a single line, but ew. */
    chButtons.forEach( function (element, index) 
    { 
        element.addEventListener("click", () => 
        { 
            blink(chapters[index]); 
        });
    });

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
            if(!(item === divID)) { eyeClose(item); }
            else
            { 
                eyeOpen(divID); 
                header(index + 1);
            }
        }
    }

    /* Turns out, that function *could* get simpler */
    /* header(x) passes the x value as a parameter to the rest of the func */
    const header = (num) => head.innerHTML = `Chapter ${num}`; 
    
    /* Dark mode utility function */
    function sepulchre() { document.body.classList.toggle("darkMode"); }

    /* Calling these two when DOM finishes loading so we don't start on a blank page */
    header(1);
    blink(chapters[0]);
    
});
