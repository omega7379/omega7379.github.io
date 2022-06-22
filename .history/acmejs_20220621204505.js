/*enable switch for css pages-->*/
   function toggleTheme(){
       var theme = document.getElementsByTagName('link'){  
            if (theme.getAttribute('href') == 'acmeStyleGuideDark.css'){
           theme.setAttribute('href', 'acmeStyleGuideLight.css');
       }
       else {
           theme.setAttribute('href', 'acmeStyleGuideDark.css');
       }
   }
