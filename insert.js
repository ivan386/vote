var script   = document.createElement('script');
script.type  = 'text/javascript';
script.src   = chrome.extension.getURL("script.user.js");
script.async = 1;
document.head.appendChild(script);