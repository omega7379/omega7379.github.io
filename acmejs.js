/*enable switch for css pages-->*/
function toggleTheme(){
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'acmeStyleGuideDark.css'){
        theme.setAttribute('href', 'acmeStyleGuideLight.css');
    }
    else {
        theme.setAttribute('href', 'acmeStyleGuideDark.css');
    }
}
toggleTheme.init()
/*
function toggleTheme(){
    document.getElementsById('theme').href='acmeStyleGuideLight'
}*/