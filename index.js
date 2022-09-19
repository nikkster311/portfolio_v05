let lightTheme = true;

function toggleTheme() {
    console.log('running toggleTheme')
    console.log('lighttheme - ' + lightTheme)
    lightTheme = !lightTheme
    console.log('changed -- lighttheme - ' + lightTheme)

    document.body.setAttribute('data-theme', lightTheme === true ? 'light' : 'dark')
}
