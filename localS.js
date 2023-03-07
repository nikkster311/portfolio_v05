// check local storage
let localS = localStorage.getItem('theme');
if (localS === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
} else {
    document.body.setAttribute('data-theme', 'light');
}