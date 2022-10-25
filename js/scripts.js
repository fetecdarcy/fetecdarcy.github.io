document.body.style.setProperty('--background-color', '#f0f0f0');
document.body.style.setProperty('--background-color2', '#f0f0f0');
document.body.style.setProperty('--font-color', '#0f0f0f');


const btnMobile = document.getElementById('btn-mobile');
var btTheme = document.querySelector('.switch-toggle');
var themeDark = false;

if(localStorage.bt) btTheme.checked = localStorage.bt;

btTheme.addEventListener('click', () => {
    if(btTheme.checked) {
        document.body.style.setProperty('--background-color', 'black');
        document.body.style.setProperty('--background-color2', 'black');
        document.body.style.setProperty('--font-color', '#f0f0f0');
        themeDark = true;
        localStorage.bt = themeDark;
    }
    else {
        document.body.style.setProperty('--background-color', '#f0f0f0');
        document.body.style.setProperty('--font-color', '#0f0f0f');
        themeDark = false;
        localStorage.bt = themeDark;
    }
    console.log(themeDark);
});
