let lightTheme = true;

function toggleTheme() {
    lightTheme = !lightTheme
    document.body.setAttribute('data-theme', lightTheme === true ? 'light' : 'dark')
    document.getElementById('light-icon').style.display = (lightTheme === true ? 'none' : 'block')
    document.getElementById('dark-icon').style.display = (lightTheme === true ? 'block' : 'none')
}

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
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