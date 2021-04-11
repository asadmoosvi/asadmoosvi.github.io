let themeDots = document.getElementsByClassName('theme-dot');

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

function setTheme(mode) {
    enlargeDot(mode);
    if (mode === 'light') {
        document.getElementById('theme-style').href = 'css/app.css';
    } else if (mode === 'blue') {
        document.getElementById('theme-style').href = 'css/blue.css';
    } else if (mode === 'purple') {
        document.getElementById('theme-style').href = 'css/purple.css';
    } else if (mode === 'green') {
        document.getElementById('theme-style').href = 'css/green.css';
    }

    localStorage.setItem('theme', mode);
}


function enlargeDot(mode) {
    for (var i = 0; i < themeDots.length; i++) {
        themeDots[i].style.transform = '';
    }

    let dot = document.querySelector(`div[data-mode=${mode}]`);
    dot.style.transform = 'scale(1.3)';
}
