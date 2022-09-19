let lightTheme = true;

function toggleTheme() {
    console.log('running toggleTheme')
    console.log('lighttheme - ' + lightTheme)
    lightTheme = !lightTheme
    console.log('changed -- lighttheme - ' + lightTheme)

    document.body.setAttribute('data-theme', lightTheme === true ? 'light' : 'dark')
}


// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        console.log('scrollFunction')
        console.log(document.body.scrollTop)
        // console.log(document.)
        if (window.scrollY > 30 ) {
            document.getElementById("topBtn").style.display = "block";
        } else {
            document.getElementById("topBtn").style.display = 'none';
        }
    }

// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }