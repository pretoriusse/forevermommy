oneJQuery(document).ready(function(){window.setTimeout(function(){try{window.IN.parse()}catch(e){}try{window.FB.XFBML.parse()}catch(e){}try{window.twttr.widgets.load()}catch(e){}try{window.gapi.plus.go()}catch(e){}},1000);oneJQuery('.shareself').delegate('a','click',function(evt){evt.preventDefault();evt.stopPropagation();window.open(oneJQuery(this).attr('href')+encodeURIComponent(window.location.href))})});