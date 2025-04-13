function picture(ext)
{document.write("<p><center><img src=",pm[0],".",ext,"></center>"); }

function vector(ext)
{picture(ext);
document.write("<p><center><small><a href=",pm[0],".",pm[1],">скачать векторный рисунок</a> :: <a href=",location.pathname,"?",pm[0],"*swf>посмотреть flash-рисунок</a></small></center>");}

var pm=location.search.substring(1).split('*');
switch(pm[1])
{
case "gif": picture("gif"); break;
case "jpg": picture("jpg"); break;
case "png": picture("png"); break;
case "cdr": vector(pm[2]); break;

case "wrl":
document.write("<p><small><center>Для просмотра сцены понадобится VRML-клиент. Например <a href=http://www.paragraph.ru/cortona/>Cortona VRML-client</a> или <a href=http://www.cosmosoftware.com>Cosmo Player</a>");
document.write("<p><embed src=",pm[0],".wrl width=700 height=350 >");
document.write("<p><a href=",pm[0],".wrl>посмотреть сцену на весь экран</a> :: <a href=",pm[0],".zip>скачать сцену</a></small></center>"); break;

case "xar":
vector(pm[2]);
document.write("<br><center><a href=http://www.xara.com/xx.asp?ID=164936><img src=http://ab-lib.narod.ru/banner/xarax.gif  alt='скачать XaraX'></a></center>"); break;

case "sxd":
picture("gif");
document.write("<p><center><small><a href=",pm[0],".sxd>скачать векторный рисунок</a></small></center>"); break;

case "por":
picture("gif");
document.write("<p><center><small><a href=",pm[0],".por>скачать портрет</a></small></center>"); break;

case "swf":
document.write("<p><center><small>Для просмотра понадобится <a href=http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash>плагин от Macromedia</a>");
document.write("<p><embed src=",pm[0],".swf quality=high width=500 height=500 type=application/x-shockwave-flash pluginspage=http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash></small></center>"); break;
}